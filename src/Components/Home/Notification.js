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
                <Title>{val.title}</Title>
                <Paragraph>{val.statusDetails}</Paragraph>
                <Paragraph style={{color: "gray", margin: 5}}>{val.time}</Paragraph>
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
},
cardStyle: {
          backgroundColor: "white",
          width: "80%",
          height: "auto",
},
});

export default Notification;