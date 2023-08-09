import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Main,ContactS} from './main'

const Tab = createBottomTabNavigator();

const TabBottom = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen options={{headerShown: false}} name='Home' component={Main}/>
    <Tab.Screen options={{headerShown: false}} name='CONTACT' component={ContactS}/>
   </Tab.Navigator>
  )
}

export default TabBottom;