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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function StoreFront({ navigation }) {
  const { height } = Dimensions.get('window');
  
  return (
    <View style = {{backgroundColor: '#FFFFFF', height: height}}>
        <Text style={styles.name}>StoreName</Text>
        <Text style={styles.description}>A description of the store</Text>
        

    </View>
  );
}

const styles = StyleSheet.create({
    name: {
      marginTop: 20,
      marginLeft: 40,
      marginHorizontal: 10,
      fontFamily: 'Inter-Regular',
      fontSize: 30,
      fontWeight: 'bold'
      }, 
    description:{
      fontSize: 20, 
      marginTop: 30, 
      marginLeft: 30
    },
    profileOption: {
      flexDirection: 'row', 
      marginLeft: 30, 
      height: 40, 
      marginTop: 20
    }, 
    optionsText: {
      fontSize: 20, 
      width: 250, 
      marginTop: 5
    },
    logout: {
      flexDirection: 'row',
      alignItems: 'center', 
      marginTop: 50,
      justifyContent: 'space-around'
    }, 
    logoutText:{
      fontSize: 20,
      marginLeft: -350, 
      marginTop: -5
    }
});

export default StoreFront;
