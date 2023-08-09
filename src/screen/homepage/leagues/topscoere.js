import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, Alert} from 'react-native';
import {ms} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Light} from '../../../theme';

const data = [
  {
    id: 1,
    source: require('@image/A.png'),
    title: 'Arsenal',
    nextTitle: 'B.Saka',
    lastSource: require('@image/top.png'),
  },
  {
    id: 2,
    source: require('@image/A.png'),
    title: 'Arsenal',
    nextTitle: 'B.Saka',
    lastSource: require('@image/top.png'),
  },
  {
    id: 3,
    source: require('@image/A.png'),
    title: 'Arsenal',
    nextTitle: 'B.Saka',
    lastSource: require('@image/top.png'),
  },
  {
    id: 4,
    source: require('@image/A.png'),
    title: 'Arsenal',
    nextTitle: 'B.Saka',
    lastSource: require('@image/top.png'),
  },
  {
    id: 5,
    source: require('@image/A.png'),
    title: 'Arsenal',
    nextTitle: 'B.Saka',
    lastSource: require('@image/top.png'),
  },
  {
    id: 6,
    source: require('@image/A.png'),
    title: 'Arsenal',
    nextTitle: 'B.Saka',
    lastSource: require('@image/top.png'),
  },
  {
    id: 7,
    source: require('@image/A.png'),
    title: 'Arsenal',
    nextTitle: 'B.Saka',
    lastSource: require('@image/top.png'),
  },
  {
    id: 8,
    source: require('@image/A.png'),
    title: 'Arsenal',
    nextTitle: 'B.Saka',
    lastSource: require('@image/top.png'),
  },
];

const Topscoere = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={style.rootContainer}>
              <View style={style.midContainer}>
                <Image source={item.source} style={style.imageStyle} />
                <Text style={{fontSize: ms(13)}}>{item.title}</Text>
              </View>
              <View style={[style.midContainer, {columnGap: 10}]}>
                <Text>{item.nextTitle}</Text>
                <Image source={item.lastSource} style={style.imageStyle} />
              </View>
            </View>
          </TouchableOpacity>
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
  midContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 15,
  },
  imageStyle: {
    width: ms(40),
    height: ms(40),
  },
});

export default Topscoere;
