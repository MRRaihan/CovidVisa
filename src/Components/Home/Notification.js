import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
TextInput,
} from "react-native";
import { Avatar, Button, Card } from "react-native-paper";


const Notification = (props) => {
const [userId, setUserId] = useState();

return (
<View style={styles.container}>

<Card style={styles.cardStyle}>
<View style={{ paddingTop: 10 }}>
          <Text style={styles.testStyle}>Covid Visa</Text>
          <View style={styles.testContents}>
                    <Text >Your antibody is about to expire in a month.</Text>
                    <Text style={{color: "gray", margin: 5}}>3:55PM  10 May 2021</Text>
          </View>
          <View
          style={{
          borderBottomColor: "#e8e2e1",
          borderBottomWidth: 2,
          marginTop: 20,
          marginBottom: 10,
          }}
          />

          <Text style={styles.testStyle}>UTTPS</Text>
          <View style={styles.testContents}>
                    <Text >Your vaccine schedule is activated. Please come to center at 12 May.</Text>
                    <Text style={{color: "gray", margin: 5}}>10:15PM  5 May 2021</Text>
          </View>
          <View
          style={{
          borderBottomColor: "#e8e2e1",
          borderBottomWidth: 2,
          marginTop: 20,
          marginBottom: 10,
          }}
          />

          <Text style={styles.testStyle}>Government</Text>
          <View style={styles.testContents}>
                    <Text >Please follow the rules to avoid COVID spread. Stay home and stay safe.</Text>
                    <Text style={{color: "gray", margin: 5}}>3:55PM  1 May 2021</Text>
          </View>
          <View
          style={{
          borderBottomColor: "#e8e2e1",
          borderBottomWidth: 2,
          marginTop: 30,
          marginBottom: 10,
          }}
          />

          <Text style={styles.testStyle}>UTTPS</Text>
          <View style={styles.testContents}>
                    <Text >Your reservation for vaccine is confirmed. We will notify you soon to come to the center.</Text>
                    <Text style={{color: "gray", margin: 5}}>01:20PM  25 Apr 2021</Text>
          </View>
          <View
          style={{
          borderBottomColor: "#e8e2e1",
          borderBottomWidth: 2,
          marginTop: 30,
          marginBottom: 10,
          }}
          />
          
          <Text style={styles.testStyle}>Kuet Moitri Hospital</Text>
          <View style={styles.testContents}>
                    <Text >Congratulations! Your  PCR result is negative. This result is valid for next 48 hours.</Text>
                    <Text style={{color: "gray", margin: 5}}>12:30PM  20 May 2021</Text>
          </View>
          <View
          style={{
          borderBottomColor: "#e8e2e1",
          borderBottomWidth: 2,
          marginTop: 30,
          marginBottom: 10,
          }}
          />

          <Text style={styles.testStyle}>Kuet Moitri Hospital</Text>
          <View style={styles.testContents}>
                    <Text >You have successfully done the PCR test. Result will be published soon. Thank you!</Text>
                    <Text style={{color: "gray", margin: 5}}>03:55PM  12 May 2021</Text>
          </View>
          <View
          style={{
          borderBottomColor: "#e8e2e1",
          borderBottomWidth: 2,
          marginTop: 30,
          marginBottom: 20,
          }}
          />
</View>



</Card>
</View>
);
};

const styles = StyleSheet.create({
container: {
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
height: "100%",
width: "100%",
},
AntibodyLogo: {
justifyContent: "center",
alignItems: "center",
maxHeight: "10%",
maxWidth: "20%",
padding: 10,
margin: 10,
},
AntibodyLogoImg: {
justifyContent: "center",
alignItems: "center",
borderRadius: "100%",
height: 150,
width: 150,
},
cardStyle: {
padding: 10,
marginTop: 50,
backgroundColor: "white",
width: "80%",
height: "auto",
borderRadius: 8,
},
testStyle: {
flex: 1,
fontSize: 18,
justifyContent: "flex-start",
paddingTop: 5,
},
testContents: {
flex: 1,
justifyContent: "space-between",
flexDirection: "column",
},
UserID: {
flex: 1,
justifyContent: "center",
flexDirection: "row",
padding: 5,
marginBottom: 20,
height: 50,
width: "80%",
},
UserIdStart: {
flexDirection: "row",
justifyContent: "center",
textAlign: "center",
},
UserIdEnd: {
flexDirection: "row",
justifyContent: "center",
textAlign: "center",
},
testContentEdit:{
justifyContent: "center",
flexDirection: "row",
paddingTop: 10,
marginTop: 30
}
});

export default Notification;

