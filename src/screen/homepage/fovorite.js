import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HomeNavigation from '@components/header';
import Card from '@components/card';
import FavCard from '@components/favorite';
import LiveCard from '@components/livecard';

const Fovorite = () => {
  return (
    <View style={style.root}>
      <HomeNavigation title={'FAVORITE'} />
      <View style={{marginTop: '6%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card
            source={require('@image/ufea.png')}
            headerText={'UEFA Champion League'}
            sourceMid={require('@image/fk-logo.png')}
            midText={'Ural U20'}
            headerMidText={'First Half'}
            sourceMidNext={require('@image/gol.png')}
            midSubText={'Zenith U19'}
          />
          <FavCard source={require('@image/fk-logo.png')} title={'Ural U20'} />
          <FavCard source={require('@image/redImg.png')} title={'Rewa'} />

          <LiveCard
            headerSource={require('@image/Fij.png')}
            headerText={'National Football League'}
            headerSubText={'USA'}
            leftText={'68'}
            midUpperSource={require('@image/fk-logo.png')}
            midTitelText={'Suva'}
            midLowwerSource={require('@image/redImg.png')}
            midLowertext={'Rewa'}
          />

          <FavCard source={require('@image/poland.png')} title={'Rewa'} />
          <FavCard
            source={require('@image/Fij.png')}
            title={'National Football League'}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: '9%',
  },
});

export default Fovorite;
