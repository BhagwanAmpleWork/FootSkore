import React from 'react';
import {StyleSheet} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';
import {Font, Light} from '@theme/index.js';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: vs(58),
    marginHorizontal: ms(25),
  },
  text: {
    fontSize: ms(37),
    color: Light.text,
    fontFamily: Font.TekoSemibold,
  },
  subText: {
    fontSize: ms(14),
    color: Light.subtext,
    fontFamily: Font.InterRegular,
  },

  midData: {
    marginTop: ms(35),
  },
  last: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '12%',
    marginLeft: '35%',
  },
  lastText: {
    color: Light.primary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontFamily: Font.InterRegular,
  },
  verInput: {
    width: 47,
    height: 62,
    borderRadius: 3,
    borderWidth: 1,
    fontSize: 35,
    textAlign: 'center',
    color: '#808797',
  },
  buttonSp: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 20,
    margin: 35,
    marginLeft: 50,
  },
  inputContiner: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: ms(13),
    marginTop: ms(29),
    marginBottom: ms(10),
  },
  textInputview: {
    borderWidth: ms(1),
    borderColor: Light.other,
    borderRadius: ms(4),
    width: s(40),
    height: vs(52),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: ms(30),
  },
  emailText: {
    textAlign: 'center',
    marginTop: ms(15),
    fontSize: ms(13),
    color: Light.subtext,
  },
  combine: {
    fontSize: ms(13),
    color: Light.primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  stylePass: {
    textAlign: 'right',
    marginTop: ms(14),
    color: Light.text,
    fontFamily: Font.InterSemiBold,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: ms(27),
  },
  inputStyleContainer: {
    borderBottomWidth: ms(1),
    borderBottomColor: Light.other,
    paddingTop: ms(9),
  },
  verifyStyle: {
    color: Light.other,
    textDecorationLine: 'underline',
  },
});

export default Style;
