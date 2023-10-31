import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../HomeScreen";
import SettingsScreen from "../SettingsScreen/SettingsScreen";
import Details from "../Details/Details";
import { Image } from "react-native";
import AddressScreen from "../AddressScreen/AddressScreen";
import ShopingCartScreen from "../ShopingCartScreen/ShopingCartScreen";
import ProductScreen from "../ProductScreen/ProductScreen";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

function SignOutButton({ navigation }) {
  const { signOut } = useAuthenticator();
  return (
    <View
      style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}
    >
      <Text style={{ fontSize: 25 }}>Are you sure you want to Sign Out?</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button title="Sign Out" onPress={signOut} color="red" />
        <Button
          onPress={() => navigation.goBack()}
          title="Go back "
          color="green"
        />
      </View>
    </View>
  );
}

const Drawer = ({ navigation }) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
    initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#f74f63",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: "#1ff04c",
        headerTitle: "Moroccan Shop",
        headerTitleStyle: { fontSize: 30, fontFamily: "Times New Roman" },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Details")}>
            <Image
              style={{
                width: 41,
                height: 41,
                borderColor: "white",
                margin: 5,
              }}
              source={{
                uri: "https://img.freeflagicons.com/thumb/round_icon/morocco/morocco_640.png",
              }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Dummy Details" component={Details} />
      <Drawer.Screen name="Sign Out" component={SignOutButton} />
   {/* hidden elements in drawer list   */}
      <Drawer.Screen
        name="Address"
        component={AddressScreen}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="ShopingCart"
        component={ShopingCartScreen}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="Product"
        component={ProductScreen}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
