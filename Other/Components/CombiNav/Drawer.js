import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import  {ContactS}  from './main';
import TabBottom from './Tab'
import Icon from 'react-native-vector-icons/FontAwesome5';

const DrawerData = createDrawerNavigator()

const Drawer = () => {

  
  return (
    <DrawerData.Navigator >
        <DrawerData.Screen name='Home' component={TabBottom} options={{
          drawerIcon : ({focused,size}) =>(
          <Icon name="home" size={size} color={focused?'red':'pink'}/>
        ),headerTintColor:'brown',
      }} />
        <DrawerData.Screen name='Contact' component={ContactS} options={{
          drawerIcon : ({focused,size}) => (
            <Icon name="contacts" size={size} color={focused ? 'red' : 'green'}/>
          )
        }}/>
    </DrawerData.Navigator>
  )
}

export default Drawer