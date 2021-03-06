import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import { useFonts, DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { CarroisGothicSC_400Regular } from '@expo-google-fonts/carrois-gothic-sc';
import { Muli_400Regular} from '@expo-google-fonts/muli';

import Login from "./screens/Login"
import Home from "./screens/Home";
import History from "./screens/History";
import Profile from "./screens/Profile";
import Notifications from "./screens/Notifications";
import CreateInvite from "./screens/CreateInvite";
import AddID from "./screens/AddID";
import MyQR from "./screens/MyQR";
import ConfirmationRec from "./screens/ConfirmationRec";
import ConfirmationSen from "./screens/ConfirmationSen";
import Scan from "./screens/Scan";

// LOL
import HomeEvent from "./screens/HomeEvent";
import HomeUrgent from "./screens/HomeUrgent";
import HistoryUrgent from "./screens/HistoryUrgent";


const Stack = createStackNavigator();

function App() {

  let [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    CarroisGothicSC_400Regular,
    Muli_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
         <Stack.Navigator 
          initialRouteName="HomeScreen"
          screenOptions={{ headerShown: false}}>
          <Stack.Screen
            name="LoginScreen"
            component={Login}
          />
          <Stack.Screen
            name="HomeScreen"
            component={Home}
          />
          <Stack.Screen
            name="HistoryScreen"
            component={History}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={Profile}
          />
          <Stack.Screen
            name="NotificationsScreen"
            component={Notifications}
          />
          <Stack.Screen
            name="CreateInviteScreen"
            component={CreateInvite}
          />
          <Stack.Screen
            name="AddIDScreen"
            component={AddID}
          />
          <Stack.Screen
            name="MyQRScreen"
            component={MyQR}
          />
          <Stack.Screen
            name="ConfirmationRecScreen"
            component={ConfirmationRec}
          />
          <Stack.Screen
            name="ConfirmationSenScreen"
            component={ConfirmationSen}
          />
          <Stack.Screen
            name="ScanScreen"
            component={Scan}
          />

          <Stack.Screen
            name="HomeEventScreen"
            component={HomeEvent}
          />
          <Stack.Screen
            name="HomeUrgentScreen"
            component={HomeUrgent}
          />
           <Stack.Screen
            name="HistoryUrgentScreen"
            component={HistoryUrgent}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App


// export default class App extends Component {

//   render() {
//     return (
//       <NavigationContainer>
//          <Stack.Navigator 
//           initialRouteName="Home"
//           screenOptions={{ headerShown: false}}>
//           <Stack.Screen
//             name="LoginScreen"
//             component={Login}
//           />
//           <Stack.Screen
//             name="HomeScreen"
//             component={Home}
//           />
//           <Stack.Screen
//             name="HistoryScreen"
//             component={History}
//           />
//           <Stack.Screen
//             name="ProfileScreen"
//             component={Profile}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
//   }
// }