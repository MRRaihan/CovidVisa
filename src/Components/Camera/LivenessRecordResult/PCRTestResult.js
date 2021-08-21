import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Video } from 'expo-av';

const PCRTestResult = ({route}) => {
    let videoURL = route?.params?.video;
    console.log(videoURL);
    return (
        <View style={styles.container}>
            {videoURL && (<Video
                style={{width: "100%", flex:1}}
                source={{uri: videoURL}}
                useNativeControls
                resizeMode="cover"
            />)}
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        width: "80%",
        justifyContent: "center",
        flexDirection: "column",

    }
})

export default PCRTestResult;
