import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {ms, s} from 'react-native-size-matters/extend';
import Icon from 'react-native-vector-icons/AntDesign';
import AddIcon from 'react-native-vector-icons/Fontisto';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Light, Font} from '@theme/index.js';

const Card = ({
  source,
  headerText,
  midText,
  midSubText,
  sourceMid,
  sourceMidNext,
  headerMidText,
}) => {
  return (
    <View style={style.cardContainer}>
      <View style={style.cardStartContainer}>
        <View style={style.cardHearderContainer}>
          <Image source={source} style={{width: ms(27), height: ms(26)}} />
          <Text style={style.cardHeaderText}>{headerText}</Text>
        </View>
        <Icon name={'heart'} size={17} color={Light.primary} />
      </View>
      <View style={style.cardMidContainer}>
        <View style={style.cardMidSubContainer}>
          <AddIcon name={'home'} size={17} color={Light.icon} />
          <Image
            source={sourceMid}
            style={{
              width: s(40),
              height: s(40),
              marginTop: ms(10),
              marginBottom: ms(10),
            }}
          />
          <Text
            style={{
              fontSize: ms(14),
              color: Light.icon,
              fontFamily: Font.InterRegular,
            }}>
            {midText}
          </Text>
        </View>
        <View style={style.cardMidSubContainer}>
          <Text
            style={{
              fontSize: ms(14),
              color: Light.primary,
              fontWeight: '700',
            }}>
            {headerMidText}
          </Text>
          <Text
            style={{
              fontSize: ms(36),
              fontWeight: '700',
              letterSpacing: 4,
              marginTop: ms(6),
              marginBottom: ms(8),
            }}>
            3:2
          </Text>
          <View style={style.cardRadioContainer}>
            <AddIcon
              name={'radio-btn-active'}
              size={10}
              color={Light.primary}
            />
            <Text style={{color: Light.primary, marginLeft: ms(2)}}>68'</Text>
          </View>
        </View>
        <View style={style.cardMidSubContainer}>
          <MaterialIcon
            name={'airplanemode-active'}
            size={24}
            color={Light.icon}
          />
          <Image
            source={sourceMidNext}
            style={{
              width: ms(40),
              height: ms(40),
              marginTop: ms(8),
              marginBottom: ms(8),
            }}
          />
          <Text style={{fontSize: ms(14), color: Light.icon}}>
            {midSubText}
          </Text>
        </View>
      </View>
      <View style={style.footerCardContainer}>
        <View>
          <Text style={style.footerCardTextStyle}>Date & Time:</Text>
          <Text style={style.footerCardTextStyle}>Venue:</Text>
          <Text style={style.footerCardTextStyle}>City:</Text>
          <Text style={style.footerCardTextStyle}>Country:</Text>
          <Text style={style.footerCardTextStyle}>Round:</Text>
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text style={style.footerCardTextStyle}>2023-09-28 12:30</Text>
          <Text style={style.footerCardTextStyle}>Sport Baza Bazhoviya</Text>
          <Text style={style.footerCardTextStyle}>Sysert</Text>
          <Text style={style.footerCardTextStyle}>Russia</Text>
          <Text style={style.footerCardTextStyle}>Regular Session-10</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginRight: ms(20),
    marginLeft: ms(20),
    backgroundColor: Light.card,
    borderRadius: ms(11),
    position: 'relative',
    marginBottom: 15,
  },
  cardStartContainer: {
    flexDirection: 'row',
    marginHorizontal: ms(15),
    marginVertical: ms(13),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHearderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardHeaderText: {
    fontSize: ms(12),
    marginLeft: ms(11),
    fontWeight: '600',
  },
  cardMidContainer: {
    flex: 1,
    marginRight: ms(20),
    marginLeft: ms(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: '#989898',
    paddingBottom: 11,
  },
  cardMidSubContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardRadioContainer: {
    height: ms(25),
    width: ms(44),
    backgroundColor: '#F5DDE6',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerCardContainer: {
    marginRight: ms(20),
    marginLeft: ms(20),
    marginTop: ms(15),
    flexDirection: 'row',
    marginBottom: ms(10),
  },
  footerCardTextStyle: {
    marginBottom: 4,
    color: Light.icon,
    fontSize: ms(12),
  },
});

export default Card;
