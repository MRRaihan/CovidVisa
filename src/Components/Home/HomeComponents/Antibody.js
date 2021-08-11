import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

import AntibodyLogo from "../../../../assets/images/Antibody.jpeg";

const Antibody = (props) => {
          return (
          <View style={styles.container}>
          <View style={styles.AntibodyLogo}>
                    <Image style={styles.AntibodyLogoImg} source={AntibodyLogo} />
          </View>
          <Card style={styles.cardStyle}>
                    <View style={{paddingTop: 10}}>
                              <Text style={styles.testStyle}>Last Test</Text>
                              <View
                                        style={{
                                        borderBottomColor: '#e8e2e1',
                                        borderBottomWidth: 2,
                                        marginBottom: 10,
                                        }}
                              />
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Result</Text>
                                        <Text style={styles.testEndItem}>Negative</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Test Date</Text>
                                        <Text style={styles.testEndItem}>22 Sep 2021</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Antibody Left</Text>
                                        <Text style={styles.testEndItem}>4 mon 14 days</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Test Center</Text>
                                        <Text style={styles.testEndItem}>UTTPS</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Served by</Text>
                                        <Text style={styles.testEndItem}>Akhi Akter</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Served ID</Text>
                                        <Text style={styles.testEndItem}>987 233 876</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Report</Text>
                                        <TouchableOpacity>
                                                  <Text style={{color: "blue"}}>View</Text>
                                        </TouchableOpacity>
                                        
                              </View>
                    </View>
                    
                    <View style={{paddingTop: 10}}>
                              <Text style={styles.testStyle}>Second Test</Text>
                              <View
                                        style={{
                                        borderBottomColor: '#e8e2e1',
                                        borderBottomWidth: 2,
                                        marginBottom: 10,
                                        }}
                              />
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Result</Text>
                                        <Text style={styles.testEndItem}>Negative</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Test Date</Text>
                                        <Text style={styles.testEndItem}>22 Sep 2021</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Antibody Left</Text>
                                        <Text style={styles.testEndItem}>4 mon 14 days</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Test Center</Text>
                                        <Text style={styles.testEndItem}>UTTPS</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Served by</Text>
                                        <Text style={styles.testEndItem}>Akhi Akter</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Served ID</Text>
                                        <Text style={styles.testEndItem}>987 233 876</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Report</Text>
                                        <TouchableOpacity>
                                                  <Text style={{color: "blue"}}>View</Text>
                                        </TouchableOpacity>
                                        
                              </View>
                    </View>

                    <View style={{paddingTop: 10}}>
                              <Text style={styles.testStyle}>First Test</Text>
                              <View
                                        style={{
                                        borderBottomColor: '#e8e2e1',
                                        borderBottomWidth: 2,
                                        marginBottom: 10,
                                        }}
                              />
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Result</Text>
                                        <Text style={styles.testEndItem}>Negative</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Test Date</Text>
                                        <Text style={styles.testEndItem}>22 Sep 2021</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Antibody Left</Text>
                                        <Text style={styles.testEndItem}>4 mon 14 days</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Test Center</Text>
                                        <Text style={styles.testEndItem}>UTTPS</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Served by</Text>
                                        <Text style={styles.testEndItem}>Akhi Akter</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Served ID</Text>
                                        <Text style={styles.testEndItem}>987 233 876</Text>
                              </View>
                              <View style={styles.testContents}>
                                        <Text style={styles.testStartItem}>Report</Text>
                                        <TouchableOpacity>
                                                  <Text style={{color: "blue"}}>View</Text>
                                        </TouchableOpacity>
                                        
                              </View>
                    </View>
          </Card>

          </View>
          );
};

const styles = StyleSheet.create({
          container:{
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
          },
          AntibodyLogo:{
                    justifyContent: "center",
                    alignItems: "center",
                    maxHeight: "10%",
                    maxWidth: "20%",
                    padding: 10,
                    margin: 10,
                    
          },
          AntibodyLogoImg:{
                    justifyContent: "center",
                    alignItems: "center",
                    height:  70,
                    width: 125
          },
          cardStyle:{
                    padding: 10,
                    marginTop: 50,
                    backgroundColor: "white",
                    width: "80%",
                    height: "auto",
                    borderRadius: 8


          },
          testStyle:{
                    flex: 1,
                    fontSize: 18,
                    justifyContent: 'flex-start',
                    paddingTop: 10

          },
          testContents:{
                    flex: 1,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingTop: 5,
          }

})

export default Antibody;


