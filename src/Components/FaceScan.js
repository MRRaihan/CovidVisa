import * as React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import NID from "../../assets/images/face.png";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const FaceScan = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.nidComment}>Place your face to take a clear photo</Text>
      <Card style={{marginTop: 30, marginBottom: 365, width: "90%"}}>
        <Card.Cover style={styles.personNID} source={NID} />
        <Card.Actions style={styles.nidActions}>
          <TouchableOpacity>
            <Button labelStyle={{ fontSize: 35 }} icon="swap-horizontal"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button labelStyle={{ fontSize: 35 }} icon="camera"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button labelStyle={{ fontSize: 35 }} icon="camera-retake-outline"/>
          </TouchableOpacity>
        </Card.Actions>
        <View style={{ justifyContent: 'center', alignItems: 'center', width:"100%"}}>
              <TouchableOpacity style={styles.button} onPress={() => {
                  props.navigation.navigate("PersonaInfo");
              }}>
                  <Text style={{textAlign:"center", color: "white", fontSize: 20}}>Next</Text>
              </TouchableOpacity>
          </View>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%"
    },
    nidComment:{
        color: 'gray',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    personNID:{
    height:  210,
    width: 351,

    },
    nidActions:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
},
button: {
    backgroundColor: "#2a24c9",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "70%",
    borderRadius: 10,
    marginBottom: 15
},
});

export default FaceScan;
