import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from "./src/Components/Welcome";
import Signup from "./src/Accounts/Signup";
import MobileOTP from "./src/Components/MobileOTP";
import Login from "./src/Accounts/Login";
import NIDScan from "./src/Components/NIDScan";
import FaceScan from "./src/Components/FaceScan";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MobileOTP" component={MobileOTP} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NIDScan" component={NIDScan} />
        <Stack.Screen name="FaceScan" component={FaceScan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
