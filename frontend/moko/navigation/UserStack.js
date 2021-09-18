import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/Home.js'; 
import Cart from '../screens/Cart.js'; 
import StoreEmpty from '../screens/Store'; 
import Footprint from '../screens/CarbonFootprint.js';
import Profile from '../screens/Profile.js';


const Tab = createBottomTabNavigator();

function UserStack({ navigation }) {
  return (
    <Tab.Navigator 
        intialRouteName = 'Home' 
                    screenOptions={{
                        headerShown: false,
                    }}
                    tabBarOptions={{ 
                        showLabel: false,
                        activeTintColor:"#F58024",
                        inactiveTintColor: "#979696",
                        style: {
                          backgroundColor: '#FFFFFF',
                          height: 100,
                        }
                    }}
                    
                    >
      <Tab.Screen name='Home'
                  component={HomeScreen}
                  options = {{
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home-outline" color={color} size={45} />
                     ),
                   }}
                  />
      <Tab.Screen name='Cart'
                  component={Cart}
                  options = {{
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cart-outline" color={color} size={40} />
                     ),
                   }}
                  />
      <Tab.Screen name='Sell'
                  component={StoreEmpty}
                  options = {{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="storefront" color={color} size={40} />
                     ),
                   }}
                  />
      <Tab.Screen name='Footprint'
                  component={Footprint}
                  options = {{
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="leaf" color={color} size={40} />
                     ),
                   }}
                  />
       <Tab.Screen name='Profile'
                  component={Profile}
                  options = {{
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-outline" color={color} size={40} />
                     ),
                   }}
                  />
    </Tab.Navigator>
  );
}
export default UserStack;
