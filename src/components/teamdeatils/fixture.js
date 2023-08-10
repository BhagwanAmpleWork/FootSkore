import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Leaguesearchcard} from '../card/leaguesearchcard';
import {ms} from 'react-native-size-matters';

const Fixture = () => {
  return (
    <View style={style.rootContainer}>
      <Leaguesearchcard
        source={require('@image/fk-logo.png')}
        subtitle={'Ural U20'}
        midtitle={'First Half'}
        subsource={require('@assets/image/gol.png')}
        sublasttitle={'Zenith U19'}
      />
      <Leaguesearchcard
        source={require('@image/fk-logo.png')}
        subtitle={'Ural U20'}
        midtitle={'First Half'}
        subsource={require('@assets/image/gol.png')}
        sublasttitle={'Zenith U19'}
      />
    </View>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginLeft: ms(26),
    marginRight: ms(26),
  },
});

export default Fixture;
