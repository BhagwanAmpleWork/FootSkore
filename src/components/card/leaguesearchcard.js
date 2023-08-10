import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import AddIcon from 'react-native-vector-icons/Fontisto';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Light} from '@theme';

const Leaguesearchcard = ({
  source,
  subtitle,
  midtitle,
  subsource,
  sublasttitle,
}) => {
  return (
    <View style={style.leagueCardContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: ms(5),
          marginLeft: ms(10),
          marginRight: ms(10),
        }}>
        <Text style={{color: Light.icon}}>2023-08-01</Text>
        <Text style={{color: Light.icon}}>01:22</Text>
      </View>
      <View style={style.cardMidContainer}>
        <View style={style.cardMidSubContainer}>
          <AddIcon name={'home'} size={18} color={Light.icon} />
          <Image source={source} style={{width: s(40), height: s(40)}} />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: ms(14), color: Light.icon}}>
              {subtitle}
            </Text>
          </View>
        </View>
        <View style={style.cardMidSubContainer}>
          <Text
            style={{
              fontSize: ms(13),
              color: Light.primary,
              fontWeight: '700',
            }}>
            {midtitle}
          </Text>
          <Text
            style={{
              fontSize: s(32),
              fontWeight: '700',
              letterSpacing: 5,
            }}>
            3:2
          </Text>
          <View style={style.cardRadioContainer}>
            <AddIcon
              name={'radio-btn-active'}
              size={13}
              color={Light.primary}
            />
            <Text style={{color: Light.primary, marginLeft: ms(2)}}>68'</Text>
          </View>
        </View>
        <View style={style.cardMidSubContainer}>
          <MaterialIcon
            name={'airplanemode-active'}
            size={25}
            color={Light.icon}
          />
          <Image source={subsource} style={{width: s(39), height: s(36)}} />
          <Text style={{fontSize: ms(14), color: Light.icon}}>
            {sublasttitle}
          </Text>
        </View>
      </View>
    </View>
  );
};

const TeamCard = ({source, title}) => {
  return (
    <View
      style={{
        marginTop: '5%',
        backgroundColor: Light.card,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          rowGap: 8,
        }}>
        <Image source={source} style={{width: ms(50), height: ms(50)}} />
        <Text style={{fontSize: ms(18), fontWeight: '600'}}>{title}</Text>
      </View>
    </View>
  );
};

const LeagueCard = () => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: Light.card,
        height: '15%',
        marginTop: '5%',
        padding: 18,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      }}>
      <Image
        source={require('@image/ManchF.png')}
        style={{width: ms(40), height: ms(40)}}
      />
      <View
        style={{
          marginLeft: ms(20),
          justifyContent: 'center',
          rowGap: 5,
        }}>
        <Text>Manchester United</Text>
        <Text style={{color: '#808797'}}>England</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  leagueCardContainer: {
    marginTop: vs(18),
    width: '100%',
    backgroundColor: Light.card,
    borderRadius: 10,
    padding: 10,
  },
  cardMidContainer: {
    marginRight: ms(20),
    marginLeft: ms(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardMidSubContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 4,
  },
  cardRadioContainer: {
    height: s(25),
    width: s(50),
    backgroundColor: '#F5DDE6',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Leaguesearchcard, TeamCard, LeagueCard};
