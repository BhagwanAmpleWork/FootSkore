import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Home from '@components/leaguedetails/noinformation';
import Player from './player';
import Topscoere from './topscoere';
import Injury from './injury';
import Standing from './standing';
import {Font, Light} from '@theme';

const LeagueDetails = props => {
  const goBack = () => props.navigation.goBack();

  const [top, setTop] = useState('all');

  const standOnPress = () => {
    top !== 'Standing' ? setTop('Standing') : setTop('all');
  };

  const playerOnPress = () => {
    top !== 'Player' ? setTop('Player') : setTop('all');
  };

  const topOnPress = () => {
    top !== 'Top Scorer' ? setTop('Top Scorer') : setTop('all');
  };

  const injuryOnPress = () => {
    top !== 'Injury' ? setTop('Injury') : setTop('all');
  };

  return (
    <View style={style.rootCotainer}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          alignItems: 'center',
        }}>
        <Pressable onPress={goBack}>
          <Icon name={'arrow-back-outline'} size={25} color={Light.text} />
        </Pressable>
        <Text style={style.rootTextStyle}>LEAGUES DETAILS</Text>
      </View>
      <View style={{flexDirection: 'row', columnGap: 10, marginTop: '7%'}}>
        <View style={style.headerTopContainer}>
          <View style={style.headerNextContainer}>
            <Image
              source={require('@image/ufea.png')}
              style={{width: ms(28), height: ms(29)}}
            />
            <View style={{rowGap: 5, marginLeft: 20}}>
              <Text style={{fontWeight: '600', color: Light.text}}>
                UEFA Champio...
              </Text>
              <Text style={{color: Light.subtext}}>USA</Text>
            </View>
          </View>
        </View>
        <View style={style.seasonContainer}>
          <View style={{rowGap: 5}}>
            <Text style={{color: Light.subtext}}>Season</Text>
            <Text>2022</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Foundation name={'heart'} size={10} color={Light.other} />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: '5%',
        }}>
        <View
          style={[
            style.headerContainer,
            {backgroundColor: top == 'Standing' ? Light.primary : Light.card},
          ]}>
          <Text
            style={[
              style.textStyle,
              {color: top == 'Standing' ? Light.background : Light.subtext},
            ]}
            onPress={standOnPress}>
            Standing
          </Text>
        </View>
        <View
          style={[
            style.headerContainer,
            {backgroundColor: top == 'Player' ? Light.primary : Light.card},
          ]}>
          <Text
            style={[
              style.textStyle,
              {color: top == 'Player' ? Light.background : Light.subtext},
            ]}
            onPress={playerOnPress}>
            Player
          </Text>
        </View>
        <View
          style={[
            style.headerContainer,
            {backgroundColor: top == 'Top Scorer' ? Light.primary : Light.card},
          ]}>
          <Text
            style={[
              style.textStyle,
              {color: top == 'Top Scorer' ? Light.background : Light.subtext},
            ]}
            onPress={topOnPress}>
            Top Scorer
          </Text>
        </View>
        <View
          style={[
            style.headerContainer,
            {backgroundColor: top == 'Injury' ? Light.primary : Light.card},
          ]}>
          <Text
            style={[
              style.textStyle,
              {color: top == 'Injury' ? Light.background : Light.subtext},
            ]}
            onPress={injuryOnPress}>
            Injury
          </Text>
        </View>
      </View>

      <>
        {top === 'all' ? (
          <Home />
        ) : top === 'Standing' ? (
          <Standing />
        ) : top === 'Player' ? (
          <Player />
        ) : top === 'Top Scorer' ? (
          <Topscoere />
        ) : (
          <Injury />
        )}
      </>
    </View>
  );
};

const style = StyleSheet.create({
  rootCotainer: {
    flex: 1,
    marginTop: '9%',
    marginLeft: ms(20),
    marginRight: ms(20),
  },
  midCondtianer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '5%',
  },
  headerContainer: {
    borderRadius: 25,
    padding: 9,
  },
  textStyle: {
    fontSize: ms(15),
    color: Light.text,
  },
  rootTextStyle: {
    fontSize: ms(25),
    marginLeft: '22%',
    fontFamily: Font.TekoSemibold,
    color: Light.text,
    textAlign: 'center',
  },
  headerTopContainer: {
    width: '62%',
    backgroundColor: Light.card,
    borderRadius: 10,
  },
  headerNextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    justifyContent: 'space-around',
  },
  seasonContainer: {
    width: '35%',
    padding: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Light.other,
  },
});

export default LeagueDetails;
