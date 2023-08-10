import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {ms, vs} from 'react-native-size-matters';
import {Light} from '@theme';
import MatchInfomation from '../leaguedetails/matchinfo';

const Standing = () => {
  return (
    <View style={style.rootContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.rootSubContainer}>
          <Image source={require('@image/fiji.png')} style={style.imageStyle} />
          <Text style={style.headerTitle}>National Football League</Text>
        </View>
        <View style={style.midContainer}>
          <View style={{rowGap: 12}}>
            <Text style={style.textStyle}>Ranking:</Text>
            <Text style={style.textStyle}>Country:</Text>
            <Text style={style.textStyle}>Point:</Text>
            <Text style={style.textStyle}>Group:</Text>
            <Text style={style.textStyle}>Descriptions:</Text>
          </View>
          <View style={{rowGap: 12}}>
            <Text style={style.sameTextStyle}>1</Text>
            <Text style={style.sameTextStyle}>USA</Text>
            <Text style={style.sameTextStyle}>61</Text>
            <Text style={style.sameTextStyle}>Western Conference</Text>
            <Text style={[style.sameTextStyle, {marginBottom: ms(12)}]}>
              Final Series
            </Text>
          </View>
        </View>
        <View>
          <MatchInfomation title={'Total Match'} />
          <MatchInfomation title={'Home Ground'} />
          <MatchInfomation title={'Away Ground'} />
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Light.card,
    marginHorizontal: ms(8),
    marginTop: vs(15),
    borderRadius: ms(8),
  },
  rootSubContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: ms(12),
    rowGap: 12,
  },
  imageStyle: {
    width: ms(50),
    height: ms(70),
  },
  headerTitle: {
    fontSize: ms(16),
    fontVariant: '600',
  },
  midContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: ms(20),
    marginTop: vs(12),
    borderBottomWidth: 1,
    borderBottomColor: Light.subtext,
  },
  textStyle: {
    fontSize: ms(12),
    fontWeight: '500',
    color: Light.icon,
  },
  sameTextStyle: {
    fontSize: ms(12),
    color: Light.icon,
    fontWeight: '500',
    textAlign: 'right',
  },
});

export default Standing;
