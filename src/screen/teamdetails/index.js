import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ms} from 'react-native-size-matters';
import {TeamCard} from '@components/card/leaguesearchcard';
import {Fixture, Player, Standing} from '@components/teamdeatils';
import Info from '@components/teamdeatils/info';

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
          <Ionicons name={'arrow-back'} size={25} color={'#fff'} />
          <Text style={style.headerTextStyle}>TEAM DETAILS</Text>
          <Ionicons name="star-outline" size={22} color={'#fff'} />
        </View>
        <View style={style.cardHeaderContainer}>
          <TeamCard source={require('@image/fk-logo.png')} title={'Ural U20'} />
        </View>
      </View>
      <View style={style.midContainer}>
        <View
          style={[
            style.headerContainer,
            {backgroundColor: click == 'Info' ? '#E92742' : '#EBEBEB'},
          ]}>
          <Text
            style={[
              style.textStyle,
              {color: click == 'Info' ? '#fff' : '#808797'},
            ]}
            onPress={infoOnPress}>
            Info
          </Text>
        </View>
        <View
          style={[
            style.headerContainer,
            {backgroundColor: click == 'Fixture' ? '#E92742' : '#EBEBEB'},
          ]}>
          <Text
            style={[
              style.textStyle,
              {color: click == 'Fixture' ? '#fff' : '#808797'},
            ]}
            onPress={fixtureOnPress}>
            Fixture
          </Text>
        </View>
        <View
          style={[
            style.headerContainer,
            {backgroundColor: click == 'Player' ? '#E92742' : '#EBEBEB'},
          ]}>
          <Text
            style={[
              style.textStyle,
              {color: click == 'Player' ? '#fff' : '#808797'},
            ]}
            onPress={playerOnPress}>
            Player
          </Text>
        </View>
        <View
          style={[
            style.headerContainer,
            {backgroundColor: click == 'Standing' ? '#E92742' : '#EBEBEB'},
          ]}>
          <Text
            style={[
              style.textStyle,
              {color: click == 'Standing' ? '#fff' : '#808797'},
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
    height: '22%',
    backgroundColor: '#E92742',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  rootSubContainer: {
    flexDirection: 'row',
    marginTop: '10%',
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
    marginTop: '4%',
  },
  midContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '25%',
    marginLeft: ms(22),
    marginRight: ms(22),
  },
  headerTextStyle: {
    color: '#fff',
    fontSize: ms(20),
    fontWeight: '700',
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
