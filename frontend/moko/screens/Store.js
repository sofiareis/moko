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

function fetchD() {
  fetch('ec2-13-57-28-56.us-west-1.compute.amazonaws.com:3000', {
  method: 'GET' //Request Type 
  })
  .then((response) => response.json()) //If response is in json then in success
  .then((responseJson) => { //Success 
    console.log(responseJson);
  })
  //If response is not in json then in error
  .catch((error) => { //Error 
    console.error(error);
  })
}


function StoreEmpty({ navigation }) {
  const { height } = Dimensions.get('window');
  
  return (
    <View style = {{backgroundColor: '#FFFFFF', height: height}}>
     
    <View style = {{flexDirection: 'row'}}> 
        <Text style={styles.name}>Store</Text>
        
    </View>
    
    <View style = {{flexDirection: 'column'}}>
        <Image style = {styles.image} source={require('../images/storeEmpty.png')}/> 
        <Text style = {styles.text1}>Become a vendor</Text>
        <Text style = {styles.text2}>Wnat to join your local market</Text>
        <Text style = {styles.text3}>community?</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('UserStack')}>
            <Text style={styles.btnText}>Create your store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => fetchD()}>
            <Text style={styles.btnText}>fetch</Text>
        </TouchableOpacity>
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
        marginTop: 120,
        width: 300,
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
      }

});

export default StoreEmpty;
