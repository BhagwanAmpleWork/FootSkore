import {View, StyleSheet, Image, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import HomeNavigation from '@components/header';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';
import {Light} from '../../../theme';

const data = [
  {
    id: 1,
    source: require('@image/ufea.png'),
    title: 'UEFA Champion League',
    subTitle: 'USA',
  },
  {
    id: 2,
    source: require('@image/west.png'),
    title: '3. liga - West',
    subTitle: 'Slovakia',
  },
  {
    id: 3,
    source: require('@image/liga.png'),
    title: 'Liga 3',
    subTitle: 'Portugal',
  },
  {
    id: 4,
    source: require('@image/aus.png'),
    title: 'A-League',
    subTitle: 'Australia',
  },
  {
    id: 5,
    source: require('@image/cup.png'),
    title: 'Cup',
    subTitle: 'Macedonia',
  },
  {
    id: 6,
    source: require('@image/central.png'),
    title: 'Central Youth League',
    subTitle: 'Poland',
  },
  {
    id: 7,
    source: require('@image/limb.png'),
    title: 'Provincial-Limburg',
    subTitle: 'Australia',
  },
  {
    id: 8,
    source: require('@image/kupa.png'),
    title: 'Magyar Kupa',
    subTitle: 'Hungary',
  },
];

const Leagues = ({navigation}) => {
  const navigateTo = () => navigation.navigate('SearhBar');

  const [select, setSelect] = useState(false);

  return (
    <View style={style.rootContainer}>
      <HomeNavigation title="LEAGUES" onPress={navigateTo} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <View style={style.root}>
            <View style={style.cardContainer}>
              <Image source={item.source} style={style.cardImageStyle} />
              <View>
                <Text style={{fontWeight: '600', color: Light.text}}>
                  {item.title}
                </Text>
                <Text style={{marginTop: 4, color: Light.subtext}}>
                  {item.subTitle}
                </Text>
              </View>
            </View>
            <View>
              <Icon
                name={'heart'}
                size={17}
                color={Light.primary}
                style={{marginRight: 14}}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: '9%',
  },
  root: {
    height: 65,
    backgroundColor: Light.card,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: ms(20),
    marginRight: ms(20),
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

export default Leagues;
