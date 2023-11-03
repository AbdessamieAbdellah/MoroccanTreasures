import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "../../redux/actions";

interface OrderItem {
  title: string;
  quantity: number;
  price: number;
  image: string; // Add the imageUrl property for each item
}

interface OrderDetails {
  items: OrderItem[];
  subTotalPrice : number;
  tax: number;
  shippingFee: number;
  totalPrice: number;
  orderUniqueId: number;
}

const OrderConfirmationScreen: React.FC<{
  route: { params: { orderDetails: OrderDetails } };
}> = ({ route }) => {
  const navigation = useNavigation();
  const { orderDetails } = route.params;
  const dispatch = useDispatch();

  const cartItems = useSelector(
    // @ts-ignore
    (state: { items: Item[] }) => state.cartReducer.items
  );


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


  console.log("orderDetails.tax", orderDetails.tax )
 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Order Confirmed</Text>


        <View style={styles.detailsContainer}>
        <Text style={[styles.itemTitle, {fontWeight:'500', marginBottom:30, marginTop:10}]}>Thank you for shopping with us. We'll send you a confirmation when your items ship.</Text>

          <Text style={[styles.subtitle,{color:'blue'} ]}>Order N°: {orderDetails.orderUniqueId}</Text>
          {orderDetails.items.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />

              <View>
                <Text style={styles.itemTitle}>{item.title.length > 20 ? `${item.title .slice(0, 20)}...`: item.title }</Text>
                <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
              </View>

              {item.price !== undefined && (
                <Text style={styles.itemPrice}>
                  Price: ${item.price.toFixed(2)}
                </Text>
              )}
            </View>
          ))}
          {orderDetails.subTotalPrice !== undefined &&
            orderDetails.tax !== undefined &&
            orderDetails.shippingFee !== undefined &&
            orderDetails.totalPrice !== undefined && (
              <View style={styles.priceSummary}>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Sub-total :</Text>
                  <Text style={styles.priceValue}>
                    ${orderDetails.subTotalPrice.toFixed(2) }
                  </Text>
                </View>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Tax (7.5%) :</Text>
                  <Text style={styles.priceValue}>
                    ${orderDetails.tax.toFixed(2)}
                  </Text>
                </View>


                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Shipping Fee :</Text>
                  <Text style={styles.priceValue}>
                    ${orderDetails.shippingFee.toFixed(2)}
                  </Text>
                </View>


                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Total Price :</Text>
                  <Text style={styles.grandTotalValue}>
                    ${orderDetails.totalPrice.toFixed(2)}
                  </Text>
                </View>
              </View>
            )}
        </View>
      </View>

      <TouchableOpacity
        style={styles.stylishButton}
         // @ts-ignore
        onPress={() => {navigation.navigate("Home"), removeAll()}}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
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
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    color: "green",
  },
  grandTotalValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
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

export default OrderConfirmationScreen;
