import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {ms} from 'react-native-size-matters';

const Leaguescard = ({source, title, subTitle}) => {
  return (
    <View style={style.root}>
      <View style={style.cardContainer}>
        <Image source={source} style={style.cardImageStyle} />
        <View>
          <Text style={{fontWeight: '600', color: '#1F2022'}}>{title}</Text>
          <Text style={{marginTop: 4, color: '#808797'}}>{subTitle}</Text>
        </View>
      </View>
      <View>
        <Icon
          name={'heart'}
          size={17}
          color={'#E92742'}
          style={{marginRight: 14}}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    height: 65,
    backgroundColor: '#EBEBEB',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImageStyle: {
    width: ms(28),
    height: ms(29),
    marginRight: 20,
    marginLeft: 14,
  },
});

export default Leaguescard;
