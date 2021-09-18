import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput
} from 'react-native';


function Profile({ navigation }) {
  const { height } = Dimensions.get('window');
  
  return (
    <View style = {{backgroundColor: '#FFFFFF', height: height}}>
        <Text style={styles.name}>Profile</Text>   
    </View>
  );
}

const styles = StyleSheet.create({
    name: {
        marginTop: 20,
        marginLeft: 40,
        marginHorizontal: 10,
        fontFamily: 'Inter-Regular',
        fontSize: 35
      }
});

export default Profile;
