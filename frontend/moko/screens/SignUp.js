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

} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const height = Dimensions.get('window').height;


function SignUpScreen({ navigation }) {
  //const { height } = Dimensions.get('window');
 
  const [postal, setPostal] = useState('');
  const [province, setProvince] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSeller, setSeller] = useState('');

  
  
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
    >
    <View style = {{backgroundColor: '#FFFFFF', height: height}}>
   
    <Text style={styles.name}>MOKO</Text>
    <Text style={styles.info}>Please, write down your information:</Text>
    
    <ScrollView > 
       
    <View style={styles.inputView}>
    <Ionicons name="person-outline" color='#000' size={25} style={{marginLeft: 10, marginTop: 10}}/>
    <TextInput
      style={styles.TextInput}
      placeholder="email"
      placeholderTextColor="black"
      onChangeText={(email) => setEmail(email)}
    />
    </View>

    <View style={styles.inputView}>
    <Ionicons name="lock-closed-outline" color='#000' size={25} style={{marginLeft: 10, marginTop: 10}}/>
      <TextInput
        style={styles.TextInput}
        placeholder="password"
        placeholderTextColor="black"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}asd
      />
    </View>

    <View style={styles.inputView}>
    <Ionicons name="pin" color='#000' size={25} style={{marginLeft: 10, marginTop: 10}}/>
    <TextInput
      style={styles.TextInput}
      placeholder="Streed Adress"
      placeholderTextColor="black"
      onChangeText={(street) => setStreet(street)}
    />
    </View>

    <View style={styles.inputView}>
    <Ionicons name="pin" color='#000' size={25} style={{marginLeft: 10, marginTop: 10}}/>
      <TextInput
        style={styles.TextInput}
        placeholder="City"
        placeholderTextColor="black"
        secureTextEntry={true}
        onChangeText={(city) => setCity(city)}
      />
    </View>

    <View style={styles.inputView}>
    <Ionicons name="pin" color='#000' size={25} style={{marginLeft: 10, marginTop: 10}}/>
      <TextInput
        style={styles.TextInput}
        placeholder="Province/State"
        placeholderTextColor="black"
        secureTextEntry={true}
        onChangeText={(province) => setProvince(province)}
      />
    </View>

    <View style={styles.inputView}>
    <Ionicons name="md-pin" color='#000' size={25} style={{marginLeft: 10, marginTop: 10}}/>
      <TextInput
        style={styles.TextInput}
        placeholder="Postal Code"
        placeholderTextColor="black"
        secureTextEntry={true}
        onChangeText={(postal) => setPostal(postal)}
      />
    </View>

    <View style={styles.inputView}>
    <Ionicons name="call" color='#000' size={25} style={{marginLeft: 10, marginTop: 10}}/>
    <TextInput
      style={styles.TextInput}
      placeholder="Phone Number"
      placeholderTextColor="black"
      onChangeText={(phone) => setPhone(phone)}
    />
    </View>

    <View style={styles.inputView}> 
        <TextInput
            style={styles.TextInput}
            placeholder="Are you a seller?"
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={(isSeller) => setSeller(isSeller)}asd
        />
    </View>
    </ScrollView>
    <TouchableOpacity style={styles.signinBtn} onPress={() => navigation.navigate('UserStack')}>
      <Text style={styles.signinText}>SIGN IN</Text>
    </TouchableOpacity>
  </View>
 
  </KeyboardAwareScrollView>
  );
}



const styles = StyleSheet.create({
  icons: {
    marginTop: 100,
    marginHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  name: {
    marginTop: 40,
    marginHorizontal: 10,
    alignSelf: 'center',
    fontFamily: 'Inter-Light',
    fontSize: 40,
    marginBottom: 40,
  },
  info: {
    marginTop: 10,
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: 'Inter-Light',
    marginBottom: 20
  },
  inputView: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 0.5,
    borderRadius: 15,
    width: "80%",
    height: 45,
    marginBottom: 10,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  TextInput: {
    height: 49,
    flex: 1,
    color: 'black',
    fontSize: 20,
    fontFamily: "Inter-Light",
    marginLeft: 10,
  },
  signinBtn:{
    height: 45,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    backgroundColor:"#87B676",
    width: "70%",
    borderRadius:15,
    alignSelf: 'center',
    marginBottom: 80,
  },
  signinText: {
    height: 50,
    flex: 1,
    padding: 5,
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: 'center',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Inter-Light',
    
  },

});

export default SignUpScreen;
