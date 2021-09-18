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
  FlatList,
  Alert
} from 'react-native';

import CartItem from "../components/CartItem.js"; 

const CartFull = true; 

//variable CartItems: itemName, description, price, IMAGE?
var cartItems = [];
cartItems.push({
    name: "Fruit", 
    description: "A very fresh apple", 
    price: 1.99, 
    qty: 0
});
cartItems.push({
    name: "Vegetable", 
    description: "A very fresh cucumber", 
    price: 3.99, 
    qty: 0
});
cartItems.push({
    name: "Juice", 
    description: "squeezed lemon", 
    price: 2.99, 
    qty: 0
});
cartItems.push({
    name: "Vegetable", 
    description: "A very fresh cucumber", 
    price: 3.99, 
    qty: 0
});
cartItems.push({
    name: "Vegetable", 
    description: "A very fresh cucumber", 
    price: 3.99, 
    qty: 0
});

function Cart({ navigation }) {
  const { height } = Dimensions.get('window');
  
  if (!CartFull) {
      return (
        <View style = {{backgroundColor: '#FFFFFF', height: height}}>
         
        <View style = {{flexDirection: 'row'}}> 
            <Text style={styles.name}>Cart</Text>
            
        </View>
        
        <View style = {{flexDirection: 'column'}}>
            <Image style = {styles.image} source={require('../images/cartEmpty.png')}/> 
            <Text style = {styles.text1}>Your cart is empty</Text>
            <Text style = {styles.text2}>Looks like you haven't made</Text>
            <Text style = {styles.text3}> your choice yet...</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btnText}>Start Shopping</Text>
            </TouchableOpacity>
        </View>
    
      </View>
      );
  }
  else {  
      //iterate through data, display the data name 
    return (
        <View style = {{backgroundColor: '#FFFFFF', height: height}}>
            <View style = {{flexDirection: 'row'}}> 
                <Text style={styles.name}>Cart</Text>
            </View>
        
            <View style = {{flexDirection: 'column'}}>
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => ( CartItem(item) )} 
                />
                <TouchableOpacity style={{width: 400, height: 80, justifyContent: 'center', paddingLeft: 150}} onPress={() => Alert.alert('Remove all the items')}  >
                    <Text style={{fontSize: 20, color:'#DC8433'}}>Remove All Items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btnText}>Start Shopping</Text>
            </TouchableOpacity>
            </View>  
        </View>
    );
    }
}

const styles = StyleSheet.create({
    name: {
        marginTop: 20,
        marginLeft: 40,
        marginHorizontal: 10,
        fontFamily: 'Inter-Regular',
        fontSize: 40
    },
    image: {
        alignSelf: 'center',
        marginTop: 120,
        width: 250,
        height: 250
    },
    text1: {
        marginTop: 40,
        fontSize: 30,
        fontFamily: 'Inter-Bold',
        alignSelf: 'center'
    },
    text2: {
        marginTop: 20,
        fontSize: 20,
        fontFamily: 'Inter-Light',
        alignSelf: 'center'
    },
    text3: {
        fontSize: 20,
        fontFamily: 'Inter-Light',
        alignSelf: 'center'
    },
    btn:{
        height:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:50,
        backgroundColor:"#87B676",
        width: "70%",
        borderRadius:15,
        alignSelf: 'center',
        marginBottom: 20,
      },
    btnText: {
        height: 50,
        flex: 1,
        padding: 10,
        alignSelf: 'center',
        alignItems: "center",
        alignContent: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Inter-Regular'
      },
      btn2:{
        height:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:50,
        backgroundColor:"#4C6D41",
        width: "70%",
        borderRadius:15,
        alignSelf: 'center',
        marginBottom: 20,
      },
});

export default Cart;
