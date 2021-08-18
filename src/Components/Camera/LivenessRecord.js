import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Camera } from 'expo-camera';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {Audio} from "expo-av";

const LivenessRecord = (props) => {
    const[values, setValues] = useState({
        hasPermission:[],
        cameraType: Camera.Constants.Type.back,
        isFlashLightOn: Camera.Constants.FlashMode.off

    })
    const {hasPermission, cameraType, isFlashLightOn} = values;

    useEffect(() => {
        getPermissions();
    }, []);
    const getPermissions = async() =>{
        const {status} = await Camera.requestPermissionsAsync();
        const AudioStatus = await Audio.requestPermissionsAsync();
        setValues({...values, hasPermission:[status, AudioStatus.status]});
    };


    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={cameraType}>
                <View style={styles.icons}>
                    <TouchableOpacity style={styles.icon}>
                        <MaterialCommunityIcons name="flash" color="white" size={60} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <MaterialCommunityIcons name="record" color="red" size={60} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <MaterialCommunityIcons name="camera-front" color="white" size={60} />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    camera:{
        flex: 1,
    },
    icons:{
        position: "absolute",
        bottom: 5,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        padding: 5
    },
    icon:{},
})
export default LivenessRecord;
