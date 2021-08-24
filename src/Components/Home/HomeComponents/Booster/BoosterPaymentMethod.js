import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, ScrollView, Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import BoosterPaymentMethodData from "./BoosterPaymentData";


const BoosterPaymentMethod = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {BoosterPaymentMethodData.map((val, ind) => {
          return (
            <Card style={styles.cardStyle}>
              <Card.Content>

                  <View style={styles.titleContents}>
                      <View>
                          <Title>{val.result}</Title>
                      </View>
                      <View >
                          <Title>{val.ServiceResult}</Title>
                      </View>
                  </View>
                <View
                  style={{
                    borderBottomColor: "#e8e2e1",
                    borderBottomWidth: 2,
                    marginTop: 35
                  }}
                />

                <View style={styles.testContents}>
                  <View style={styles.testStartItem}>
                      <Paragraph style={{fontSize: 17}}>{val.pcrTestFee}</Paragraph>
                      <Paragraph style={{fontSize: 17}}>{val.covidCharge}</Paragraph>
                      <Paragraph style={{fontWeight: 'bold', fontSize: 17}}>{val.totalCost}</Paragraph>
                  </View>
                  <View style={styles.testEndItem}>
                      <Paragraph style={{fontSize: 17}}>{val.pcrTestAmount}</Paragraph>
                      <Paragraph style={{fontSize: 17}}>{val.covidChargeAmount}</Paragraph>
                      <Paragraph style={{fontWeight: 'bold', fontSize: 17}}>{val.totalCostValue}</Paragraph>
                  </View>
                </View>
              </Card.Content>
            </Card>
          );
        })}
        <View style={{ justifyContent: 'center', alignItems: 'center', width:"100%"}}>
              <TouchableOpacity style={styles.button} onPress={() => {
                  props.navigation.navigate("Home");
              }}>
                  <Text style={{textAlign:"center", color: "white", fontSize: 20}}>Make Payment</Text>
              </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  cardStyle: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  titleContents: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 70
  },
  testContents: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 5,
    marginTop: 10
  },
  testStartItem: {
    justifyContent: "flex-start",
  },
  testEndItem: {
    justifyContent: "flex-end",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    
    height: 70,
    width: "90%",
    marginBottom: 70,
    backgroundColor: "#224fe3",
    borderRadius: 10
},
});

export default BoosterPaymentMethod;
