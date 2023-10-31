import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShopingCartScreen from '../Screens/ShopingCartScreen/ShopingCartScreen';
import AddressScreen from '../Screens/AddressScreen/AddressScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShopingCartScreen}
        name="cart"
        options={{title: 'Shopping Cart'}}
      />
      <Stack.Screen
        component={AddressScreen}
        name="Address"
        options={{title: 'Address'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;