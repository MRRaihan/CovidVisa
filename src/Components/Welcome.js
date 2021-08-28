import React, {useState} from 'react';
import logo from '../../assets/images/logo.png';

import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Welcome = (props) => {

          return (
                    <View style={styles.container}>
                              <TouchableOpacity onPress={() =>{
                                        props.navigation.navigate("Signup")
                              }}>
                                        <Image style={styles.logo}
                                                  source={logo}
                                        />
                              </TouchableOpacity>

                    </View>
          );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height:  210,
        width: 330,
    },
})
export default Welcome;
