import {View, StyleSheet, Pressable, TextInput, Text} from 'react-native';
import React, {useState} from 'react';
import {ms} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {
  Leaguesearchcard,
  TeamCard,
  LeagueCard,
} from '@components/card/leaguesearchcard';
import LiveCard from '@components/livecard';
import {ScrollView} from 'react-native-gesture-handler';
import {Light} from '../../theme';

const Matchfixsearch = props => {
  const [card, setCard] = useState('all');
  const goBack = () => props.navigation.goBack();
  return (
    <View style={style.root}>
      <View style={{flexDirection: 'row'}}>
        <View style={style.iconContainer}>
          <Pressable onPress={goBack}>
            <Icon name={'arrow-back-outline'} size={25} color={Light.text} />
          </Pressable>
        </View>
        <View style={style.inputContainer}>
          <Feather name={'search'} size={25} color={Light.text} />
          <TextInput
            placeholder="Manchester"
            style={style.input}
            placeholderTextColor={Light.text}
          />
          <Entypo
            name={'circle-with-cross'}
            size={22}
            color={Light.text}
            style={{padding: 1}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: ms(40),
          marginTop: 10,
          columnGap: 10,
        }}>
        <Text
          style={[
            style.textStyle,
            {backgroundColor: card == 'Fixture' ? Light.primary : Light.card},
            {color: card == 'Fixture' ? Light.background : Light.subtext},
          ]}
          onPress={() => {
            card !== 'Fixture' ? setCard('Fixture') : setCard('all');
          }}>
          Fixture
        </Text>
        <Text
          style={[
            style.textStyle,
            {backgroundColor: card == 'Team' ? Light.primary : Light.card},
            {color: card == 'Team' ? Light.background : Light.subtext},
          ]}
          onPress={() => {
            card !== 'Team' ? setCard('Team') : setCard('all');
          }}>
          Team
        </Text>
        <Text
          style={[
            style.textStyle,
            {backgroundColor: card == 'Live' ? Light.primary : Light.card},
            {color: card == 'Live' ? Light.background : Light.subtext},
          ]}
          onPress={() => {
            card !== 'Live' ? setCard('Live') : setCard('all');
          }}>
          Live
        </Text>
        <Text
          style={[
            style.textStyle,
            {backgroundColor: card == 'League' ? Light.primary : Light.card},
            {color: card == 'League' ? Light.background : Light.subtext},
          ]}
          onPress={() => {
            card !== 'League' ? setCard('League') : setCard('all');
          }}>
          League
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {card === 'all' ? (
          <>
            <Leaguesearchcard
              source={require('../../assets/image/fk-logo.png')}
              subtitle={'Ural U20'}
              midtitle={'First Half'}
              subsource={require('../../assets/image/gol.png')}
              sublasttitle={'Zenith U19'}
            />
            <TeamCard
              source={require('@image/ManchF.png')}
              title={'Manchester United'}
            />
            <LiveCard
              headerSource={require('@image/ufea.png')}
              headerText={'UEFA Champion League'}
              headerSubText={'Europe'}
              leftText={'24'}
              midUpperSource={require('@image/fk-logo.png')}
              midTitelText={'Ural U20'}
              midLowwerSource={require('@image/clipart.png')}
              midLowertext={'Zenith U19'}
            />
            <LeagueCard />
          </>
        ) : card === 'Fixture' ? (
          <Leaguesearchcard
            source={require('../../assets/image/fk-logo.png')}
            subtitle={'Ural U20'}
            midtitle={'First Half'}
            subsource={require('../../assets/image/gol.png')}
            sublasttitle={'Zenith U19'}
          />
        ) : card === 'Team' ? (
          <TeamCard
            source={require('@image/ManchF.png')}
            title={'Manchester United'}
          />
        ) : card === 'Live' ? (
          <LiveCard
            headerSource={require('@image/ufea.png')}
            headerText={'UEFA Champion League'}
            headerSubText={'Europe'}
            leftText={'24'}
            midUpperSource={require('@image/fk-logo.png')}
            midTitelText={'Ural U20'}
            midLowwerSource={require('@image/clipart.png')}
            midLowertext={'Zenith U19'}
          />
        ) : (
          <LeagueCard />
        )}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: ms(50),
    marginLeft: ms(20),
    marginRight: ms(20),
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: ms(15),
  },
  inputContainer: {
    width: '87%',
    height: 45,
    backgroundColor: '#EBEBEB',
    borderRadius: 8,
    flexDirection: 'row',
    padding: ms(11),
  },
  input: {
    marginLeft: ms(10),
    width: '80%',
  },
  textStyle: {
    padding: 5,
  },
});

export default Matchfixsearch;
