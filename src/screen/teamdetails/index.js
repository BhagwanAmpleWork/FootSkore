import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ms, vs} from 'react-native-size-matters';
import {TeamCard} from '@components/card/leaguesearchcard';
import Standing from '@components/teamdeatils/standing';
import Info from '@components/teamdeatils/info';
import Fixture from '@components/teamdeatils/fixture';
import Player from '@components/teamdeatils/player';
import {Font, Light} from '@theme';

const TeamDetails = () => {
  const [click, setClick] = useState('all');

  const infoOnPress = () => {
    click !== 'Info' ? setClick('Info') : setClick('all');
  };
  const fixtureOnPress = () => {
    click !== 'Fixture' ? setClick('Fixture') : setClick('all');
  };
  const standingOnPress = () => {
    click !== 'Standing' ? setClick('Standing') : setClick('all');
  };
  const playerOnPress = () => {
    click !== 'Player' ? setClick('Player') : setClick('all');
  };

  return (
    <View style={{flex: 1}}>
      <View style={style.root}>
        <View style={style.rootSubContainer}>
          <Ionicons name={'arrow-back'} size={20} color={'#fff'} />
          <Text style={style.headerTextStyle}>TEAM DETAILS</Text>
          <Ionicons name="star-outline" size={18} color={'#fff'} />
        </View>
        <View style={style.cardHeaderContainer}>
          <TeamCard source={require('@image/fk-logo.png')} title={'Ural U20'} />
        </View>
      </View>
      <View style={style.midContainer}>
        <View
          style={[
            style.headerContainer,
            {backgroundColor: click == 'Info' ? Light.primary : Light.card},
          ]}>
          <Text
            style={[
              style.textStyle,
              {color: click == 'Info' ? Light.background : Light.subtext},
            ]}
            onPress={infoOnPress}>
            Info
          </Text>
        </View>
        <View
          style={[
            style.headerContainer,
            {backgroundColor: click == 'Fixture' ? Light.primary : Light.card},
          ]}>
          <Text
            style={[
              style.textStyle,
              {color: click == 'Fixture' ? Light.background : Light.subtext},
            ]}
            onPress={fixtureOnPress}>
            Fixture
          </Text>
        </View>
        <View
          style={[
            style.headerContainer,
            {backgroundColor: click == 'Player' ? Light.primary : Light.card},
          ]}>
          <Text
            style={[
              style.textStyle,
              {color: click == 'Player' ? Light.background : Light.subtext},
            ]}
            onPress={playerOnPress}>
            Player
          </Text>
        </View>
        <View
          style={[
            style.headerContainer,
            {backgroundColor: click == 'Standing' ? Light.primary : Light.card},
          ]}>
          <Text
            style={[
              style.textStyle,
              {color: click == 'Standing' ? Light.background : Light.subtext},
            ]}
            onPress={standingOnPress}>
            Standing
          </Text>
        </View>
      </View>
      <>
        {click == 'Info' ? (
          <Info />
        ) : click == 'Fixture' ? (
          <Fixture />
        ) : click == 'Player' ? (
          <Player />
        ) : (
          <Standing />
        )}
      </>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    width: '100%',
    height: ms(150),
    backgroundColor: Light.primary,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  rootSubContainer: {
    flexDirection: 'row',
    marginTop: vs(42),
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: ms(22),
    marginRight: ms(22),
  },
  cardHeaderContainer: {
    marginLeft: ms(26),
    marginRight: ms(26),
    zIndex: 1,
    marginTop: vs(5),
  },
  midContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: vs(70),
    marginLeft: ms(22),
    marginRight: ms(22),
  },
  headerTextStyle: {
    color: '#fff',
    fontSize: ms(24),
    fontWeight: '700',
    fontFamily: Font.TekoSemibold,
  },
  headerContainer: {
    borderRadius: 25,
    padding: 9,
  },
  textStyle: {
    fontSize: ms(15),
    color: '#808797',
  },
});

export default TeamDetails;
