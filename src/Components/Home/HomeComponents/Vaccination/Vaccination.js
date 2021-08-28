import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Dimensions, FlatList, ScrollView  } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MapView from 'react-native-maps';

const VaccineRegistration = (props) => {
    const [selectedFirstItem, setSelectedFirstItem] = useState();
    const [selectedSecondItem, setSelectedSecondItem] = useState();
    const [selectedThirdItem, setSelectedThirdItem] = useState();
    const [selectedFourItem, setSelectedFourItem] = useState();
    const [selectedFiveItem, setSelectedFiveItem] = useState();
    

    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.firstView}>
                <View style={styles.pickerAllItem}>
                <Text style={{fontSize: 19, fontWeight: 'bold'}}>Select a Country</Text>
                    <Picker
                        selectedValue={selectedFirstItem}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedFirstItem(itemValue)
                    }>
                        <Picker.Item label="Bangladesh" value="Bangladesh" />
                        <Picker.Item label="Argentina" value="Argentina" />
                        <Picker.Item label="Brazil" value="Brazil" />
                        <Picker.Item label="Germany" value="Germany" />
                    </Picker>
                </View>
                <View style={styles.pickerAllItem}>
                    <Text style={{fontSize: 19, fontWeight: 'bold'}}>Select a City</Text>
                    <Picker
                        selectedValue={selectedSecondItem}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedSecondItem(itemValue)
                    }>
                        <Picker.Item label="Dhaka" value="Dhaka" />
                        <Picker.Item label="Buenos Aires" value="Buenos Aires" />
                        <Picker.Item label="Sao Paulo" value="Sao Paulo" />
                        <Picker.Item label="Berlin" value="Berlin" />
                    </Picker>
                </View>

                <View style={styles.pickerAllItem}>
                    <Text style={{fontSize: 19, fontWeight: 'bold'}}>Select a Zone</Text>
                    <Picker
                        selectedValue={selectedThirdItem}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedThirdItem(itemValue)
                    }>
                        <Picker.Item label="Uttara" value="Uttara" />
                        <Picker.Item label="Buenos Aires" value="Buenos Aires" />
                        <Picker.Item label="Sao Paulo" value="Sao Paulo" />
                        <Picker.Item label="Berlin" value="Berlin" />
                    </Picker>
                </View>

                <View style={styles.pickerAllItem}>
                    <Text style={{fontSize: 19, fontWeight: 'bold'}}>Select a center for PCR Test</Text>
                    <Picker
                        selectedValue={selectedFourItem}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedFourItem(itemValue)
                    }>
                        <Picker.Item label="Kuet Moitri Medical" value="Kuet Moitri Medical" />
                        <Picker.Item label="Argentina Medical Center" value="Argentina Medical Center" />
                        <Picker.Item label="Brazil Medical Center" value="Brazil Medical Center" />
                        <Picker.Item label="Germany Medical Center" value="Germany Medical Center" />
                    </Picker>
                </View>

                <View style={styles.pickerAllItem}>
                    <Text style={{fontSize: 19, fontWeight: 'bold'}}>Select a Date</Text>
                    <Picker
                        selectedValue={selectedFiveItem}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedFiveItem(itemValue)
                    }>
                        <Picker.Item label="12 / 07 / 2020" value="12 / 07 / 2020" />
                    </Picker>
                </View>

                <View style={styles.MapArea}>
                    <Text style={{fontSize: 19, fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>Location</Text>
                    <MapView style={styles.map} />
                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20, width:"100%"}}>
                    <Button title="Register & Exit"style={styles.button}  onPress={() => {
                        props.navigation.navigate("Vaccine Payment Method");
                    }} />
                </View>
                
                
            </View>

        </View>
    </ScrollView>
    

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "90%",
        marginLeft: 10,
        justifyContent: 'center',
        flexDirection: "column"
    },
    firstView:{
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    pickerAllItem:{
        justifyContent: "center",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderColor: "#d9b555",
        backgroundColor: "#d8d9e6",
        width: "100%",
    },
    MapArea:{
        backgroundColor: "#d8d9e6",
        borderRadius: 10,
        padding: 10,
        flexDirection: "column",
        height: 410,
        width: "100%",
        marginLeft: 10
    },
    
    map: {
        width: "100%",
        height: 345,
        borderRadius: 10

    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderWidth: 1,
        height: 50,
        width: "100%",
        margin: 20,
        elevation:3,
    },
    // pickerItem:{
    //     borderRadius: 10,
    //     borderColor: "#d9b555",
    //     backgroundColor: "#ebecf2",
    //     width: "100%",
    //     fontSize: 20
    // }

})

export default VaccineRegistration;
