import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Home/Home';
import Scan from '../Home/Scan';
import Notification from '../Home/Notification';
import UserProfile from '../Home/UserProfile';
import Icons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const NavigationTab = (props) => {
          return (
                    
                              <Tab.Navigator>
                                        <Tab.Screen 
                                                  name=" " 
                                                  component={Home}
                                                  options={{
                                                            tabBarIcon: ({color, size}) =>(
                                                                      <Icons name="home" color={color} size={size} 
                                                                                onPress={() =>
                                                                                          props.navigation.navigate("Home")
                                                                                }
                                                                      />
                                                            )
                                                  }}
                                        />
                                        <Tab.Screen name="  " component={Scan} 
                                                  options={{
                                                            tabBarIcon: ({color, size}) =>(
                                                                      <Icons name="qr-scanner" color={color} size={size}
                                                                                onPress={() =>
                                                                                          props.navigation.navigate("Scan")
                                                                                }
                                                                      />
                                                            )
                                                  }}
                                        />
                                        <Tab.Screen name="   " component={Notification} 
                                                  options={{
                                                            tabBarIcon: ({color, size}) =>(
                                                                      <Icons name="notifications" color={color} size={size}
                                                                                onPress={() =>
                                                                                          props.navigation.navigate("Notification")
                                                                                }
                                                                      />
                                                            )
                                                  }}
                                        />
                                        <Tab.Screen name="    " component={UserProfile} 
                                                  options={{
                                                            tabBarIcon: ({color, size}) =>(
                                                                      <Icons name="person" color={color} size={size} 
                                                                                onPress={() =>
                                                                                          props.navigation.navigate("UserProfile")
                                                                                }
                                                                      />
                                                            )
                                                  }}
                                        />
                              </Tab.Navigator>
                    
                    
          )
}

export default NavigationTab;
