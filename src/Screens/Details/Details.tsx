import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DetailsScreenProp, MainStackParamList } from "../../Types/navigation";
import ImageCarousel from "../../Components/ImageCarousel/ImageCarousel";
import { Picker } from "@react-native-picker/picker";
import Button from "../../Components/Button/Button";
import QuantitySelector from "../../Components/QuantitySelector/QuantitySelector";

const Details = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList>) => {
  const route = useRoute<DetailsScreenProp>();
  const [product, setProduct] = useState<any | undefined>({
    id: 1,
    options: ["Choose Color","Red", "Bleu", "Yellow"],
  });
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product?.options) {
      setSelectedOption(product.options[0]);
    }
  }, [product]);

  return (
    <ScrollView style={styles.root}>
       <Text style={styles.title}>Moroccain Jellaba Asliya</Text>
      <ImageCarousel
        images={[
          "https://www.sunset.com/wp-content/uploads/VERSE-Interior_Credit_-Wonho-Frank-Lee-1200x600.jpg",
          "https://www.sunset.com/wp-content/uploads/VERSE-Interior_Credit_-Wonho-Frank-Lee-1200x600.jpg",
          "https://www.sunset.com/wp-content/uploads/VERSE-Interior_Credit_-Wonho-Frank-Lee-1200x600.jpg",
        ]}
      />
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
      >
        {product.options.map((option: any) => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

        {/* Price */}
        {/* <Text style={styles.price}>
        from ${product.price.toFixed(2)}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>
        )}
      </Text> */}

      <Text style={styles.price}>
        From ${15.50 }
       </Text>
      

      {/* Description */}
      {/* <Text style={styles.description}>{product.description}</Text> */}
      <Text style={styles.description}>
      Moroccan culture is rich, diverse, and deeply rooted in history. It's a fusion of Arab, Berber
      , African, and European influences,
       shaped by centuries of interaction and trade. Here are some key aspects of Moroccan culture:

      </Text>

      {/* Qunatiti selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Button
        text={'Add To Cart'}
        onPress={()=> alert("Item added!")}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy now');
        }} />
      </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  title: {
    fontSize:25,
    fontWeight:'700'
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
});
