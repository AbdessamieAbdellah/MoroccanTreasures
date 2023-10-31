import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
// import MainStack from './MainStack'
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from '../../redux/store';
import BottomTab from '../../Components/BottomTab/BottomTab';


const store = configureStore();

const RootNavigator = () => {
  return (
    <ReduxProvider store={store} >
    <NavigationContainer>
    {/* <MainStack/> */}
    <BottomTab/>
    </NavigationContainer>
    </ReduxProvider>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})