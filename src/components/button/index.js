import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Font, Light} from '@theme/index.js';
import {ms, s} from 'react-native-size-matters';

const SimpleButton = ({onPress, title, color}) => {
  return (
    <View>
      <Pressable
        style={[style.button, {backgroundColor: color}]}
        onPress={onPress}>
        <Text style={style.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

const HollowButton = ({onPress}) => {
  return (
    <View style={style.container}>
      <Pressable
        style={[
          style.button,
          {
            backgroundColor: Light.background,
            borderWidth: 2,
            borderColor: Light.primary,
          },
        ]}
        onPress={onPress}>
        <Text style={style.subText}>Sign Up for FootSkore</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    marginTop: s(17),
    // backgroundColor: '#DC143C',
    width: '100%',
    height: s(44),
    borderRadius: ms(30),
  },
  text: {
    textAlign: 'center',
    fontSize: ms(13),
    color: 'white',
    fontWeight: 'bold',
    paddingTop: ms(15),
  },
  subText: {
    textAlign: 'center',
    fontSize: ms(13),
    paddingTop: ms(13),
    fontFamily: Font.InterSemiBold,
  },
  midData: {
    marginTop: ms(35),
  },
});

export {SimpleButton, HollowButton};
