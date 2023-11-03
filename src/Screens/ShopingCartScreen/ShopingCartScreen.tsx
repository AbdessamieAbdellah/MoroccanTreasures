import CartProductItem from "../../Components/CartProductItem/CartProductItem";
import Button from "../../Components/Button/Button";

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DataStore, Auth } from "aws-amplify";

import { Product, } from "../../models";
import { useDispatch, useSelector } from "react-redux";
import { Item, deleteItem, updateItemQuantity } from "../../redux/actions";
import { Touchable } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import CustomAlert from "../../Components/CustomAlert/CustomAlert";

const ShopingCartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
     // @ts-ignore
    (state: { items: Item[] }) => state.cartReducer.items
  );

  const [isAlertVisible, setAlertVisible] = useState(false);


  const subTotalPrice = cartItems.reduce(
    (summedPrice: any, product: any) =>
      summedPrice + (product?.product?.price || 0) * product.quantity,
    0
  );

  const tax = subTotalPrice * 0.075;
  const shippingFee = subTotalPrice * 0.1;
  const totalPrice = subTotalPrice + tax + shippingFee; 

  const onCheckout = () => {
    setAlertVisible(true);
    
  };

  const onConfirmProceedToCheckout = () => {
    const tax = subTotalPrice * 0.075;
    const totalPrice = subTotalPrice + tax; 
    const shippingFee = subTotalPrice * 0.1;
    setAlertVisible(true);
     // @ts-ignore
    navigation.navigate("Address", { subTotalPrice, tax, shippingFee, totalPrice   });
    setAlertVisible(false)
  };

  const navigation = useNavigation();

  const handleUpdateQuantity = () => {
    const subTotalPrice = cartItems.reduce(
      (summedPrice: any, product: any) =>
        summedPrice + (product?.product?.price || 0) * product.quantity,
      0
    );
  };

  useEffect(() => {
    // console.log("tax =====>", tax);
    handleUpdateQuantity();

  }, [cartItems]);

  const removeAll = () => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i]?.productID && cartItems[i].productID.length !== 0) {
        dispatch({
          type: "DELETE",
          payload: {
            itemId: cartItems[i].productID,
          },
        });
      }
    }
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <View style={{ padding: 10 }}>
      {/* Render Product Componet */}
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
           // @ts-ignore
          <CartProductItem cartItem={item} isShown={true} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 18 }}>
                Subtotal ({cartItems.length} items):{" "}
                <Text style={{ color: "#e47911", fontWeight: "bold" }}>
                  ${subTotalPrice.toFixed(2)}
                </Text>
              </Text>
              

              {cartItems.length > 0 ? (
                <TouchableOpacity
                  onPress={() => removeAll()}
                  style={{
                    width: 130,
                    height: 30,
                    marginHorizontal: 15,
                    flexDirection: "row",
                    backgroundColor: "#F95949",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 16,
                    padding: 5,
                  }}
                >
                  <Icon name="trash" color={"white"} size={20} />
                  <Text
                    style={{ fontWeight: "700", fontSize: 12, marginLeft: 10 }}
                  >
                    Remove All
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>

            <Button
            disabled={totalPrice == 0 ? true: false }
              text="Proceed to checkout"
              onPress={ onCheckout}
              containerStyles={{
                backgroundColor: "#f7e300",
                borderColor: "#c7b702",
                
              }}
            />
          </View>
        )}
      />
       <CustomAlert
        visible={isAlertVisible}
        title="Order Summary"
        primaryButtonTitle="Confirm & Proceed"
        secondaryButtonTitle="Cancel"
        message={
          <View style={styles.priceSummary}>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Sub-total :</Text>
                  <Text style={styles.priceValue}>
                    ${subTotalPrice.toFixed(2) }
                  </Text>
                </View>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Tax (7.5%) :</Text>
                  <Text style={styles.priceValue}>
                    ${tax.toFixed(2)}
                  </Text>
                </View>


                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Shipping Fee :</Text>
                  <Text style={styles.priceValue}>
                    ${shippingFee.toFixed(2)}
                  </Text>
                </View>

                <View style={{ borderBottomWidth: 1, borderColor: 'gray', marginBottom: 10 }} />
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Total :</Text>
                  <Text style={styles.grandTotalValue}>
                    ${totalPrice.toFixed(2)}
                  </Text>
                </View>
              </View>


          //  subTotalPrice.toString().length === 3 ? (
          //   <View>
          //   <Text style={{ marginBottom: 5, marginTop:40 }}>Subtotal:                                          <Text style={{ fontWeight: 'bold' }}>${subTotalPrice.toFixed(2)}</Text></Text>
          //   <Text style={{ marginBottom: 5 }}>Tax*:                                    <Text style={{ fontWeight: 'bold' }}>${tax.toFixed(2)}</Text></Text>
          //   <Text style={{ marginBottom: 10 }}>Shipping Fee:                            <Text style={{ fontWeight: 'bold' }}>${shippingFee.toFixed(2)}</Text></Text>
          //   <View style={{ borderBottomWidth: 1, borderColor: 'gray', marginBottom: 10 }} />
          // <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>
          //   Total:                                    ${totalPrice.toFixed(2)}
          // </Text>
          // </View>
          //  ) : (
          //   <View>
          //   <Text style={{ marginBottom: 5, marginTop:40 }}>Subtotal:                                       <Text style={{ fontWeight: 'bold' }}>${subTotalPrice.toFixed(2)}</Text></Text>
          //   <Text style={{ marginBottom: 5 }}>Tax*:                                                 <Text style={{ fontWeight: 'bold' }}>${tax.toFixed(2)}</Text></Text>
          //   <Text style={{ marginBottom: 10 }}>Shipping Fee:                                 <Text style={{ fontWeight: 'bold' }}>${shippingFee.toFixed(2)}</Text></Text>
          //   <View style={{ borderBottomWidth: 1, borderColor: 'gray', marginBottom: 10 }} />
          // <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>
          //   Total:                                    ${totalPrice.toFixed(2)}
          // </Text>
          // </View>
          //  )
        
        }
        onClose={closeAlert}
        onPrimaryButtonPress={onConfirmProceedToCheckout}
        onSecondaryButtonPress={closeAlert }
        animationType='slide'
        alertStyle={{ backgroundColor: '#90EE90' }} 
        buttonStyle={{ backgroundColor: '#0074D9'}}
        titleStyle={{color:'#333333'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color: "green",
    textAlign: "center",
    
  },
  detailsContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  itemImage: {
    width: 70, // Adjust the image size as needed
    height: 70,
    marginRight: 10,
    borderRadius: 20,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  itemQuantity: {
    color: "#666",
  },
  itemPrice: {
    color: "green",
  },
  priceSummary: {
    marginTop: 15,
    width:300,
    height:100, 
    // marginBottom:100
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
  },
  priceLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
  },
  priceValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  grandTotalValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
    marginLeft:50
  },
  stylishButton: {
    backgroundColor: "#007BFF",
    width: 300,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ShopingCartScreen;



