import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ms, vs} from 'react-native-size-matters';
import {Light} from '@theme';

const MatchInfomation = ({title}) => {
  return (
    <View style={style.rootContainer}>
      <Text style={style.textStyle}>{title}</Text>
      <View style={style.rootSubContainer}>
        <Text style={style.subTextStyle}>Played</Text>
        <Text style={style.subTextStyle}>Win</Text>
        <Text style={style.subTextStyle}>Draw</Text>
        <Text style={style.subTextStyle}>Loss</Text>
      </View>
      <View style={[style.rootSubContainer, {paddingBottom: 10}]}>
        <Text style={style.subTextStyle}>31</Text>
        <Text style={style.subTextStyle}>19</Text>
        <Text style={style.subTextStyle}>4</Text>
        <Text style={style.subTextStyle}>8</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    marginTop: vs(8),
    marginHorizontal: ms(20),
    borderBottomWidth: 1,
    borderBottomColor: Light.subtext,
  },
  rootSubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: vs(10),
    columnGap: ms(22),
  },
  textStyle: {
    fontSize: ms(14),
    fontWeight: '600',
  },
  subTextStyle: {
    fontSize: ms(12),
    color: Light.subtext,
  },
});

export default MatchInfomation;
