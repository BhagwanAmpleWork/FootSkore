import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {Light} from '../../../theme';

const data = [
  {
    id: 1,
    source: require('@image/inplayer.png'),
    title: 'Thomas Muller',
    subtitle: 'FC Bayern Munich',
    lastSource: require('@image/fc.png'),
  },
  {
    id: 2,
    source: require('@image/inplayer.png'),
    title: 'Thomas Muller',
    subtitle: 'FC Bayern Munich',
    lastSource: require('@image/fc.png'),
  },
  {
    id: 3,
    source: require('@image/inplayer.png'),
    title: 'Thomas Muller',
    subtitle: 'FC Bayern Munich',
    lastSource: require('@image/fc.png'),
  },
];
const Injury = () => {
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
                <Text>{item.title}</Text>
                <Text style={{fontSize: ms(12), color: Light.subtext}}>
                  {item.subtitle}
                </Text>
              </View>
            </View>
            <Image source={item.lastSource} style={[style.imageStyle]} />
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

export default Injury;
