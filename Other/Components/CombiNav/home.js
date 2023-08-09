import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import React,{useEffect} from 'react';
import Animated from 'react-native-reanimated';


const Home = (props) => {

  useEffect(() => {
    const uns = props.navigation.addListener('transitionStart', (e) => {
       Alert.alert("b");
    })
    return uns;

  },[props.navigation])


  return (
    <View style={style.contain}>
      <Text>Home Page</Text>
      <Button title='Click Change Route' onPress={() => props.navigation.navigate('About')}/>
      <Animated.Image source={{uri : 'https://picsum.photos/id/39/200'}}
       style={{height:100,width:100}} />
    </View>
  )
}

const style = StyleSheet.create({
    contain : {
        flex:1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default Home;