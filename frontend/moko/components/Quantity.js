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
  TextInput,
  Button, 
  Alert 
} from 'react-native';

function Quantity (qty) {
    return (
        <View style = {{flexDirection: 'row'}}>
            <Button 
             title=" + "
             color="#f194ff"
             onPress={() => Alert.alert('Button with adjusted color pressed')}  />    
               
        </View>

   
    );
}

const styles = StyleSheet.create({
  
});

export default Quantity;