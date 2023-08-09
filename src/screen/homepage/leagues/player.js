import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {ms} from 'react-native-size-matters';
import {Light} from '../../../theme';

const data = [
  {
    id: 1,
    source: require('@image/playerSe.png'),
    title: 'B.Mendy',
    subTitle: 'France',
    age: 'Age:22',
  },
  {
    id: 2,
    source: require('@image/playerf.png'),
    title: 'F.Delph',
    subTitle: 'England',
    age: 'Age:22',
  },
  {
    id: 3,
    source: require('@image/playerT.png'),
    title: 'Lee Grant',
    subTitle: 'England',
    age: 'Age:22',
  },
  {
    id: 4,
    source: require('@image/playerFo.png'),
    title: 'M.Greenwood',
    subTitle: 'England',
    age: 'Age:22',
  },
  {
    id: 5,
    source: require('@image/playerFi.png'),
    title: 'Gary Cahill',
    subTitle: 'England',
    age: 'Age:22',
  },
  {
    id: 6,
    source: require('@image/playerSi.png'),
    title: 'Daniel Noel Drinkwater',
    subTitle: 'England',
    age: 'Age:22',
  },
];

const Player = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces
        data={data}
        renderItem={({item}) => (
          <View style={style.rootContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image source={item.source} style={style.imageStyle} />

              <View style={style.midContainer}>
                <Text style={{color: Light.text}}>{item.title}</Text>
                <Text style={{fontSize: ms(12), color: Light.subtext}}>
                  {item.subTitle}
                </Text>
              </View>
            </View>
            <Text style={{color: Light.icon}}>{item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    backgroundColor: Light.card,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 17,
    marginTop: '3%',
    alignItems: 'center',
  },
  imageStyle: {
    width: ms(40),
    height: ms(40),
  },
  midContainer: {
    marginLeft: ms(15),
    rowGap: 7,
  },
});

export default Player;
