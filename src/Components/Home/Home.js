import * as React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";

import Slider from "../../../assets/images/Cslider.jpeg";
import Antibody from "../../../assets/images/CAntibody.jpeg";
import PCR from "../../../assets/images/CPCR.jpeg";
import Vaccination from "../../../assets/images/Vaccination_200x100.jpeg";
import AddCountry from "../../../assets/images/CAddCountry.jpeg";
import Booster from "../../../assets/images/CBooster.jpeg";

import NavigationTab from "../navigationTab/NavigationTab";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Home = (props) => (
  // <FlatList>
  <View style={styles.container}>
    <Card style={styles.Slider}>
      <Card.Cover style={styles.SliderImage} source={Slider} />
    </Card>
    <View style={styles.healthData}>
      <Text style={styles.HelthTitle}>Health Data</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card style={styles.dataFlex}>
          <View style={styles.CardInsideTitle}>
            <Text
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                padding: 5,
                marginRight: 10,
              }}
            >
              Antibody
            </Text>

            <TouchableOpacity>
              <Button
                style={{
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "center",
                  padding: 5,
                  marginLeft: 0,
                }}
                icon="information-outline"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Antibody");
            }}
          >
            <Image style={styles.SliderImage} source={Antibody} />
          </TouchableOpacity>
        </Card>
        <Card style={styles.dataFlex}>
          <View style={styles.CardInsideTitle}>
            <Text
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                padding: 5,
                marginRight: 10,
              }}
            >
              PCR
            </Text>
            <TouchableOpacity>
              <Button
                style={{
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "center",
                  padding: 5,
                  marginLeft: 40,
                }}
                icon="information-outline"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("UserProfile");
            }}
          >
            <Image style={styles.SliderImage} source={PCR} />
          </TouchableOpacity>
        </Card>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card style={styles.dataFlex}>
          <View style={styles.CardInsideTitle}>
            <Text
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                padding: 5,
                marginRight: 0,
              }}
            >
              Vaccination
            </Text>
            <TouchableOpacity>
              <Button
                style={{
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "center",
                  padding: 5,
                  marginLeft: 0,
                }}
                icon="information-outline"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress ={() =>{
                  props.navigation.navigate("Vaccination")
              }}
          >
            <Image style={styles.SliderImage} source={Vaccination} />
          </TouchableOpacity>
        </Card>
        <Card style={styles.dataFlex}>
          <View style={styles.CardInsideTitle}>
            <Text
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                padding: 5,
                marginRight: 0,
              }}
            >
              Add Country
            </Text>
            <TouchableOpacity>
              <Button
                style={{
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "center",
                  padding: 5,
                  marginLeft: 0,
                }}
                icon="information-outline"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("AddCountry");
            }}
          >
            <Image style={styles.SliderImage} source={AddCountry} />
          </TouchableOpacity>
        </Card>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card style={styles.dataFlex}>
          <View style={styles.CardInsideTitle}>
            <Text
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                padding: 5,
                marginRight: 20,
              }}
            >
              Booster
            </Text>
            <TouchableOpacity>
              <Button
                style={{
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "center",
                  padding: 5,
                  marginLeft: 10,
                }}
                icon="information-outline"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Booster");
            }}
          >
            <Image style={styles.SliderImage} source={Booster} />
          </TouchableOpacity>
        </Card>
      </View>
    </View>
  </View>
  // </FlatList>
);

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  Slider: {
    height: 5,
    width: "80%",
    paddingBottom: 10,
    marginBottom: 10,
  },
  HelthTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  healthData: {
    marginTop: 100,
  },
  dataFlex: {
    backgroundColor: "white",
    flexDirection: "column",
    padding: 10,
    borderColor: "#e6ebe7",
    margin: 5,
  },
  CardInsideTitle: {
    flexDirection: "row",
    padding: 2,
    marginBottom: 20,
  },
  SliderImage: {
    height: 55,
    width: "100%",
  },
  //           nidComment:{
  //               color: 'gray',
  //               fontSize: 20,
  //               justifyContent: 'center',
  //               alignItems: 'center',
  //               marginBottom: 20,
  //           },
  //           personNID:{
  //                     maxHeight:  150,
  //                     Width: 350,

  //           },
  //           nidActions:{
  //             flexDirection:'row',
  //             justifyContent: 'center',
  //             alignItems: 'center'
  //         },
  //         nextActions: {
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //             marginTop: 15,
  //             color: "white",
  //             backgroundColor: 'blue'
  //         },
  //         nextActionsView:{
  //             color: "white",
  //         }
});

export default Home;
