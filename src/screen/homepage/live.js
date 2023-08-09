import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeNavigation from '@components/header';
import LiveCard from '@components/livecard';
import {ms} from 'react-native-size-matters';

const LiveTabScreen = () => {
  return (
    <View style={style.root}>
      <HomeNavigation title={'LIVE'} />
      <View style={{marginLeft: ms(20), marginRight: ms(20)}}>
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

export default LiveTabScreen;
