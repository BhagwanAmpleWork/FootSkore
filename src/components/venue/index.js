import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {Light} from '../../theme';

const VenueCard = ({
  source,
  imagefootertitle,
  footerTitle,
  footermidtitle,
  footerdigittitle,
}) => {
  return (
    <View style={style.rootContainer}>
      <Image source={source} style={style.imageStyle} resizeMode="cover" />
      <Text style={{textAlign: 'center', fontWeight: '600'}}>
        {imagefootertitle}
      </Text>
      <View style={style.footerConatiner}>
        <View style={{rowGap: 8}}>
          <Text style={style.textStyle}>Address:</Text>
          <Text style={style.textStyle}>City:</Text>
          <Text style={style.textStyle}>Country:</Text>
          <Text style={style.textStyle}>Capacity</Text>
          <Text style={style.textStyle}>Surface</Text>
        </View>
        <View style={{rowGap: 8, marginBottom: 10}}>
          <Text style={style.textStyle}>{footerTitle}</Text>
          <Text style={style.textStyle}>{footermidtitle}</Text>
          <Text style={style.textStyle}>England</Text>
          <Text style={style.textStyle}>{footerdigittitle}</Text>
          <Text style={style.textStyle}>Grass</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    backgroundColor: Light.card,
    marginRight: ms(20),
    marginLeft: ms(20),
    marginTop: '5%',
  },
  textStyle: {
    fontSize: 13,
    color: Light.icon,
  },
  imageStyle: {
    width: '90%',
    borderRadius: 10,
    margin: 15,
  },
  footerConatiner: {
    flexDirection: 'row',
    marginTop: '10%',
    justifyContent: 'space-around',
  },
});

export default VenueCard;
