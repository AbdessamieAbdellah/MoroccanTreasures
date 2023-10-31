
import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../HomeScreen'
import SettingsScreen from '../SettingsScreen/SettingsScreen'
import Details from '../Details/Details';
import { MainStackParamList } from '../../Types/navigation';
import Drawer from './Drawer';
import RestaurantDetails from '../RestaurantDetails/RestaurantDetails';
import DealDetails from '../DealDetails/DealDetails';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';
import AddressScreen from '../AddressScreen/AddressScreen';
import ShopingCartScreen from '../ShopingCartScreen/ShopingCartScreen';
import ProductScreen from '../ProductScreen/ProductScreen';
import BottomTab from '../../Components/BottomTab/BottomTab';


const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack = () => {
  return (
   <Stack.Navigator 
   screenOptions={{
    headerShown: false
   }} >
    <Stack.Screen name="Drawer" component={Drawer}  options={{ headerShown: false }}/>
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="Setting" component={SettingsScreen} />
    <Stack.Screen name='RestaurantDetails' component={RestaurantDetails} />
    <Stack.Screen name='IdCode' component={DealDetails} />
    <Stack.Screen name='OrderConfirmation' component={OrderConfirmation} />
    <Stack.Screen name='Address' component={AddressScreen} />
    <Stack.Screen name='ShopingCart' component={ShopingCartScreen} />
    <Stack.Screen name="Product" component={ProductScreen} />
    





   </Stack.Navigator>
  )
}

export default MainStack

