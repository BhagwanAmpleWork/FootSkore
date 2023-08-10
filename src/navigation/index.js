import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  OnboardingScreen,
  OnboardingScreenSecond,
} from '@screen/onbording/intro';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SignIn,
  ForgetPassword,
  OTPVerify,
  ResetPassword,
  PasswordSuccessfully,
  SignUp,
  SignUpSecond,
} from '@screen/authentication';
import BottomTabData from '@navigation/bottomtab';
import LeagueSearch from '@screen/homepage/leagues/leaguesearchicon';
import LeaguesDetails from '@screen/homepage/leagues/leaguesdeatails';
import Standing from '@screen/homepage/leagues/standing';
import Matchfixsearch from '@screen/homepage/matchfixsearch';
import TeamDetails from '@screen/teamdetails';

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TeamDetails"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen
          name="OnboardingScreenSecond"
          component={OnboardingScreenSecond}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
        <Stack.Screen name="OTPVerify" component={OTPVerify} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen
          name="ResetSuccessfully"
          component={PasswordSuccessfully}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Sign-Up" component={SignUpSecond} />
        <Stack.Screen name="HomePage" component={BottomTabData} />
        <Stack.Screen name="SearhBar" component={LeagueSearch} />
        <Stack.Screen name="LeagueDetails" component={LeaguesDetails} />
        <Stack.Screen name="Standing" component={Standing} />
        <Stack.Screen name="GlobalSearch" component={Matchfixsearch} />
        <Stack.Screen name="TeamDetails" component={TeamDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
