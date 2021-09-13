import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import DocumentPicker from 'react-native-document-picker';
import {Text, View, StyleSheet, Image, Button, TextInput, TouchableOpacity, Platform} from 'react-native';


const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Yes',
}, {
    id: '2',
    label: 'No'
}]


const PersonInfo = (props) => {
            const [selectedItem, setSelectedItem] = useState();
          //Date and Time
          const [hidePassword, setHidePassword ] = useState(true);
          const [show, setShow] = useState(false);
          const [date, setDate] = useState(new Date(2000, 0, 1));

          // made the numeric field
          const [radioButtons, setRadioButtons] = useState(radioButtonsData)
          const [passportNumber, setPassportNumber] = useState('');

          const onChangeText = (passportNumber) =>{
                    if(+passportNumber){
                              setPassportNumber(passportNumber);
                    }
          };

          //------> Radio Button
          function onPressRadioButton(radioButtonsArray) {
              setRadioButtons(radioButtonsArray);
          }

          //Actual date of birth to be sent
          const [dob, setDob] = useState();

          const onChange = (event, selectedDate) =>{
                    const currentDate = selectedDate || date;
                    setShow(false);
                    setDate(currentDate);
                    setDob(currentDate);
          }

          const showDatePicker = () =>{
                    setShow(true);
          };
          
          return (
                    <View style={styles.container}>
                              
                              <TextInput style={styles.inputField} placeholder="Full Name" />
                              <TextInput style={styles.inputField}
                                        keyboardType="numeric"
                                        value={passportNumber}
                                        onChangeText={onChangeText}
                                        placeholder="Passport Number" />
                              
                              <TextInput
                                        style={styles.textArea}
                                        underlineColorAndroid="transparent"
                                        placeholder="Present Address......"
                                        placeholderTextColor="grey"
                                        numberOfLines={10}
                                        multiline={true}
                              />
                              <TextInput
                                        style={styles.textArea}
                                        underlineColorAndroid="transparent"
                                        placeholder="Permanent Address......"
                                        placeholderTextColor="grey"
                                        numberOfLines={10}
                                        multiline={true}
                              />
                              <View style={styles.radioButtonContainer}>
                                    <Text style={{color: "gray"}}>Were you affected COVID-19 before?</Text>
                                    <Picker
                                      selectedValue={selectedItem}
                                      onValueChange={(itemValue, itemIndex) =>
                                          setSelectedItem(itemValue)
                                  }>
                                      <Picker.Item label="Yes" value="Yes" />
                                      <Picker.Item label="No" value="No" />
                                  </Picker>
                          </View>
                          
                          <TextInput style={styles.inputField} placeholder="Insert your Covid-19 recovery date" />
                          

                            <TouchableOpacity  style={styles.attachedFile} 
                                onPress={() => this.openDocumentFile()}
                            >
                                <TextInput placeholder="Attached your file" />
                            </TouchableOpacity>

                            <View style={{ justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                              <TouchableOpacity style={styles.button} onPress={() => {
                                  props.navigation.navigate("Home");
                              }}>
                                  <Text style={{textAlign:"center", color: "white", fontSize: 20}}>Next</Text>
                              </TouchableOpacity>
                          </View>

                    </View>
          );
}

const styles = StyleSheet.create({
          container: {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
          },
          inputField:{
                    width: "80%", 
                    backgroundColor: "#e3e8e5",
                    borderRadius: 20,
                    borderColor: "gray", 
                    padding: 15,
                    marginTop: 10
          },
          attachedFile:{
                    width: "80%", 
                    backgroundColor: "#e3e8e5",
                    borderRadius: 20,
                    borderColor: "gray", 
                    padding: 15,
                    marginTop: 10,
                    marginBottom: 10
          },
          textArea: {
                    borderRadius: 20,
                    backgroundColor: "#e3e8e5",
                    marginTop: 10,
                    padding: 15,
                    borderColor: "gray",
                    width: "80%", 
                    height: 100,
                    justifyContent: "flex-start"
          },
            radioButtonContainer:{
              
              borderRadius: 20,
              borderColor: "gray",
              backgroundColor: "#e3e8e5",
              backgroundColor: "#e3e8e5",
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: "80%", 
              padding: 15,
              marginTop: 10,
            },
            button: {
              backgroundColor: "#2a24c9",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
              height: 40,
              width: "70%",
              borderRadius: 10,
              margin: 20,
              elevation:3,
          },

})
export default PersonInfo;