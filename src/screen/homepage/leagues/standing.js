import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {ms} from 'react-native-size-matters';
import Total from './total';
import Home from '@components/leaguedetails/noinformation';
import {Light} from '@theme';

const Standing = () => {
  const [top, setTop] = useState('all');
  const onPressData = () => (top !== 'Total' ? setTop('Total') : setTop('all'));
  return (
    <View style={{flex: 1}}>
      <View style={style.headerContainer}>
        <View
          style={[
            style.footerContainer,
            {backgroundColor: top == 'Total' ? Light.primary : Light.card},
          ]}>
          <Text
            style={[
              style.textStyle,
              {color: top == 'Total' ? Light.background : Light.subtext},
            ]}
            onPress={onPressData}>
            Total
          </Text>
        </View>
        <View style={style.footerContainer}>
          <Text style={style.textStyle}>Home</Text>
        </View>
        <View style={style.footerContainer}>
          <Text style={style.textStyle}>Away</Text>
        </View>
      </View>
      {top === 'Total' ? <Total /> : top === 'Home' ? <Home /> : <Home />}
    </View>
  );
};

const style = StyleSheet.create({
  footerContainer: {
    borderRadius: 25,
    padding: 9,
  },
  textStyle: {
    fontSize: ms(15),
    color: Light.subtext,
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: '5%',
    columnGap: 15,
    marginLeft: 8,
  },
});

export default Standing;
