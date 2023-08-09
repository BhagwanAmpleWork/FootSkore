import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ms, s} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';
import {Light} from '../../theme';

const LiveCard = ({
  headerSource,
  headerText,
  headerSubText,
  leftText,
  midUpperSource,
  midTitelText,
  midLowwerSource,
  midLowertext,
}) => {
  return (
    <View style={style.cardContainer}>
      <View style={style.cardStartContainer}>
        <View style={style.cardHearderContainer}>
          <Image
            source={headerSource}
            style={{width: ms(28), height: ms(29)}}
          />
          <Text style={style.cardHeaderText}>{headerText}</Text>
        </View>
        <Text style={style.cardHeaderSubText}>{headerSubText}</Text>
      </View>
      <View style={style.footerContainer}>
        <Text style={{color: Light.primary, fontWeight: '700'}}>
          {leftText}
        </Text>
        <View>
          <View style={style.cardFooterMidContainer}>
            <Image
              source={midUpperSource}
              style={{width: s(40), height: s(41), marginBottom: 7}}
            />
            <Text style={style.cardFooterMidText}>{midTitelText}</Text>
            <Text style={{marginLeft: ms(75), color: Light.textcolor}}>3</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 12,
            }}>
            <Image
              source={midLowwerSource}
              style={{width: s(40), height: s(38)}}
            />
            <Text style={style.cardFooterMidText}>{midLowertext}</Text>
            <Text style={{marginLeft: ms(65), color: Light.textcolor}}>2</Text>
          </View>
        </View>

        <Icon name={'heart'} size={16} color={Light.primary} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    // marginRight: ms(20),
    // marginLeft: ms(20),
    backgroundColor: Light.card,
    borderRadius: ms(11),
    position: 'relative',
    marginTop: ms(15),
  },
  cardStartContainer: {
    flexDirection: 'row',
    marginHorizontal: ms(14),
    marginVertical: ms(12),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Light.subtext,
  },
  cardHearderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardHeaderText: {
    fontSize: ms(12),
    marginLeft: ms(11),
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cardHeaderSubText: {
    fontSize: ms(12),
    marginBottom: 9,
    color: Light.subtext,
  },
  cardFooterMidContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Light.icon,
    marginBottom: 6,
  },
  cardFooterMidText: {
    fontSize: ms(15),
    color: Light.icon,
    marginLeft: ms(10),
  },
});

export default LiveCard;
