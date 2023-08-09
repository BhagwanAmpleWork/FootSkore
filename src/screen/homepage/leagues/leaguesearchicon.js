import React from 'react';
import {View, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {ms, s} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Leaguescard from '@components/card/leaguescard';
import {Light} from '../../../theme';

const LeagueSearch = props => {
  const goBack = () => props.navigation.goBack();

  const navigateTo = () => props.navigation.navigate('LeagueDetails');

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
            placeholder="Liga 3"
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
      <TouchableOpacity onPress={navigateTo}>
        <Leaguescard
          source={require('@image/liga.png')}
          title={'Liga 3'}
          subTitle={'Portugal'}
        />
      </TouchableOpacity>
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
    width: '85%',
    height: 45,
    backgroundColor: Light.card,
    borderRadius: 8,
    flexDirection: 'row',
    padding: ms(11),
  },
  input: {
    marginLeft: ms(10),
    width: '80%',
  },
});

export default LeagueSearch;
