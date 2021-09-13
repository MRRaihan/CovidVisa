import * as React from 'react';
import { Avatar, Button, Card } from 'react-native-paper';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import NID from "../../assets/images/nid.jpg";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const NIDScan = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.nidComment}>Place your NID to take a clear photo</Text>
            
            <Card style={{marginTop: 30, marginBottom: 365, width: "90%"}}>
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
                <View style={{justifyContent: "center", alignItems: "center"}}>
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
})

export default NIDScan;