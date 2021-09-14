import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { ScrollView } from 'react-native-gesture-handler';

const NIDScan = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
      <ScrollView>
        <View style={styles.container}>
                    <View style={styles.barcodebox}>
                        <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={{ height: 550, width: "100%" }} />
                    </View>
                    <Text style={styles.maintext}>{text}</Text>

                    {scanned && <Button style={{fontSize: 30}} title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}

            
            <View style={{ justifyContent: 'center', alignItems: 'center', width:"100%", marginTop: 20}}>
                <TouchableOpacity style={styles.button} onPress={() => {
                props.navigation.navigate("Face Scan");
                }}>
                <Text style={{textAlign:"center", color: "white", fontSize: 20}}>Next</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    marginTop: 20
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    width: "100%",
    overflow: 'hidden',
  },
  button: {
    backgroundColor: "#2a24c9",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "70%",
    borderRadius: 10,
    marginBottom: 15
},
});

export default NIDScan;