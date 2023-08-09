import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={style.rootContainer}>
      <Image
        source={require('@image/icon.png')}
        style={{width: 50, height: 50}}
      />
      <Text style={{color: '#808797'}}>No information available</Text>
    </View>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    flex: 0.9,
    backgroundColor: '#F2F2F2',
    marginTop: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 25,
  },
});

export default Home;
