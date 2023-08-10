import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {ms, vs} from 'react-native-size-matters';
import {Light, Font} from '@theme';

const data = [
  {
    id: 1,
    source: require('@image/non.png'),
    title: 'T.Romero',
    subTitle: 'Position',
    age: 'Age:22',
  },
  {
    id: 2,
    source: require('@image/non.png'),
    title: 'T.Romero',
    subTitle: 'Position',
    age: 'Age:22',
  },
  {
    id: 3,
    source: require('@image/non.png'),
    title: 'T.Romero',
    subTitle: 'Position',
    age: 'Age:22',
  },
  {
    id: 4,
    source: require('@image/non.png'),
    title: 'T.Romero',
    subTitle: 'Position',
    age: 'Age:22',
  },
  {
    id: 5,
    source: require('@image/non.png'),
    title: 'T.Romero',
    subTitle: 'Position',
    age: 'Age:22',
  },
];

const Player = () => {
  return (
    <View style={{flex: 1, marginTop: vs(15)}}>
      <TouchableOpacity>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={style.root}>
              <View style={style.headerContiner}>
                <Image source={item.source} style={style.imageStyle} />
                <View style={style.textContainer}>
                  <Text style={style.textStyle}>{item.title}</Text>
                  <Text style={{color: Light.subtext, fontSize: ms(12)}}>
                    {item.subTitle}
                  </Text>
                </View>
              </View>
              <View style={style.midContainer}>
                <Text style={{color: Light.icon, fontSize: ms(14)}}>
                  {item.age}
                </Text>
                <Icon name={'check'} size={26} color={'green'} />
              </View>
            </View>
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: ms(26),
    backgroundColor: Light.card,
    borderRadius: ms(8),
    padding: 12,
    marginTop: vs(12),
  },
  headerContiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: ms(40),
    height: ms(40),
    marginRight: ms(14),
  },
  midContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 25,
  },
  textContainer: {
    justifyContent: 'center',
    rowGap: 5,
  },
  textStyle: {
    fontSize: ms(14),
    fontFamily: Font.InterSemiBold,
  },
});

export default Player;
