import React, { useState, useEffect, useRef } from "react";
import {
StyleSheet,
Text,
View,
SafeAreaView,
TouchableOpacity, Modal, Image, Button, Alert
} from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

import { FontAwesome } from "@expo/vector-icons";

function VaccineProcess(props) {
const [type, setType] = useState(Camera.Constants.Type.back);
const [hasPermission, setHasPermission] = useState(null);
const camRef = useRef(null);
const [capturedPhoto, setCapturedPhoto] = useState(null);
const [open, setOpen] = useState(false);


useEffect(() => {
(async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === "granted");
})();

(async () => {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          setHasPermission(status === "granted");
})();
}, []);
if (hasPermission === null) {
return <View />;
}
if (hasPermission === false) {
return <Text>Access Camera!</Text>;
}
async function takePicture() {
          if (camRef) {
                    const data = await camRef.current.takePictureAsync();
                    setCapturedPhoto(data.uri);
                    setOpen(true);
                    console.log(data);

          }
}

async function savePicture(){
          const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
          .then(() =>{  
                Alert.alert(  
                    `Matched!!!`,  
                    `your name is Ashfaque Hossain and ID is 234 456 876 .`,  
                    [  
                        {  
                            text: 'Retry',  
                            onPress: () => console.log('Retry the process for mismatch!'),  
                            style: 'cancel',  
                        },  
                        {text: 'OK', onPress: () => console.log('OK Pressed')},  
                    ],  
                    {cancelable: false}  
                )
          })
          .catch(error =>{
                    console.log('err',error);
          })
}

return (
<SafeAreaView style={styles.container}>
<View style={{width: "100%", marginBottom: 7, marginTop: 7, marginLeft: 20, fontSize: 20, color: "gray" }}>
    <Text style={{width: "100%", fontSize: 20, color: "gray" }}>Scan a registered from Unity through population service center!</Text>
</View>
<Camera
style={{ flex: 1, width: "100%", marginBottom: 60, marginTop: 20, marginLeft: 20, border: 3}}
type={type}
ref={camRef}
>
<View
          style={{
          flex: 1,
          backgroundColor: "transparent",
          flexDirection: "row",
          }}
>
          <TouchableOpacity
          style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          }}
          onPress={() => {
          setType(
          type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
          );
          }}
          >
          <Text style={{ fontSize: 20, marginBottom: 13, color: "#FFF" }}>
          Flip
          </Text>
          </TouchableOpacity>
</View>
</Camera>
<TouchableOpacity style={styles.button} onPress={takePicture}>
          <FontAwesome name="camera" size={23} color="#FFF" />
</TouchableOpacity>

{capturedPhoto &&
          <Modal
                    animationType= "slide"
                    transparent={false}
                    visible={open}
          >
          <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', margin: 20}}>
                    <View style={{ margin:10,  flexDirection: 'row' }}>
                              <TouchableOpacity style={{margin: 10}} onPress={() => setOpen(false) }>
                                        <FontAwesome name="window-close" size={50} color="#FF0000" />
                              </TouchableOpacity>

                              <TouchableOpacity style={{margin: 10}} onPress={savePicture }>
                                        <FontAwesome name="upload" size={50} color="green" />
                              </TouchableOpacity>
                    </View>
                    <Image style={{width:'100%', height: 450, borderRadius: 20}}
                              source={{ uri: capturedPhoto}}
                    />
          </View>
          </Modal>
}

    <TouchableOpacity style={styles.nextActions} onPress ={()=>{
            props.navigation.navigate("Vaccine Liveness") 
        }} >
        <Text style={{ color:"white", fontSize: 20
     }}>NEXT</Text> 
    </TouchableOpacity>

</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
width: "90%",
},
button: {
justifyContent: "center",
alignItems: "center",
backgroundColor: "#121212",
margin: 20,
marginLeft: 35,
borderRadius: 10,
height: 50,
},
nextActions: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    height: 50,
    marginLeft: 35,
    width: "85%",
    marginBottom: 20,
    backgroundColor: "#3987ed"
},
nextActionsView:{
    color: "white",
}
});

export default VaccineProcess;
