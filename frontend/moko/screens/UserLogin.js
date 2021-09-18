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

import Ionicons from 'react-native-vector-icons/Ionicons';

function LoginScreen({ navigation }) {
  const { height } = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style = {{backgroundColor: '#FFFFFF', height: height}}>
     
    <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
          <Image style = {styles.icons} source={require('../images/Logo.png')} />
    </View>
   
    <Text style={styles.name}>APP NAME</Text>

    <View style={styles.inputView}>
    <Ionicons name="person-outline" color='#000' size={30} style={{marginLeft: 10, marginTop: 10}}/>
    <TextInput
      style={styles.TextInput}
      placeholder="email"
      placeholderTextColor="black"
      onChangeText={(email) => setEmail(email)}
    />
    </View>

    <View style={styles.inputView}>
    <Ionicons name="lock-closed-outline" color='#000' size={30} style={{marginLeft: 10, marginTop: 10}}/>
      <TextInput
        style={styles.TextInput}
        placeholder="password"
        placeholderTextColor="black"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}asd
      />
    </View>

    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('UserStack')}>
      <Text style={styles.loginText}>LOG IN</Text>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    marginTop: 150,
    marginHorizontal: 10,
  },
  name: {
    marginTop: 50,
    marginHorizontal: 10,
    alignSelf: 'center',
    fontFamily: 'Inter-Light',
    fontSize: 40,
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 0.5,
    borderRadius: 15,
    width: "80%",
    height: 55,
    marginTop: 30,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  TextInput: {
    height: 50,
    flex: 1,
    color: 'black',
    fontSize: 25,
    fontFamily: "Inter-Light",
    marginLeft: 10,
    marginTop: 5
  },
  loginBtn:{
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
  loginText: {
    height: 50,
    flex: 1,
    padding: 10,
    alignSelf: 'center',
    alignItems: "center",
    alignContent: 'center',
    color: 'white',
    fontSize: 25,
    fontFamily: 'Inter-Light'
  }
});

export default LoginScreen;
