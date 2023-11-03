import React, {useState, useEffect,} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  LogBox
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation, useRoute} from '@react-navigation/native';
import countryList from 'country-list';
import {Auth, DataStore, API, graphqlOperation} from 'aws-amplify';
import {useStripe} from '@stripe/stripe-react-native';
import {Order, SelectedProduct} from '../../models';
import {createPaymentIntent} from '../../graphql/mutations';

import Button from '../../Components/Button/Button';
import styles from './styles';
import { useSelector } from 'react-redux';
import { Item } from '../../redux/actions';

LogBox.ignoreAllLogs();

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[232].code);
  const [fullname, setFullname] = useState('');
  const [addressEmail, setAddressEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [emailAddressError, setEmailddressError] = useState('');


  const [city, setCity] = useState('');
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const navigation = useNavigation();
  const route = useRoute();
  // @ts-ignore
  const amount = Math.floor((route.params?.subTotalPrice  + route.params?.tax + route.params?.shippingFee ) * 100 || 0);

  const cartItems = useSelector(
    // @ts-ignore
    (state: { items: Item[] }) => state.cartReducer.items);

    function generateUniqueId() {
      const timestamp = new Date().getTime();
      const uniqueId = `#${timestamp}`;
      return uniqueId;
    }
    const generatedInuiqueId = generateUniqueId(); 

  useEffect(() => {
    fetchPaymentIntent();
  }, []);

  useEffect(() => {

    if (clientSecret) {
      initializePaymentSheet();
    }
  }, [clientSecret]);



  const fetchPaymentIntent = async () => {
    const response = await API.graphql(
      graphqlOperation(createPaymentIntent, {amount}),
    );
    // @ts-ignore
    setClientSecret(response.data.createPaymentIntent.clientSecret);
  };



  const initializePaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
    const {error} = await initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName:"merchantDisplayName"
    });
    console.log('success');
    if (error) {
      Alert.alert(error.message);
    }
  };

  const openPaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
        // @ts-ignore
    const {error} = await presentPaymentSheet({clientSecret});

    if (error) {
      Alert.alert(`Payment Status: ${error.code}`, `${error.message}. Please try again!`);
    } else {
     
    Alert.alert('Payment Confirmed', 'Thank you for shopping with us! Your payment has been successfully processed. Enjoy your purchase!');
    
      saveOrder();

  }
};

  const saveOrder = async () => {
    // get user details
    // const userData = await Auth.currentAuthenticatedUser();
    // create a new order
    const newOrder = await DataStore.save(
      new Order({
        userSub:  "Guest N: " + generatedInuiqueId,
        fullName: fullname,
        phoneNumber: phone,
        country : country + " Email" + addressEmail,
        city: city,
        address: address,
        generatedID: generatedInuiqueId,
        isShipped:false,
         // @ts-ignore
          Orderproducts:  cartItems,
         // @ts-ignore
        totalPrice: route.params?.tax + route.params?.shippingFee + route.params?.subTotalPrice  || 0
      }),
    );

  for(let i = 0; cartItems.length > i ; i++ ){
    const newSelectedProduct = await DataStore.save(
      new SelectedProduct({
        
        title: cartItems[i]?.title,
        quantity: cartItems[i]?.quantity,
        image: cartItems[i]?.image,
        options : cartItems[i]?.option,
        price: cartItems[i]?.product.price,
        origin: cartItems[i]?.product.origin,
        // generatedID: generatedInuiqueId,
        seller:cartItems[i]?.product.seller,
        shippingCost: cartItems[i]?.product.shippingCost,
        orderOrderproductsId:generatedInuiqueId
      }),
    );

  }
   






    const orderDetails = {
            items: cartItems,
            orderUniqueId: generatedInuiqueId,
            // @ts-ignore
            subTotalPrice: route.params?.subTotalPrice || 0,
            // @ts-ignore
            tax: route.params?.tax  || 0, // Calculate tax if needed
            // @ts-ignore
            shippingFee : route.params?.shippingFee  || 0,
            // @ts-ignore
            totalPrice: route.params?.tax + route.params?.shippingFee + route.params?.subTotalPrice  || 0,
            
          };
        setAddressEmail('');
         setAddress('');
         setCity('');
         setFullname('');
         setPhone('');
          // @ts-ignore
          navigation.navigate('OrderConfirmation', { orderDetails });
  };

  const onCheckout = () => {
  
    if (addressError) {
      Alert.alert('Fix all field errors before submiting');
      return;
    }
    if (emailAddressError) {
      Alert.alert('Please enter a valid email address!');
      return;
    }

    if (!fullname) {
      Alert.alert('Please fill in the fullname field');
      return;
    }

    if (!phone) {
      Alert.alert('Please fill in the phone number field');
      return;
    }

    // handle payments
    openPaymentSheet();
    // saveOrder();
   
  };

  const validateAddress = () => {
    if (address.length < 10) {
      setAddressError('Address is too short');
    }
  };


  function validateEmail(inputText: any) {
    // Define a regular expression pattern for a valid email format.
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     return emailPattern.test(inputText);
  };

  const validateAddressEmail = () => {
    if (validateEmail(addressEmail) === false || addressEmail.length < 0) {
      setEmailddressError('Email Address is not valid!');
    }
  };








  const validateCity = () => {
    if (city.length < 2 || city.length === 0) {
      // setAddressError('City is too short');
      alert("City is too short")
    }
  };

  const validatePhoneNumber = () => {
    if (phone.length < 10) {
      // setAddressError('Phone number is too short');
      alert("Phone number is too short")
    }
  };

  // console.log("cart Item Array: ", cartItems);


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map((country, i: number) => (
              <Picker.Item value={country.code} label={country.name} key={i}  />
            ))}
          </Picker>
        </View>
           {/* Email Address */}
           <View style={styles.row}>
          <Text style={styles.label}>Email Address*</Text>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            value={addressEmail}
            onEndEditing={validateAddressEmail}
            onChangeText={text => {
              setAddressEmail(text);
              setEmailddressError('');
            }}
          />
           {!!emailAddressError && (
            <Text style={styles.errorLabel}>{emailAddressError}</Text>
          )}
        </View>

        {/* Full name */}
        <View style={styles.row}>
          <Text style={styles.label}>Full Name* (First and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>

        {/* Phone number */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number*</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            onEndEditing={validatePhoneNumber}
            keyboardType={'phone-pad'}
          />
        </View>

        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Full Address*(Zip Code Required)</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onEndEditing={validateAddress}
            onChangeText={text => {
              setAddress(text);
              setAddressError('');
            }}
          />
          {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )}
        </View>

        {/* City */}
        <View style={styles.row}>
          <Text style={styles.label}>City*</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            onEndEditing={validateCity}
            value={city}
            onChangeText={setCity}
          />
        </View>

        <Button text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;