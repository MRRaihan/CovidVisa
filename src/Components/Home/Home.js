import * as React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";

import Slider from "../../../assets/images/Cslider.jpeg";
// import Antibody from "../../../assets/images/CAntibody.jpeg";
import Antibody from "../../../assets/images/battery.png";

import PCR from "../../../assets/images/done.png";
import Vaccination from "../../../assets/images/Vaccination_200x100.jpeg";
import AddCountry from "../../../assets/images/CAddCountry.jpeg";
import Booster from "../../../assets/images/CBooster.jpeg";

import NavigationTab from "../navigationTab/NavigationTab";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Home = (props) => (
  <ScrollView>
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
          margin: 10
        }}
      >
        <Card style={styles.dataFlex}>
          <View style={styles.CardInsideTitle}>
            <Text
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                marginTop: 9,
                fontSize: 14
              }}
            >
              Antibody
            </Text>

            <TouchableOpacity>
              <Button
                style={{
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "space-between",
                }}
                icon="information-outline"
              />
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Antibody");
            }}
          >
            <Image style={styles.SliderImage} source={Antibody} />
          </TouchableOpacity>
          </View>
        </Card>
        <Card style={styles.dataFlex}>
          <View style={styles.CardInsideTitle}>
            <Text
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                padding: 5,
                fontSize: 14,
                marginTop: 9,
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
              props.navigation.navigate("PCR");
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
          marginBottom: 10
        }}
      >
        <Card style={styles.dataFlex}>
          <View style={styles.CardInsideTitle}>
            <Text
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                marginTop: 12,
                fontSize: 14,

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
                  props.navigation.navigate("Vaccine Registration")
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
                marginTop: 12,
                fontSize: 14,
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
                marginTop: 12,
                fontSize: 14,
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
 </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20
  },
  Slider: {
    height: 5,
    width: "80%",
    paddingBottom: 10,
    marginBottom: 10,
  },
  HelthTitle: {
    fontSize: 22,
    marginBottom: 20,
  },
  healthData: {
    marginTop: 100,
  },
  dataFlex: {
    backgroundColor: "white",
    flexDirection: "column",
    padding: 10,
    margin: 5,
    height: "100%",
    width: "49%"
  },
  CardInsideTitle: {
    flexDirection: "row",
    padding: 2,
    marginBottom: 20,
  },
  SliderImage: {
    height: 65,
    width: "90%",
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
