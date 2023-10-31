import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function OrderConfirmation() {
  return (
    <View>
        {/* <Text>Order has been placed ! </Text> */}
        <FoodImage />
        {/* <Image source={require('../assets/OrderConfirmation/confirmationScreen.png')} /> */}
    </View>
  )
}


const FoodImage = () => (
    <View>
      <Image
      source={require('../../../assets/OrderConfirmation/confirmationScreen.png')}
        style={{
          width: 400,
          height: 600,
          borderRadius: 1,
          margin:1,
         
        }}
      />
    </View>
  );