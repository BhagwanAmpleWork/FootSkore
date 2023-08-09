import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ms, vs} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Ionicons';
import {Font, Light} from '@theme';

const AppHeader = ({title, onPress}) => {
  return (
    <View style={style.root}>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Icon name={'menu'} size={22} color={Light.headerIcon} />
        </TouchableOpacity>
        <Text style={style.rootText}>{title}</Text>
      </View>
      <View style={style.midIcon}>
        <TouchableOpacity>
          <Image
            source={require('@image/Notification.png')}
            style={{width: ms(23), height: ms(23)}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 18}} onPress={onPress}>
          <Icons name={'search-outline'} size={24} color={Light.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginTop: vs(20),
    textAlign: 'center',
    marginRight: ms(20),
    marginLeft: ms(20),
    alignItems: 'center',
  },
  rootText: {
    color: Light.text,
    fontSize: ms(24),
    marginLeft: ms(18),
    fontFamily: Font.TekoSemibold,
  },
  midIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default AppHeader;
