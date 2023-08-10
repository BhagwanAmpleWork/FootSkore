import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Font, Light} from '@theme';
import {ms, vs} from 'react-native-size-matters/extend';

const Info = () => {
  return (
    <View style={style.root}>
      <View style={style.cardContiner}>
        <View style={{rowGap: 8, marginLeft: vs(4)}}>
          <Text style={style.textStyle}>Country:</Text>
          <Text style={style.textStyle}>Venue:</Text>
          <Text style={style.textStyle}>Address:</Text>
          <Text style={style.textStyle}>Capacity:</Text>
          <Text style={style.textStyle}>Founded:</Text>
        </View>
        <View style={{rowGap: 8, marginLeft: vs(24)}}>
          <Text style={style.textStyle}>USA</Text>
          <Text style={style.textStyle}>Soldier Field</Text>
          <Text style={style.textStyle}>1410 South Museum Campus Drive</Text>
          <Text style={style.textStyle}>62493</Text>
          <Text style={style.textStyle}>N / A</Text>
        </View>
      </View>
      <View style={style.footerContiner}>
        <Text style={style.headerTextStyle}>Coach</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: '2%',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{rowGap: 8}}>
              <Text style={style.textStyle}>Country:</Text>
              <Text style={style.textStyle}>Name:</Text>
              <Text style={style.textStyle}>Age:</Text>
              <Text style={style.textStyle}>Nationality:</Text>
            </View>
            <View style={{marginLeft: '13%', rowGap: 8}}>
              <Text style={style.textStyle}>USA</Text>
              <Text style={style.textStyle}>F.Klopas</Text>
              <Text style={style.textStyle}>56</Text>
              <Text style={style.textStyle}>USA</Text>
            </View>
          </View>
          <Image
            source={require('@image/coach.png')}
            style={{width: ms(60), height: ms(60)}}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    marginLeft: ms(22),
    marginRight: ms(22),
  },
  cardContiner: {
    flexDirection: 'row',
    backgroundColor: Light.card,
    borderRadius: 10,
    padding: ms(14),
    marginTop: vs(20),
  },
  textStyle: {
    fontSize: ms(12),
  },
  headerTextStyle: {
    fontFamily: Font.InterBold,
    fontWeight: '600',
    marginLeft: ms(4),
    marginBottom: ms(4),
  },
  footerContiner: {
    backgroundColor: Light.card,
    borderRadius: 10,
    padding: 14,
    marginTop: '5%',
  },
});

export default Info;
