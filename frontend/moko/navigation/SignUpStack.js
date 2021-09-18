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
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from '../screens/SignUp.js';


const Stack = createStackNavigator();

function SignUpStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="SignUpScreen"
    screenOptions={{
        headerShown: false,
    }}>
<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
</Stack.Navigator>
);
}
export default SignUpStack;
