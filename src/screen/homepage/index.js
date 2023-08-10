import React, {useState} from 'react';
import {Text, View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import style from './style';
import AppHeader from '@components/header';
import Icon from 'react-native-vector-icons/AntDesign';
import Data from './data';
import Card from '@components/card';

const TeamDetail = ({navigation}) => {
  const navigateTo = () => navigation.navigate('GlobalSearch');
  return (
    <View style={style.root}>
      <AppHeader title={'MATCH FIXTURE'} onPress={navigateTo} />
      <View style={style.container}>
        <TouchableOpacity style={style.calendarIcon}>
          <Icon name={'calendar'} size={25} color={'#409CFF'} />
        </TouchableOpacity>
        <View style={style.calendarContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Data}
            renderItem={({item}) => (
              <View style={style.centerContainer}>
                <Text style={style.content}>{item.date}</Text>
                <Text>---</Text>
                <Text style={style.subContent}>{item.day}</Text>
              </View>
            )}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          source={require('@assets/image/ufea.png')}
          headerText={'UEFA Champion League'}
          sourceMid={require('@assets/image/fk-logo.png')}
          midText={'Ural U20'}
          headerMidText={'First Half'}
          sourceMidNext={require('@assets/image/gol.png')}
          midSubText={'Zenith U19'}
        />
        <Card
          source={require('@assets/image/Fij.png')}
          headerText={'National Football League'}
          sourceMid={require('@assets/image/Layer.png')}
          midText={'Suva'}
          headerMidText={'Second Half'}
          sourceMidNext={require('@assets/image/redImg.png')}
          midSubText={'Rewa'}
        />
      </ScrollView>
    </View>
  );
};

export {TeamDetail};
