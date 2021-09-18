 import 'react-native-gesture-handler';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
 } from 'react-native';
 import LoginScreen from './screens/UserLogin.js';
 import UserStack from './navigation/UserStack.js'
 import SignUpStack from './navigation/SignUpStack.js';
 
 
 const Stack = createStackNavigator();
 
 function App({ navigation }) {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login"
                       screenOptions={{
                          headerShown: false
                       }}>
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="UserStack" component={UserStack} />
         <Stack.Screen name="SignUpStack" component={SignUpStack} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
 export default App;