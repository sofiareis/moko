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
  FlatList
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

function StoreItem({ navigation }) {
  const { height } = Dimensions.get('window');
  const [qty, onChangeQty] = React.useState("X");
  const [price, onChangePrice] = React.useState("X.XX");
  const [text, onChangeText] = React.useState("add a description");

    return (
      <View style = {{backgroundColor: '#FFFFFF', height: height}}>
        <View style = {{flexDirection: 'row'}}> 
            <Text style={styles.name}>StoreItem Name</Text>     
        </View> 
        <View style = {{flexDirection: 'column'}}>
            <Image style = {styles.image} source={require('../images/storeEmpty.png')}/> 
           
            <View style = {{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 50}}> 
                <Text style = {styles.text1}>Qty:</Text>
                <TextInput style={styles.input} 
                        onChangeText={onChangeQty}
                        value={qty}
                        placeholder="X"
                        keyboardType="numeric"
                />
            </View>

            <View style = {{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 50}}> 
                <Text style = {styles.text1}>Price: $</Text>
                <TextInput style={styles.input} 
                        onChangeText={onChangePrice}
                        value={price}
                        placeholder="X.XX"
                        keyboardType="numeric"
                />
            </View>

            <View style = {{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 50}}> 
                <Text style = {styles.text1}>Description:</Text>
                <TextInput style={styles.inputText} 
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="add a description of your product"
                />
            </View>
            
            <View style = {{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <TouchableOpacity style={styles.done} onPress={() =>  navigation.navigate('Store')}> 
                    <MaterialCommunityIcons name="check" color='#FFFFFF' size={50} style={{marginTop: -5}}/> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.delete} onPress={() =>  navigation.navigate('Store')}> 
                    <MaterialCommunityIcons name="trash-can-outline" color='#87B676' size={40} style={{}}/> 
                </TouchableOpacity>
            </View>
           
        </View>
      </View>
    );
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
        marginTop: 80,
        width: 250,
        height: 250
    },
    text1: {
        marginTop: 40,
        fontSize: 25,
        fontFamily: 'Inter-Bold',
        alignSelf: 'center'
    },
    input: {
        height: 40,
        width: 100,
        borderWidth: 2,
        padding: 5,
        textAlign:'center',
        marginTop: 45, 
        marginLeft: 15,
        fontSize: 20, 
        borderColor: '#E0E0E0', 
        borderRadius: 10
      },
    inputText: {
        height: 40,
        width: 250,
        borderWidth: 2,
        padding: 5,
        textAlign:'center',
        marginTop: 45, 
        marginLeft: 15,
        fontSize: 20,
        borderColor: '#E0E0E0',
        borderRadius: 10
    }, 
    done: {
        alignItems: 'center',
        alignSelf: 'center',
        height: 50, 
        width: 100, 
        backgroundColor: '#87B676', 
        borderWidth: 3, 
        borderColor: '#87B676', 
        borderRadius: 20, 
        marginTop: 40, 
        marginLeft: 20
    }, 
    delete: {
        alignItems: 'center',
        alignSelf: 'center',
        height: 50, 
        width: 100, 
        backgroundColor: '#FFFFFF', 
        borderWidth: 3, 
        borderColor: '#87B676', 
        borderRadius: 20, 
        marginTop: 40, 
        marginRight: 20
    }


});

export default StoreItem;
