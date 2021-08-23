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
import Synchronise from "./src/Components/Home/HomeComponents/Synchronise";
import Booster from "./src/Components/Home/HomeComponents/Booster";

// -----------> Scanning Page
import ScanRegisteredPerson from "./src/Components/Camera/ScanRegisteredPerson";
import MatchScanRegisterPerson from "./src/Components/Camera/MatchScanRegisterPerson";
import LivenessRecord from "./src/Components/Camera/LivenessRecord";
import PCRTestResult from "./src/Components/Camera/LivenessRecordResult/PCRTestResult";

// -----------> PCR Test Registration section
import PCRTestRegistration from "./src/Components/Home/PCRTestRegistration/PCRTestRegistration";

// ----------> Payment Method
import PaymentMethod from "./src/Components/Home/PaymentMethod/PaymentMethod";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="Payment Method" component={PaymentMethod} />

      <Stack.Screen name="AddCountry" component={AddCountry} />
      <Stack.Screen name="Synchronise" component={Synchronise} />
        <Stack.Screen name="PCR Test Registration" component={PCRTestRegistration} />
        <Stack.Screen name="LivenessRecord" component={LivenessRecord} />

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
        
        
        <Stack.Screen name="Booster" component={Booster} />

        <Stack.Screen name="ScanRegisteredPerson" component={ScanRegisteredPerson} />
        <Stack.Screen name="MatchScanRegisterPerson" component={MatchScanRegisterPerson} />
        <Stack.Screen name="PCRTestResult" component={PCRTestResult} />
        
        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
