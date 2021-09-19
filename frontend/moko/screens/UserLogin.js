
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const height = Dimensions.get('window').height;

function LoginScreen({ navigation }) {
  //const { height } = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
    >
    <View style = {{backgroundColor: '#FFFFFF', height: height, alignItems: 'center', justifyContent: 'flex-start'}}>

    <View style = {{flexDirection: 'row', alignSelf: 'center', }}>
          <Image style = {styles.icons} source={require('../images/Logo_Final.png')} />
    </View>

    <Text style={styles.name}>a sustainable and delicious option</Text>

    <View style={styles.inputView}>
    <Ionicons name="person-outline" color='#000' size={20} style={{marginLeft: 10, marginTop: 10}}/>
    <TextInput
      style={styles.TextInput}
      placeholder="email"
      placeholderTextColor="black"
      onChangeText={(email) => setEmail(email)}
    />
    </View>

    <View style={styles.inputView}>
    <Ionicons name="lock-closed-outline" color='#000' size={20} style={{marginLeft: 10, marginTop: 10}}/>
      <TextInput
        style={styles.TextInput}
        placeholder="password"
        placeholderTextColor="black"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>

    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('UserStack')}>
      <Text style={styles.loginText}>LOG IN</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate('SignUpStack')}>
      <Text style={styles.loginText}>SIGN UP</Text>
    </TouchableOpacity>
  </View>
  </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  icons: {
    marginHorizontal: 10,
    height: 100,
    width: 330,
    marginTop: 100
  },
  name: {
    marginTop: 15,
    marginHorizontal: 10,
    alignSelf: 'center',
    fontFamily: 'Inter-Light',
    fontSize: 20,
    marginBottom: 70,
    fontWeight: 'bold'
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
    height: 48,
    flex: 1,
    color: 'black',
    fontSize: 18,
    fontFamily: "Inter-Light",
    marginLeft: 10,
  },
  loginBtn:{
    height: 45,
    width: "70%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#87B676",
    borderRadius:15,
    marginBottom: 10,
    marginTop: 20
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter-Light',
  },
  signUpBtn:{
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#87B676",
    width: "70%",
    borderRadius:15,
    marginBottom: 10,
  }
});

export default LoginScreen;
