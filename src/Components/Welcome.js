import React, {useState} from 'react';
import logo from '../../assets/images/logo.png';

import {View, StyleSheet, Image, Button} from 'react-native';

const Welcome = (props) => {

          return (
                    <View style={styles.container}>
                              <Image style={styles.logo}
                                        source={logo}
                              />
                              <Button title="Next" onPress={()=>{
                                        props.navigation.navigate("Signup")
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
          logo: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 300,
                    height: 200,
          },
})
export default Welcome;
