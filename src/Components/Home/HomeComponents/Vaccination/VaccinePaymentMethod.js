import React from "react";
import {SafeAreaView, View, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import PCRPaymentData from "./VaccinePaymentData";
import PaymentCard from "../PCR/CheckGallery";


const VaccinePaymentMethod = (props) => {

  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [ccv, onChangeCCV] = React.useState(null);
  const [date, onChangeDate] = React.useState(null);

  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView style={styles.secondContainer}>
          {PCRPaymentData.map((val, ind) => {
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
                      marginBottom: 5
                    }}
                  />
                  <View style={styles.testContents}>
                    <View style={styles.testStartItem}>
                        <Paragraph style={{fontSize: 17}}>{val.pcrTestFee}</Paragraph>
                        <Paragraph style={{fontSize: 17}}>{val.covidCharge}</Paragraph>
                        <Paragraph style={{fontWeight: 'bold', fontSize: 18, marginTop: 10}}>{val.totalCost}</Paragraph>
                    </View>
                    <View style={styles.testEndItem}>
                        <Paragraph style={{fontSize: 17}}>{val.pcrTestAmount}</Paragraph>
                        <Paragraph style={{fontSize: 17}}>{val.covidChargeAmount}</Paragraph>
                        <Paragraph style={{fontWeight: 'bold', fontSize: 18, marginTop: 10}}>{val.totalCostValue}</Paragraph>
                    </View>
                  </View>
                  <View>
                    <Card style={styles.PaymentCardSize}>
                      <PaymentCard />
                    </Card>
                  </View>
                  
                  <View style={{justifyContent: "space-between", marginTop: -200}}>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="Card Number"
                      keyboardType="numeric"
                    />
                    <TextInput
                      style={styles.inputDetails}
                      onChangeText={onChangeText}
                      value={text}
                      placeholder="Add Card Details"
                    />
                    <View style={{flexDirection: "row",  justifyContent: "space-between"}}>
                      <TextInput
                        style={styles.ccvInput}
                        onChangeText={onChangeCCV}
                        value={ccv}
                        placeholder="CCV"
                      />
                      <TextInput
                        style={styles.dateInputDetails}
                        onChangeText={onChangeDate}
                        value={date}
                        placeholder="Expired Date"
                      />

                    </View>
                  </View>
                </Card.Content>
                <View style={{ justifyContent: 'center', alignItems: 'center', width:"100%", marginTop: 30}}>
            <TouchableOpacity style={styles.button} onPress={() => {
                props.navigation.navigate("Vaccine Date Status");
            }}>
                <Text style={{textAlign:"center", color: "white", fontSize: 20}}>Make Payment</Text>
            </TouchableOpacity>
          </View>
              </Card>
            );
          })}
          
        </SafeAreaView>
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
  secondContainer:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: -200,
  },
  cardStyle: {
    backgroundColor: "white",
    width: "100%",
  },
  titleContents: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 200,
  },
  testContents: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  testStartItem: {
    justifyContent: "flex-start",
  },
  testEndItem: {
    justifyContent: "flex-end",

  },
  PaymentCardSize:{
    width: "100%",
    height: 100,
    marginTop: 40,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: "90%",
    backgroundColor: "#224fe3",
    borderRadius: 10
  },
  input: {
    height: 60,
    marginTop: 12,
    padding: 20,
    marginTop: 250,
    fontSize: 20,
    backgroundColor: "#e9ecf0",
    borderRadius: 10
  },
  inputDetails:{
    height: 60,
    marginTop: 12,
    padding: 20,
    fontSize: 20,
    backgroundColor: "#e9ecf0",
    borderRadius: 10
  },
  ccvInput: {
    height: 60,
    marginTop: 12,
    width: "37%",
    padding: 20,
    fontSize: 20,
    backgroundColor: "#e9ecf0",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  dateInputDetails:{
    height: 60,
    padding: 20,
    width: "60%",
    marginTop: 10,
    fontSize: 20,
    backgroundColor: "#e9ecf0",
    borderRadius: 10,
    justifyContent: "flex-end",
  }

});

export default VaccinePaymentMethod;
