import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./src/Components/Welcome";
import Signup from "./src/Accounts/Signup";
import MobileOTP from "./src/Components/MobileOTP";
import Login from "./src/Accounts/Login";
import NIDScan from "./src/Components/NIDScan";
import FaceScan from "./src/Components/FaceScan";
import PersonInfo from "./src/Components/PersonInfo";

import Home from "./src/Components/Home/Home";
import Scan from "./src/Components/Home/Scan";
import Notification from "./src/Components/Home/Notification";
import UserProfile from "./src/Components/Home/UserProfile";
import PersonalInfoEdit from "./src/Components/Home/PersonalInfoEdit";
import NavigationTab from "./src/Components/navigationTab/NavigationTab";

import Antibody from "./src/Components/Home/HomeComponents/Antibody";
import PCR from "./src/Components/Home/HomeComponents/PCR";
import Vaccination from "./src/Components/Home/HomeComponents/Vaccination";
import AddCountry from "./src/Components/Home/HomeComponents/AddCountry";
import Booster from "./src/Components/Home/HomeComponents/Booster";

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
        <Stack.Screen name="PersonaInfo" component={PersonInfo} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NavigationTab" component={NavigationTab} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Personal Information" component={PersonalInfoEdit}/>

        <Stack.Screen name="Antibody" component={Antibody} />
        <Stack.Screen name="PCR" component={PCR} />
        <Stack.Screen name="Vaccination" component={Vaccination} />
        <Stack.Screen name="AddCountry" component={AddCountry} />
        <Stack.Screen name="Booster" component={Booster} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
