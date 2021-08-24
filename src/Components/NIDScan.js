import * as React from 'react';
import { Avatar, Button, Card } from 'react-native-paper';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import NID from "../../assets/images/nid.jpg";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const NIDScan = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.nidComment}>Place your NID to take a clear photo</Text>
            <Card>
            <Card.Cover style={styles.personNID} source={NID} />
            <Card.Actions style={styles.nidActions}>
            <TouchableOpacity>
                    <Button labelStyle={{ fontSize: 35 }} icon="swap-horizontal"></Button>
            </TouchableOpacity>
            <TouchableOpacity >
                    <Button labelStyle={{ fontSize: 35 }} icon="camera" ></Button>
            </TouchableOpacity>
            <TouchableOpacity>
                    <Button labelStyle={{ fontSize: 35 }} icon="camera-retake-outline" ></Button>
            </TouchableOpacity>
            </Card.Actions>

            <View style={{ justifyContent: 'center', alignItems: 'center', width:"100%"}}>
            <TouchableOpacity style={styles.button} onPress={() => {
                props.navigation.navigate("Face Scan");
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
        marginBottom: 20,
    },
    personNID:{
    height:  210,
    width: 330,

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
    margin: 10,
    borderWidth: 1,
    height: 40,
    width: "70%",
    borderRadius: 10,
    margin: 20,
    elevation:3,
},
})

export default NIDScan;