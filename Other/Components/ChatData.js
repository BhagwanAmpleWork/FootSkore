import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
// import ChatScreen from './ChatScreen'

const ChatData = ({chat}) => {
    return (
        <Pressable style={style.press}>

        <Image source={{ uri: chat.user.image}} style={style.image} />

        <View style={style.container}>
            <View style={style.contain}>
                <Text style={style.text} numberOfLines={1}>{chat.user.name}</Text>
                <Text style={style.time}>10:00</Text>
            </View>
            <Text style={style.subText} numberOfLines={2}>{chat.user.text}</Text>
        </View>

        </Pressable>
       
    )
}

const style = StyleSheet.create({
    press : {
        flexDirection : 'row',
         marginHorizontal : 8,
         height : 70,
         backgroundColor : '#ADD8E6',
         marginVertical : 4
    },
    container : {
        flex : 1, 
    },
    image : {
        width: 50, 
        height: 50,
        borderRadius:30,
        marginRight : 10,
        marginTop : 7
    },
    contain:{
        flexDirection : 'row',
        marginBottom : 9
    },
    text : {
        fontWeight : 'bold',
        flex : 1
    }
})

export default ChatData