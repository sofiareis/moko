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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//itemName, description, price, imageURL, qty 
function CartItem (cartItem) {
    return (
    
        <View style = {{flexDirection: 'row', marginLeft: 20, marginTop: 30, width: "90%"}}>
            <Image style =  {styles.itemImage} source={require('../images/Logo.png')} />
           
            <View style = {{flexDirection: 'column', marginLeft: 20}}>
                <Text style = {styles.itemName}>{cartItem[0]}</Text>
                <Text style = {styles.itemDescript}>{cartItem[1]}</Text>
                <Text style = {styles.itemPrice}>{cartItem[2]}</Text>
            </View>

            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Button with adjusted color pressed')}  >
                   <MaterialCommunityIcons name="plus" color={'#4C6D41'} size={35} style={{marginLeft: 2}}/>
                </TouchableOpacity>
                  
            </View>

        </View>
  
   
    );
}

const styles = StyleSheet.create({
    itemName: {
        fontSize: 30,
      },      
    itemDescript: {
        fontSize: 20
    },
    itemPrice: {
        fontSize: 15,
        fontWeight: 'bold'
    }, 
    itemImage: {
        height: 80,
        width: 80
    }, 
    button: {
        height: 40, 
        width: 40,
        borderWidth: 1,
        borderColor: '#87B676',
        borderRadius: 10
    }
});

export default CartItem;