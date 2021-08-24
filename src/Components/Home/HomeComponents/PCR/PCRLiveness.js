import React, {useState, useEffect, useRef} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Camera } from 'expo-camera';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {Audio} from "expo-av";

const PCRLiveness = ({navigation}, props) => {
    const camera = useRef(null);
    const[values, setValues] = useState({
        hasPermission:[],
        cameraType: Camera.Constants.Type.back,
        isFlashLightOn: Camera.Constants.FlashMode.off,
        videoStatus: 0

    })
    const {hasPermission, cameraType, isFlashLightOn, videoStatus} = values;

    useEffect(() => {
        getPermissions();
    }, []);

    const videoRecord = async() =>{
        if(!videoStatus && camera.current){
            setValues({
                ...values,
                videoStatus: 1,
                isFlashLightOn: isFlashLightOn ? Camera.Constants.FlashMode.torch : isFlashLightOn,
            });
            await camera.current
                .recordAsync()
                .then((data) => {
                    navigation.navigate("PCRTestResult", {
                        // video: data.requestPermissionsAsync,
                        video: data.uri,
                    })
                })
                .catch((err) => console.log(err));
        }else{
            try{
                await camera.current.stopRecording();
                setValues({ ...values, videoStatus:0, isFlashLightOn: Camera.Constants.FlashMode.off,});
            }catch(err){
                console.log(err);
            }
        }
    };

        const getPermissions = async() =>{
            try{
                const {status} = await Camera.requestPermissionsAsync();
                const AudioStatus = await Audio.requestPermissionsAsync();
                setValues({...values, hasPermission:[status, AudioStatus.status]});
            }
            catch(err){
                console.log(err);
            }
        };
    
    
    if(hasPermission.length === 0){
        return <View />
    }
    if(hasPermission.every((element)=>element =="granted")){
        return <View><Text>Please ensure all of the permission!</Text></View>
    }


    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={cameraType} ref={camera} flashMode={isFlashLightOn}>
                <View style={styles.icons}>
                    <TouchableOpacity style={styles.icon}
                        onPress={() =>{
                            if(!videoStatus){
                                setValues({
                                    ...values,
                                    isFlashLightOn: isFlashLightOn ? Camera.Constants.FlashMode.off : Camera.Constants.FlashMode.on,
                                });
                            }
                        }}
                    >
                        <MaterialCommunityIcons name={isFlashLightOn ? 'flash-off':'flash'} color="white" size={60} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} onPress={() => videoRecord()} >
                        <MaterialCommunityIcons name={videoStatus? 'stop':'record'} color="red" size={60} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}
                        onPress={() =>{
                            if(!videoStatus){
                                setValues({
                                    ...values,
                                    cameraType: cameraType ? Camera.Constants.Type.back : Camera.Constants.Type.front,
                                });
                            }
                        }}
                    >
                        <MaterialCommunityIcons name={cameraType ? 'camera-rear' : 'camera-front'} color="white" size={60} />
                    </TouchableOpacity>
                </View>
            </Camera>
            <View>
                <TouchableOpacity>
                    <Button onPress ={()=>{
                        props.navigation.navigate("PCRTestResult")
                    }} style={styles.nextActions}> <View style={styles.nextActionsView}>Show Recorded Video</View> </Button>
                </TouchableOpacity>
            </View>
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
    nextActions: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        color: "white",
        backgroundColor: 'blue'
    },
    nextActionsView:{
        color: "white",
    }
})
export default PCRLiveness;
