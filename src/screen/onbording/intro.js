import React, {useState} from 'react';
import {View, Text, Image, StatusBar, FlatList} from 'react-native';
import {SimpleButton, HollowButton} from '@components/button/index.js';
import Styles from './style.js';
import {Common} from '@theme/index.js';
import {ms, vs} from 'react-native-size-matters';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <StatusBar hidden={true}></StatusBar>
      <View style={Styles.imageContainer}>
        <Image
          source={require('@image/start.png')}
          style={[Styles.imageStyle, {marginTop: vs(30)}]}
        />
      </View>
      <View style={Styles.centerContainer}>
        <Text style={Styles.centerText}>FOOTSKORE</Text>
        <Text style={Styles.centerSubText}>
          Never miss a goal - get live match alerts, fixtures and results for
          your favourite teams and competitons
        </Text>
        <View style={Styles.buttonContainer}>
          <SimpleButton
            title={'Get Started'}
            color={Common.primary}
            onPress={() => navigation.navigate('OnboardingScreenSecond')}
          />
        </View>
      </View>
    </View>
  );
};

const OnboardingScreenSecond = ({navigation}) => {
  const navigateTo = () => navigation.navigate('SignIn');
  const navigateToSignUp = () => navigation.navigate('SignUp');

  const [images, setImage] = useState([
    require('@image/second.png'),
    require('@image/third.png'),
  ]);

  return (
    <View style={Styles.container}>
      <StatusBar hidden={true}></StatusBar>
      <View style={Styles.imageContainer}>
        <FlatList
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={images}
          renderItem={({item, index}) => (
            <Image
              source={item}
              key={index}
              style={Styles.imageFlatlist}
              resizeMode="center"></Image>
          )}
        />
      </View>
      <View style={Styles.centerContainer}>
        <Text style={Styles.centerText}>FOOTSKORE</Text>
        <Text
          style={[
            Styles.centerSubText,
            {marginLeft: ms(40), marginRight: ms(40)},
          ]}>
          We'd like to check that your preferences and details are accurate
        </Text>
        <View style={Styles.buttonContainer}>
          <SimpleButton
            title={'Sign In'}
            color={Common.primary}
            onPress={navigateTo}
          />
          <HollowButton onPress={navigateToSignUp} />
        </View>
      </View>
    </View>
  );
};

export {OnboardingScreen, OnboardingScreenSecond};
