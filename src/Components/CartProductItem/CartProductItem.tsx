import React, { useEffect, useState } from "react";
import { Image, View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { DataStore, Auth } from "aws-amplify";

import QuantitySelector from "../QuantitySelector/QuantitySelector";

import { CartProduct } from "../../models";
import { useDispatch, useSelector } from "react-redux";
import { Item, deleteItem, updateItemQuantity } from "../../redux/actions";

interface CartProductItemProps {
  cartItem: CartProduct;
}

const CartProductItem = ({ cartItem, isShown }: CartProductItemProps) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );

  const [updatedQtn, setUpdatedQtn] = useState(cartItem?.quantity);
  const dispatch = useDispatch();

  const { product, ...cartProduct } = cartItem;

 

  const handleQuantityChange = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    if (!product || !userData) {
      return;
    }
    if (cartItem?.quantity !== updatedQtn) {
      // console.log("Cart Product Item",cartItem);

      // dispatch(deleteItem(cartItem?.productID));

      dispatch({
        type: "UPDATE",
        payload: {
          itemId: cartItem.productID,
          newQuantity: updatedQtn,
        },
      });

      // alert(cartItem.title)
      // dispatch(updateItemQuantity(cartItem?.productID, updatedQtn));
    }
  };

 const handleDeleteIcon = () => {
  if (cartItem?.quantity === 0 && product.id === cartItem?.productID 
                 ) {

    console.log("product.id", product.id);
    console.log("cartItem.product.id", cartItem.product.id);


    dispatch({
      type: "DELETE",
      payload: {
        itemId: cartItem.productID,
      },
    });
  }
 };



 const myArr = useSelector(
  (state: { items: Item[] }) => state.cartReducer.items
);

 const totalPrice = myArr?.reduce(
  (summedPrice: any, product: any) =>
    summedPrice + (product?.product?.price || 0) * product.quantity,
  0
);

  useEffect(() => {
    handleQuantityChange();
    handleDeleteIcon();

 
  }, [updatedQtn, totalPrice  ]);

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {product.title}
          </Text>
          {/* Ratings */}
          <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${product.id}-${i}`}
                style={styles.star}
                name={i < Math.floor(product.avgRating) ? "star" : "star-o"}
                size={18}
                color={"#e47911"}
              />
            ))}
            <Text>{product.ratings}</Text>
          </View>
          <Text style={styles.price}>
            from ${product.price.toFixed(2)}
            {product.oldPrice && (
              <Text style={styles.oldPrice}>
                {" "}
                ${product.oldPrice.toFixed(2)}
              </Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        {isShown ? (
          <QuantitySelector quantity={updatedQtn === 0 ? cartItem?.quantity :
             updatedQtn === 0 ? cartItem?.quantity : updatedQtn  === 0 ? cartItem?.quantity :
              updatedQtn } setQuantity={setUpdatedQtn} />
        ) : null}
      </View>
    </View>
  );
};

export default CartProductItem;
