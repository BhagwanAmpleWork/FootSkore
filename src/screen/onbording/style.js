import React from 'react';
import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters/extend';
import {Font, Light} from '@theme/index.js';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    flex: 1,
    width: '100%',
  },
  centerContainer: {
    flex: 1,
    marginTop: vs(10),
  },
  centerText: {
    textAlign: 'center',
    fontSize: ms(35),
    color: Light.text,
    fontFamily: Font.TekoSemibold,
  },
  centerSubText: {
    textAlign: 'center',
    fontSize: ms(14),
    marginLeft: ms(15),
    marginRight: ms(15),
    lineHeight: ms(24),
    color: Light.subtext,
    fontWeight: '400',
    letterSpacing: ms(0.1),
  },
  buttonContainer: {
    flex: 1,
    marginRight: ms(32),
    marginLeft: ms(32),
  },
  imageFlatlist: {
    flex: 1.5,
    width: s(375),
    height: s(520),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default Styles;
