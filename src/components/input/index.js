import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Font, Light} from '@theme';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';

const InputField = ({label, password, ...props}) => {
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View>
      <Text style={style.text}>{label}</Text>
      <View style={style.inputContainer}>
        <TextInput
          secureTextEntry={hidePassword}
          {...props}
          style={{flex: 1}}
          autoCorrect={false}
        />
        {password && (
          <Icon
            name={!hidePassword ? 'eye-outline' : 'eye-off-outline'}
            onPress={() => setHidePassword(!hidePassword)}
            size={25}
          />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    color: Light.subtext,
    marginTop: ms(40),
    fontFamily: Font.InterRegular,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: ms(1),
    paddingTop: ms(10),
    borderBottomColor: Light.other,
  },
});

export default InputField;
