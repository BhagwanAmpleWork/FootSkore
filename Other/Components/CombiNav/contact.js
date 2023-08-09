import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Contact = () => {
  return (
    <View style={style.contain}>
      <Text>Contact</Text>
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

export default Contact