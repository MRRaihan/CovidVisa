import React, { useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

import AntibodyLogo from "../../../assets/images/userProfileLogoImg.jpg";


const Profile = () => {
    return (
        <ScrollView>
           <SafeAreaView style={styles.container}>
               <View style={styles.container}>
                    <View style={styles.AntibodyLogo}>
                        <Image style={styles.AntibodyLogoImg} source={AntibodyLogo} />
                        <View style={styles.UserID}>
                            <Text style={styles.UserIdStart}>ID: </Text><Text style={styles.UserIdEnd}> 954 322 541 </Text>
                        </View>
                    </View>
               </View>
           </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    AntibodyLogo: {
        justifyContent: "center",
        alignItems: "center",
        height: "10%",
        width: "20%",
        padding: 10,
        margin: 10,
      },
      AntibodyLogoImg: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        height: 150,
        width: 150,
      },
      UserID: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        padding: 5,
        marginBottom: 20,
        height: 50,
        width: "80%",
      },
      UserIdStart: {
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
      },
      UserIdEnd: {
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
      },
})

export default Profile;
