import React from 'react'
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { Card,Paragraph } from "react-native-paper";
import PCRImage from "../../../../../assets/images/done.png";
import PCRData from "./PCRStatusData";

const PCRTestResult = ({route}) => {
    const videoUrl = route?.params?.video;
    // console.log(videoUrl);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{width: "100%", height: 200, alignItems: 'center', backgroundColor: "#fff"}}>
                    <Image style={styles.PCRLogo} source={PCRImage} />
                </View>
                <Card style={{width: "100%", borderRadius: 10, borderRadius: 10}}>

                    {videoUrl && (<Video
                        style={{width:"95%", height: 380, padding: 10, marginLeft: 10}}
                        source={{uri: videoUrl}}
                        useNativeControls
                        resizeMode="cover"
                    />)}
                </Card>
                {PCRData.map((val, ind) => {
                    return (
                        <Card style={styles.cardStyle}>
                        <Card.Content>
                        <View style={styles.testContents}>
                            <View style={styles.testStartItem}>
                                <Paragraph>{val.pcrResult}</Paragraph>
                                <Paragraph>{val.pcrDate}</Paragraph>
                                <Paragraph>{val.pcrValidaty}</Paragraph>
                                <Paragraph>{val.pcrCenter}</Paragraph>
                                <Paragraph>{val.pcrServedBy}</Paragraph>
                                <Paragraph>{val.pcrServedId}</Paragraph>
                                <Paragraph>{val.pcrReport}</Paragraph>
                            </View>
                            <View style={styles.testEndItem}>
                                <Paragraph>{val.pcrTestResult}</Paragraph>
                                <Paragraph>{val.pcrTestDate}</Paragraph>
                                <Paragraph>{val.pcrTestValidaty}</Paragraph>
                                <Paragraph>{val.pcrTestCenter}</Paragraph>
                                <Paragraph>{val.pcrTestServedBy}</Paragraph>
                                <Paragraph>{val.pcrTestServedId}</Paragraph>
                            <TouchableOpacity>
                                <Paragraph style={{ color: "blue" }}>
                                    {val.pcrTestReport}
                                </Paragraph>
                            </TouchableOpacity>
                            </View>
                        </View>
                        </Card.Content>
                    </Card>
                    
                    );
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },
    PCRLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        height:  130,
        width: 200,
        marginTop: 15
    },
    button:{
        backgroundColor:'#ff6b6b',
        borderRadius: 10,
        padding: 15,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 10
    },
    cardStyle: {
        backgroundColor: "white",
        width: "95%",
        height: 230,
        marginTop: 10,
        borderRadius: 10
    },
    testContents: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        height: 40
    },
    testStartItem: {
        justifyContent: "flex-start",
    },
    testEndItem: {
        justifyContent: "flex-end",
        marginTop: 138
    },
})

export default PCRTestResult;
