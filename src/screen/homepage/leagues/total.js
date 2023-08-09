import {StyleSheet, View, FlatList, Text, Image} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {Light} from '../../../theme';

const data = [
  {
    id: 1,
    source: require('@image/A.png'),
    title: 'Arsenal',
    point: 12,
    wicket: 10,
    dot: 1,
    lost: 1,
    pts: 31,
  },
  {
    id: 2,
    source: require('@image/ManchF.png'),
    title: 'Manchester',
    subTitle: 'United',
    point: 12,
    wicket: 10,
    dot: 1,
    lost: 1,
    pts: 31,
  },
  {
    id: 3,
    source: require('@image/Manch.png'),
    title: 'Manchester',
    subTitle: 'United',
    point: 12,
    wicket: 10,
    dot: 1,
    lost: 1,
    pts: 31,
  },
  {
    id: 4,
    source: require('@image/totte.png'),
    title: 'Tottenham',
    point: 12,
    wicket: 10,
    dot: 1,
    lost: 1,
    pts: 31,
  },
  {
    id: 5,
    source: require('@image/new.png'),
    title: 'Newcastel',
    point: 12,
    wicket: 10,
    dot: 1,
    lost: 1,
    pts: 31,
  },
  {
    id: 6,
    source: require('@image/fcb.png'),
    title: 'FC',
    subTitle: 'Barcelona',
    point: 12,
    wicket: 10,
    dot: 1,
    lost: 1,
    pts: 31,
  },
];

const Total = ({item}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces
        data={data}
        renderItem={({item}) => (
          <View style={style.rootContainer}>
            <View style={style.midContainer}>
              <Text>{item.id}</Text>
              <Image source={item.source} style={style.imageStyle} />
              <View style={{rowGap: 3}}>
                <Text>{item.title}</Text>
                <Text>{item.subTitle}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 15,
              }}>
              <View style={style.footContainer}>
                <Text>P</Text>
                <Text>{item.point}</Text>
              </View>
              <View style={style.footContainer}>
                <Text>W</Text>
                <Text>{item.wicket}</Text>
              </View>
              <View style={style.footContainer}>
                <Text>D</Text>
                <Text>{item.dot}</Text>
              </View>
              <View style={style.footContainer}>
                <Text>L</Text>
                <Text>{item.lost}</Text>
              </View>
              <View style={style.footContainer}>
                <Text>PTS</Text>
                <Text>{item.pts}</Text>
              </View>
            </View>
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
    width: ms(35),
    height: ms(35),
  },
  midContainer: {
    flexDirection: 'row',
    columnGap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 8,
  },
});

export default Total;
