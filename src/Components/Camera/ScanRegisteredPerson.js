import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Image,
  Button,
} from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";

function ScanRegisteredPerson(props) {
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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            backgroundColor: "#e3dddc",
            borderRadius: 15,
            fontSize: 20,
            justifyContent: "Center",
            padding: 10,
            margin: 5,
          }}
        >
          Scan a registered person from Unity through population service center!
        </Text>
      </View>
      <Camera
        style={{
          flex: 1,
          height: "70%",
          width: "100%",
          marginBottom: 140,
          marginTop: 50,
          marginLeft: 35,
          justifyContent: "center",
          alignItems: "center",
          border: 100,
        }}
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

      {capturedPhoto && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
            }}
          >
            <TouchableOpacity
              style={{ margin: 10 }}
              onPress={() => setOpen(false)}
            >
              <FontAwesome name="window-close" size={50} color="#FF0000" />
            </TouchableOpacity>
            <Image
              style={{ width: "100%", height: 300, borderRadius: 20 }}
              source={{ uri: capturedPhoto }}
            />
          </View>
        </Modal>
      )}

      <TouchableOpacity
        style={styles.nextActions}
        onPress={() => {
          props.navigation.navigate("FaceScan");
        }}
      >
        <Button style={{backgroundColor: "blue"}} title="Next" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    
    margin: 20,
    marginLeft: 40,
    borderRadius: 10,
    height: 50,
    width: "90%",
  },
  nextActions: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4290e3",
    color: "white",
    margin: 10,
    marginLeft: 40,
    borderRadius: 10,
    height: 50,
    width: "90%",
  },
});

export default ScanRegisteredPerson;
