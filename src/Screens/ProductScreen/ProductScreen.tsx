import React, {useState, useEffect} from 'react';
import {Text, ScrollView, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useRoute, useNavigation} from '@react-navigation/native';
import {DataStore, Auth} from 'aws-amplify';
import {Product } from '../../models';

import styles from './styles';
import QuantitySelector from '../../Components/QuantitySelector/QuantitySelector';
import Button from '../../Components/Button/Button';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';
import { useDispatch, useSelector } from 'react-redux';



const ProductScreen = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined);

  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined,
  );
  const [quantity, setQuantity] = useState(1);

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params.id).then(setProduct);
  }, [route.params?.id]);

  useEffect(() => {
    if (product?.options) {
      setSelectedOption(product.options[0]);
    }
  }, [product]);
  

  const onAddToCart = async () => {
    // const userData = await Auth.currentAuthenticatedUser();

    if (!product ) {
      return;
    }
    
    // const newCartProduct = new CartProduct({
    //   userSub: userData.attributes.sub,
    //   quantity,
    //   option: selectedOption,
    //   productID: product.id,
    // });
    function generateShortUniqueId() {
      // Generate a random 8-character alphanumeric string.
      const randomString = Math.random().toString(36).substr(2, 8);
    
      return randomString;
    }
   
    dispatch({
      type: "ADD",
      payload: {
      product: product,
      userSub: `Guest N:${generateShortUniqueId()}`,
      quantity:quantity ,
      option: selectedOption,
      productID: product.id,
      image: product.image,
      title: product.title
         }
    });

   

   
setQuantity(1);
setSelectedOption(undefined);

    // await DataStore.save(newCartProduct);
    navigation.navigate('ShopingCart');
  };
  const cartItems = useSelector((state: { items: Item[] }) => state.cartReducer.items);
  

  // console.log("Data comig from redux:", cartItems);
  

  if (!product) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image carousel */}
      <ImageCarousel images={product.images} />

      {/* Option selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map((option, i) => (
          <Picker.Item label={option} value={option} key={i} />
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
        from ${product.price.toFixed(2)}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>
        )}
      </Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Qunatiti selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Button
        text={'Add To Cart'}
        onPress={onAddToCart}
        containerStyles={{backgroundColor: '#00FF00', marginBottom:30}}
      />
      {/* <Button
        text={'Buy Now'}
        onPress={onAddToCart}
      /> */}
    </ScrollView>
  );
};

export default ProductScreen;
