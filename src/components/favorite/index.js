import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';

const FavCard = ({source, title}) => {
  return (
    <View style={style.rootContainer}>
      <View style={style.midConatiner}>
        <Image source={source} style={style.imageStyle} />
        <Text style={{color: '#1F2022'}}>{title}</Text>
      </View>
      <Icon name={'heart'} size={17} color={'#E92742'} />
    </View>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    width: '90%',
    backgroundColor: '#EBEBEB',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: ms(20),
    marginRight: ms(20),
    marginBottom: 10,
    marginTop: 10,
  },
  midConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10,
  },
  imageStyle: {
    width: ms(40),
    height: ms(40),
  },
});
export default FavCard;
