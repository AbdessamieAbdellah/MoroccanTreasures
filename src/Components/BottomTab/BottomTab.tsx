import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

import HomeScreen from "../../Screens/HomeScreen";
import SettingsScreen from "../../Screens/SettingsScreen/SettingsScreen";
import Drawer from "../../Screens/Navigation/Drawer";
 // @ts-ignore
import { MaterialIcons } from "react-native-vector-icons";
import Details from "../../Screens/Details/Details";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import ShopingCartScreen from "../../Screens/ShopingCartScreen/ShopingCartScreen";
import { Image } from "react-native";
import { Button } from "react-native";
import AddressScreen from "../../Screens/AddressScreen/AddressScreen";
import ProductScreen from "../../Screens/ProductScreen/ProductScreen";
import { useNavigation } from "@react-navigation/native";
import OrderConfirmationScreen from "../../Screens/OrderConfirmationScreen/OrderConfirmationScreen";
 // @ts-ignore
function SignOutButton({ navigation }) {
    const { signOut } = useAuthenticator();
    return (
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Text
        style={{
          fontSize: 28, // Increased font size
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
          color: "#333",
        }}
      >
        Are you sure you want to Sign Out?
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly", // Adjusted spacing
          width: "80%", // Increased width
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#ff5733", // Red color
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 8,
          }}
          onPress={signOut}
        >
          <Text style={{ color: "white" }}>Sign Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#4CAF50", // Green color
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 8,
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: "white" }}>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
    
    );
  }

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#f74f63" },
        headerShown: true,
        headerStyle: {
          backgroundColor: "#f74f63",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: "#1ff04c",
        headerTitle: "Moroccan Treasures ",
        headerTitleStyle: {
          fontSize: Platform.OS === "ios" ? 30 : 26,
          fontFamily: Platform.OS === "ios" ? "Times New Roman" : "sans-serif",
        },
        headerRight: () => (
           // @ts-ignore
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={{
                width: 43,
                height: 43,
                borderColor: "white",
                margin: 5,
                marginRight:12,
                borderRadius:30
              }}
              source={{
                uri: "https://pngimg.com/d/treasure_chest_PNG41.png",
                
              }}
            />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => alert("💗💗LOVE IS MOROCCO💗💗")}>
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
       // @ts-ignore
      tabBarOptions={{
        activeTintColor: "#1ff04c",
        inactiveTintColor: "black",
        activeBackgroundColor: "#f74f63",
        inactiveBackgroundColor: "#f74f63",
      }}
    >
      <Tab.Screen
        options={{
          //   headerShown: false,

          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} /> // Use the imported icon
          ),
        }}
        name="Home"
         // @ts-ignore
        component={HomeScreen}
      />

      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarButton: () => null,
           // @ts-ignore
          tabBarVisible: false,
          //   headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} /> // Use the imported icon
          ),
        }}
      />
      <Tab.Screen
        name="ShopingCart"
        component={ShopingCartScreen}
        options={{
          //   headerShown: false,
          tabBarLabel: "Shopping Cart",
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" color={color} size={size} /> // Use the imported icon
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarButton: () => null,
           // @ts-ignore
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Dummy Details"
        component={Details}
        options={{
          tabBarButton: () => null,
           // @ts-ignore
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Sign Out"
        component={SignOutButton}
        options={{
          //   headerShown: false,

          tabBarLabel: "Sign Out",
          tabBarIcon: ({ color, size }) => (
            <Icon name="sign-out" color={color} size={size} /> // Use the imported icon
          ),
        }}

        // options={{
        //   tabBarButton: () => null,
        //   tabBarVisible: false,
        // }}
      />

      <Tab.Screen
        name="Address"
        component={AddressScreen}
        options={{
          tabBarButton: () => null,
           // @ts-ignore
          tabBarVisible: false,
        }}
      />

      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          tabBarButton: () => null,
           // @ts-ignore
          tabBarVisible: false,
        }}
      />

      <Tab.Screen
        name="OrderConfirmation"
         // @ts-ignore
        component={OrderConfirmationScreen}
        options={{
          tabBarButton: () => null,
           // @ts-ignore
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}
