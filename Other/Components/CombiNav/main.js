import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import About from './about';
import Contact from './contact';

 const Stack = createStackNavigator();

const Main = () => {
  return (
   <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'lightgreen'},headerTintColor:'white',headerBackTitle:'Back'}}>
    <Stack.Screen name ="Home" component={Home} options={{headerShown: false,headerTintColor:'red'}} />
    <Stack.Screen name ="About" component={About} 
    // options={{headerStyle:{height:50,backgroundColor:'pink'}}}
     />
   </Stack.Navigator>
  )
}

const ContactS = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Contact' component={Contact}/>
        </Stack.Navigator>
    )
}

export {Main,ContactS};