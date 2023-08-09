import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-bootsplash'


import 'react-native-screens';
import Index from './src/navigation';


// import {Started,SignIN,SignUpfor,LoginWith,Submit,Verify,Save,BackIn} from './src/components/Started';


const App = () => {

  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    },3000)
    
  },[]);

  return (
   <View style={{flex:1}}>
    <Index/>
   </View>
  )
}

export default App






