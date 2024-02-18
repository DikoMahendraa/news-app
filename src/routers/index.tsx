import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Bookmarks from '../views/Bookmarks';
import SearchNews from '../views/SearchNews';
import Home from '../views/Home';
import BottomNavigator from '../components/molecules/BottomNavigator';
import NewsDetail from '../views/NewsDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Berita"
        component={Home}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Cari"
        component={SearchNews}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Bookmarks"
        component={Bookmarks}
      />
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
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
