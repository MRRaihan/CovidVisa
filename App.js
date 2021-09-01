import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./src/Components/Welcome";
import Signup from "./src/Accounts/Signup";
import MobileOTP from "./src/Components/MobileOTP";
// import Mobile from "./src/Components/Mobile";
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


import Profile from "./src/Components/Home/Profile";
// import Antibody from "./src/Components/Home/HomeComponents/Antibody/Antibody";
import AntibodyScroll from "./src/Components/Home/HomeComponents/Antibody/AntibodyScroll";

import CheckGallery from "./src/Components/Home/HomeComponents/PCR/CheckGallery";

import PCR from "./src/Components/Home/HomeComponents/PCR/PCR";
import PCRDateLeft from "./src/Components/Home/HomeComponents/PCR/PCRLeftDate";
import PCRProcess from "./src/Components/Home/HomeComponents/PCR/PCRProcess";
import PCRPaymentMethod from "./src/Components/Home/HomeComponents/PCR/PCRPaymentMethod";
import PCRLiveness from "./src/Components/Home/HomeComponents/PCR/PCRLiveness";

import VaccineRegistration from "./src/Components/Home/HomeComponents/Vaccination/Vaccination";
import VaccineDateLeft from "./src/Components/Home/HomeComponents/Vaccination/vaccineLeftDate";
import VaccineProcess from "./src/Components/Home/HomeComponents/Vaccination/VaccineProcess";
import VaccinePaymentMethod from "./src/Components/Home/HomeComponents/Vaccination/VaccinePaymentMethod";
import VaccineLiveness from "./src/Components/Home/HomeComponents/Vaccination/VaccineLiveness";

import AddCountry from "./src/Components/Home/HomeComponents/AddCountry/AddCountry";
import Synchronise from "./src/Components/Home/HomeComponents/Synchronise";
import Booster from "./src/Components/Home/HomeComponents/Booster/Booster";
import BoosterPaymentMethod from "./src/Components/Home/HomeComponents/Booster/BoosterPaymentMethod";

// -----------> Scanning Page
import ScanRegisteredPerson from "./src/Components/Camera/ScanRegisteredPerson";
import MatchScanRegisterPerson from "./src/Components/Camera/MatchScanRegisterPerson";
import LivenessRecord from "./src/Components/Camera/LivenessRecord";
import PCRTestResult from "./src/Components/Camera/LivenessRecordResult/PCRTestResult";

// -----------> PCR Test Registration section
import PCRTestRegistration from "./src/Components/Home/PCRTestRegistration/PCRTestRegistration";

// ----------> Payment Method
import PaymentMethod from "./src/Components/Home/PaymentMethod/PaymentMethod";

import Artboard from "./src/Components/Home/Artboard";

import Liveness from "./src/Components/Camera/LivenessRecord";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      
      <Stack.Screen name="NavigationTab" component={NavigationTab} />
        <Stack.Screen name="Artboard" component={Artboard} />
        
        
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MobileOTP" component={MobileOTP} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NIDScan" component={NIDScan} />
        <Stack.Screen name="Face Scan" component={FaceScan} />
        <Stack.Screen name="Home" component={Home} />

        
        
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Notification" component={Notification} />
        
        <Stack.Screen name="Personal Information" component={PersonalInfoEdit}/>
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Antibody" component={AntibodyScroll} />
        <Stack.Screen name="PersonaInfo" component={PersonInfo} />

        <Stack.Screen name="PCR" component={PCR} />
        <Stack.Screen name="Payment Method" component={PCRPaymentMethod} />
        <Stack.Screen name="PCR Date Status" component={PCRDateLeft} />
        <Stack.Screen name="PCR Process" component={PCRProcess} />
        <Stack.Screen name="Liveness" component={PCRLiveness}/>

        <Stack.Screen name="Vaccine Registration" component={VaccineRegistration} />
        <Stack.Screen name="Vaccine Payment Method" component={VaccinePaymentMethod} />
        <Stack.Screen name="Vaccine Date Status" component={VaccineDateLeft} />
        <Stack.Screen name="Vaccine Process" component={VaccineProcess} />
        <Stack.Screen name="Vaccine Liveness" component={VaccineLiveness}/>

        <Stack.Screen name="AddCountry" component={AddCountry} />
        <Stack.Screen name="Synchronise" component={Synchronise} />
        
        <Stack.Screen name="Booster" component={Booster} />
        <Stack.Screen name="Booster Payment Method" component={BoosterPaymentMethod} />

        <Stack.Screen name="ScanRegisteredPerson" component={ScanRegisteredPerson} />
        <Stack.Screen name="MatchScanRegisterPerson" component={MatchScanRegisterPerson} />
        <Stack.Screen name="PCRTestResult" component={PCRTestResult} />
        <Stack.Screen name="PCR Test Registration" component={PCRTestRegistration} />
        <Stack.Screen name="LivenessRecord" component={LivenessRecord} />

        

        <Stack.Screen name="PaymentMethod1" component={PaymentMethod} />
        <Stack.Screen name="CheckGallery" component={CheckGallery  } />
        
        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
