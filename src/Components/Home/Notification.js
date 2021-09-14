import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import NotificationData from './MadeData/NotificationData';

const Notification = () => {
return (
    <ScrollView>
<View style={styles.container}>
{NotificationData.map((val, ind) => {
return (
        <Card style={styles.cardStyle}>
        <Card.Content>
                <Title style={{fontSize: 25}}>{val.title}</Title>
                <Paragraph style={{fontSize: 19}}>{val.statusDetails}</Paragraph>
                <Paragraph style={{color: "gray", margin: 5, fontSize: 19}}>{val.time}</Paragraph>
                <View
                            style={{
                            borderBottomColor: "#e8e2e1",
                            borderBottomWidth: 2,
                            marginTop: 2,
                            }}
                />
        </Card.Content>
        </Card>
        );
    })}
</View>
</ScrollView>
);
};

const styles = StyleSheet.create({
container: {
          flex:1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          marginTop: 10,
          marginBottom: 20
},
cardStyle: {
          backgroundColor: "white",
          width: "90%",
          height: "auto",
},
});

export default Notification;