import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from '../views/Profile';
import Playlist from '../views/Playlist';
import Home from '../views/Home';
import BottomNavigator from '../components/BottomNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Messages" component={Playlist} />
      <Tab.Screen name="Hospitals" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
