import { Button, Text } from 'react-native';
import RootNavigator from './src/Screens/Navigation/RootNavigator';
import { Amplify } from 'aws-amplify';
import awsconfig from "./src/Components/AwsExportFolder/aws-exports"
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import {StripeProvider} from '@stripe/stripe-react-native';
import BottomTabs from './src/Components/BottomTab/BottomTab';
// @ts-ignore
// import {PUBLISHABLEKEY} from "@env";




Amplify.configure(awsconfig);

export default function App() {
  return (
<StripeProvider publishableKey={""}>

    {/* <Authenticator.Provider> */}
    {/* <Authenticator> */}
    <RootNavigator/>
  {/* </Authenticator> */}
   {/* </Authenticator.Provider> */}

    </StripeProvider>
  );
}

// In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

