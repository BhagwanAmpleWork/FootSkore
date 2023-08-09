import { View, Text } from 'react-native'
import React from 'react';
import Chats from "./Data.json";
import { FlatList } from 'react-native-gesture-handler';
import ChatData from './ChatData';

const ChatScreen = () => {
  return (
   <FlatList data={Chats}
     renderItem={({item}) => <ChatData chat={item}/>}>

   </FlatList>
  )
}

export default ChatScreen