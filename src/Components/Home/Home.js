import * as React from "react";
import { Avatar, Button, Card, Paragraph, Title } from "react-native-paper";
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity, StyleSheet, View, Text,Image} from "react-native";

import Slider from "../../../assets/images/slider.png";
// import Antibody from "../../../assets/images/CAntibody.jpeg";
import Antibody from "../../../assets/images/battery.png";

import PCR from "../../../assets/images/done.png";
import Vaccination from "../../../assets/images/Vaccination.jpeg";
import AddCountry from "../../../assets/images/CAddCountry.jpeg";
import Booster from "../../../assets/images/CBooster.jpeg";

import NavigationTab from "../navigationTab/NavigationTab";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Home = (props) => (
  <ScrollView>
  <View style={styles.container}>
    <Card style={styles.Slider}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5}}>
        <View style={{color:"white", flexDirection: "column", justifyContent:'flex-start', width:"55%", padding:5}}>
          <Title>Covid increasing at Bahrain</Title>
          <Paragraph>Bangladesh fight limited & 10 days quarantine is must.</Paragraph>
        </View>
        <View style={{justifyContent:'flex-end', width:"44%", padding:5, height: 150, }}>
        <Card.Cover style={{width:"100%", height: 150}} source={Slider} />
        </View>
      </View>
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
            <Image style={{height: 75, width: "90%", marginBottom: 15}} source={PCR} />
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
            <Image style={{height: 95, width: "80%", marginLeft: 15}} source={Vaccination} />
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
            <Image style={{height: 80, width: "90%", marginLeft: 5}} source={AddCountry} />
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
            <Image style={{height: 95, width: "80%", marginLeft: 15,}} source={Booster} />
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
    marginBottom: 440,
  },
  Slider: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "space-between",
    height: 150,
    width: "100%",
    marginTop: 150,
    backgroundColor: "#718AEE",
    borderRadius: 10,
  },
  HelthTitle: {
    fontSize: 22,
    marginBottom: 10,
    marginTop: -50
  },
  healthData: {
    marginTop: 100,
  },
  dataFlex: {
    backgroundColor: "white",
    flexDirection: "column",
    padding: 10,
    marginBottom: -130,
    width: "50%",
    borderWidth: 2,
    margin: 2
    
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
