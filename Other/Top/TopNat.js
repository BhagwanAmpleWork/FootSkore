import { View, Text } from 'react-native'
import React from 'react'
import About from './about'
import Home from './home'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// import { NavigationContainer } from '@react-navigation/native'


const TopTap = createMaterialTopTabNavigator();

const TopNat = () => {
  return (
    // <NavigationContainer>
        <TopTap.Navigator>
            <TopTap.Screen name='Home' component={Home}/>
            <TopTap.Screen name='About' component={About}/>
        </TopTap.Navigator>
    // </NavigationContainer>
  )
}

export default TopNat