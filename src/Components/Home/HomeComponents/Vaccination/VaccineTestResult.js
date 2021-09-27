import React from 'react'
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { Card, Title, Paragraph } from "react-native-paper";
import VaccinationImage from "../../../../../assets/images/Vaccination.jpeg";
import VaccinationData from "./VaccineStatusData";

const VaccineTestResult = ({route}) => {
    const videoUrl = route?.params?.video;
    // console.log(videoUrl);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{width: "100%", height: 200, alignItems: 'center', backgroundColor: "#fff"}}>
                    <Image style={styles.VaccineLogo} source={VaccinationImage} />
                </View>
                <Card style={{width: "100%", borderRadius: 10, borderRadius: 10}}>

                    {videoUrl && (<Video
                        style={{width:"95%", height: 380, padding: 10, marginLeft: 10}}
                        source={{uri: videoUrl}}
                        useNativeControls
                        resizeMode="cover"
                    />)}
                </Card>
                {VaccinationData.map((val, ind) => {
                    return (
                        <Card style={styles.cardStyle}>
                        <Card.Content>
                        <Title>{val.title}</Title>
                        <View
                            style={{
                            borderBottomColor: "#e8e2e1",
                            borderBottomWidth: 2,
                            marginTop: 2,
                            }}
                        />

                        <View style={styles.testContents}>
                            <View style={styles.testStartItem}>
                                <Paragraph>{val.vaccinationDate}</Paragraph>
                                <Paragraph>{val.vaccineCenter}</Paragraph>
                                <Paragraph>{val.servedBy}</Paragraph>
                                <Paragraph>{val.servedId}</Paragraph>
                                <Paragraph>{val.report}</Paragraph>
                            </View>
                            <View style={styles.testEndItem}>
                                <Paragraph>{val.vaccinationFixedDate}</Paragraph>
                                <Paragraph>{val.covidTestCenter}</Paragraph>
                                <Paragraph>{val.covidServedBy}</Paragraph>
                                <Paragraph>{val.covidServedId}</Paragraph>
                            <TouchableOpacity>
                                <Paragraph style={{ color: "blue" }}>
                                {val.testReport}
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
    VaccineLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        height:  150,
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
    text:{
        fontSize: 20,
        color:'#fff',
    },
    cardStyle: {
        backgroundColor: "white",
        width: "95%",
        height: 230
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
        marginTop: 100
    },
})

export default VaccineTestResult;
