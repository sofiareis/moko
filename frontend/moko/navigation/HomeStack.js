import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home.js';
import StoreFront from '../screens/StoreFront.js';

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="HomeScreen"
                      screenOptions={{
                          headerShown: false,
                      }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="StoreFront" component={StoreFront} />
    </Stack.Navigator>
  );
}

export default HomeStack;
