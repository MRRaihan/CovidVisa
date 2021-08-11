import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from '@react-native-community/datetimepicker';
import DocumentPicker from 'react-native-document-picker';
import {Text, View, StyleSheet, Image, Button, TextInput, TouchableOpacity, Platform} from 'react-native';


const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Yes',
}, {
    id: '2',
    label: 'No'
}]

const PersonInfo = (props) => {

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
          
          // Pick a single file
          //  async openDocumentFile(){
          //     try {
          //     const res = await DocumentPicker.pick({
          //       type: [DocumentPicker.types.allFiles],
          //     });
          //     console.log(
          //       res.uri,
          //       res.type, // mime type
          //       res.name,
          //       res.size
          //     );
          //   } catch (err) {
          //     if (DocumentPicker.isCancel(err)) {
          //       // User cancelled the picker, exit any dialogs or menus and move on
          //     } else {
          //       throw err;
          //     }
          //   }
          // }
          
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
                                    <View>Were you affected COVID-19 before?</View>
                                  <RadioGroup style={styles.radioButton}
                                      radioButtons={radioButtons} 
                                      onPress={onPressRadioButton} 
                                />
                          </View>
                          
                          <TextInput style={styles.inputField} placeholder="Insert your Covid-19 recovery date" />

                            <TouchableOpacity  style={styles.attachedFile} 
                                onPress={() => this.openDocumentFile()}
                            >
                                <TextInput placeholder="Attached your file" />
                            </TouchableOpacity>

                          <Button style={styles.nextBTN} title="Next" onPress={()=>{
                                        props.navigation.navigate("Home")
                              }}/>

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
                    borderBottomWidth: 1, 
                    borderColor: "gray", 
                    padding: 7,
                    marginTop: 10
          },
          attachedFile:{
                    width: "80%", 
                    backgroundColor: "#e3e8e5",
                    borderRadius: 20,
                    borderBottomWidth: 1, 
                    borderColor: "gray", 
                    padding: 7,
                    marginTop: 10,
                    marginBottom: 10
          },
          textArea: {
                    borderRadius: 20,
                    borderBottomWidth: 1,
                    backgroundColor: "#e3e8e5",
                    marginTop: 10,
                    padding: 5,
                    borderColor: "gray",
                    width: "80%", 
                    height: 100,
                    justifyContent: "flex-start"
          },
            radioButtonContainer:{
              
              borderRadius: 20,
              borderColor: "gray",
              borderBottomWidth: 1,
              backgroundColor: "#e3e8e5",
              backgroundColor: "#e3e8e5",
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: "80%", 
              marginTop: 10,
            }

})
export default PersonInfo;