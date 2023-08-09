import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import HomeNavigation from '@components/header';
import {ms} from 'react-native-size-matters';
import AntiDesign from 'react-native-vector-icons/AntDesign';
import VenueCard from '@components/venue';
import {ScrollView} from 'react-native-gesture-handler';
import {Light} from '../../theme';

const Venue = () => {
  return (
    <View style={style.root}>
      <HomeNavigation title={'Venue'} />
      <View style={style.dropdownContainer}>
        <Text style={{color: Light.text}}>England</Text>
        <AntiDesign name={'caretdown'} size={12} color={Light.subtext} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VenueCard
          source={require('@image/gound.png')}
          imagefootertitle={'Wembley Stadium'}
          footerTitle={'Stadium Way, Wembley,Brent'}
          footermidtitle={'London'}
          footerdigittitle={90000}
        />
        <VenueCard
          source={require('@image/gound.png')}
          imagefootertitle={'Wembley Stadium'}
          footerTitle={'Stadium Way, Wembley,Brent'}
          footermidtitle={'London'}
          footerdigittitle={90000}
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: '9%',
  },
  dropdownContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    marginLeft: ms(20),
    marginRight: ms(20),
    padding: ms(14),
    justifyContent: 'space-between',
    marginTop: '6%',
    borderRadius: 5,
    borderColor: Light.other,
  },
});

export default Venue;
