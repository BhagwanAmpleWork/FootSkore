import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TeamDetail} from '@screen/homepage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from 'react-native-size-matters';
import LiveTabScreen from '@screen/homepage/live';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Leagues from '@screen/homepage/leagues/leagues';
import Venue from '@screen/homepage/venue';
import Fovorite from '@screen/homepage/fovorite';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Fixture"
        component={TeamDetail}
        options={{
          tabBarActiveTintColor: '#E92742',
          tabBarInactiveTintColor: '#808797',
          title: 'Fixture',
          tabBarIcon: ({size, focused}) => (
            <Ionicons
              name="football-outline"
              size={size}
              style={{color: focused ? '#E92742' : '#808797'}}
            />
          ),
          tabBarLabelStyle: {fontSize: moderateScale(11)},
        }}
      />

      <Tab.Screen
        name="Live"
        component={LiveTabScreen}
        options={{
          tabBarActiveTintColor: '#E92742',
          tabBarInactiveTintColor: '#808797',
          title: 'Live',
          tabBarIcon: ({size, focused}) => (
            <MaterialCommunityIcons
              name="television-play"
              size={size}
              style={{color: focused ? '#E92742' : '#808797'}}
            />
          ),
          tabBarLabelStyle: {fontSize: moderateScale(11)},
        }}
      />

      <Tab.Screen
        name="Leagues"
        component={Leagues}
        options={{
          tabBarActiveTintColor: '#E92742',
          tabBarInactiveTintColor: '#808797',
          title: 'Leagues',
          tabBarIcon: ({size, focused}) => (
            <Ionicons
              name="trophy-outline"
              size={size}
              style={{color: focused ? '#E92742' : '#808797'}}
            />
          ),
          tabBarLabelStyle: {fontSize: moderateScale(11)},
        }}
      />

      <Tab.Screen
        name="Venue"
        component={Venue}
        options={{
          tabBarActiveTintColor: '#E92742',
          tabBarInactiveTintColor: '#808797',
          title: 'Venue',
          tabBarIcon: ({size, focused}) => (
            <Feather
              name="map-pin"
              size={size}
              style={{color: focused ? '#E92742' : '#808797'}}
            />
          ),
          tabBarLabelStyle: {fontSize: moderateScale(11)},
        }}
      />

      <Tab.Screen
        name={'Favorite'}
        component={Fovorite}
        options={{
          tabBarActiveTintColor: '#E92742',
          tabBarInactiveTintColor: '#808797',
          title: 'Favorite',
          tabBarIcon: ({size, focused}) => (
            <Ionicons
              name="star-outline"
              size={size}
              style={{color: focused ? '#E92742' : '#808797'}}
            />
          ),
          tabBarLabelStyle: {fontSize: moderateScale(11)},
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
