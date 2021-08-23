import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import PaymentData from "../MadeData/PaymentMethodData";


const PaymentMethod = () => {
  return (
    <View style={styles.container}>
      {PaymentData.map((val, ind) => {
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
    </View>
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
  },
  testContents: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 5,
    marginTop: 5
  },
  testStartItem: {
    justifyContent: "flex-start",
  },
  testEndItem: {
    justifyContent: "flex-end",
    marginTop: 70

  },
});

export default PaymentMethod;
