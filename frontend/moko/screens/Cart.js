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
  Alert,
  Modal,
  Button
} from 'react-native';

import CartItem from "../components/CartItem.js";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

const { height } = Dimensions.get('window');

function Cart({ navigation }) {
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
    const [modalOpen, setModalOpen] = useState(false);

    function goBack() {
        setModalOpen(false);
        navigation.navigate('Cart');
        //empty the cart
    }

    return (
        <View style = {{backgroundColor: '#FFFFFF', height: height}}>
            <View style = {{flexDirection: 'row'}}>
                <Text style={styles.name}>Cart</Text>
            </View>

            <View style = {styles.listview}>
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => (<CartItem cartItem={item} />)}
                />
                <TouchableOpacity style={{width: 400, height: 80, justifyContent: 'center', paddingLeft: 150}} onPress={() => Alert.alert('Remove all the items')}  >
                    <Text style={{fontSize: 20, color:'#DC8433'}}>Remove All Items</Text>
                </TouchableOpacity>

                <View style = {{flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
                    <View style={styles.total} >
                        <Text style={styles.totalText}>$X.XX</Text>
                    </View>
                    <TouchableOpacity style={styles.btn2} onPress={() => setModalOpen(true)}>
                        <Text style={styles.btnText}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal visible = {modalOpen} animationType ='slide' >
                <View style = {{flexDirection: 'column'}}>
                    <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={styles.title}>Checkout</Text>
                        <MaterialCommunityIcons name="close-circle" color='#575757' size={30} style={styles.closeIcon}  onPress={() => setModalOpen(false)}/>
                    </View>
                    <Text style={styles.subheader}>Order Summary</Text>
                    <View style = {{height: 400}}>
                        <FlatList
                            data={cartItems}
                            renderItem={({ item }) => (<CartItem cartItem={item} />)}
                        />
                    </View>
                    <Text style = {styles.orderText}>A text message will be sent to the vender notifying them of your order.
                        Please confirm your pickup time and method of payment directly with the seller.</Text>
                    <TouchableOpacity style={styles.btn3} onPress={() => goBack()}>
                        <Text style={styles.btnText}>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
        fontSize: 30,
        fontWeight: 'bold'
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
    listview: {
        flexDirection: 'column',
        height: 0.9 * height,
    },
    total: {
        height:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:50,
        backgroundColor:"#FFFFFF",
        width: "20%",
        borderRadius:15,
        alignSelf: 'center',
        marginBottom: 20,
    },
    totalText: {
        height: 50,
        flex: 1,
        padding: 10,
        alignSelf: 'center',
        alignItems: "center",
        alignContent: 'center',
        color: 'black',
        fontSize: 20,
        fontFamily: 'Inter-Regular'
    },
    btn2:{
        height:55,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#4C6D41",
        width: "50%",
        borderRadius:15,
        alignSelf: 'center',
        marginBottom: 20,
    },
    title: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30,
        alignSelf: 'center'
    },
    subheader: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20
    },
    btn3: {
        height:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        backgroundColor:"#4C6D41",
        width: "70%",
        borderRadius:15,
        alignSelf: 'center',
        marginBottom: 20,
    },
    orderText: {
        textAlign: 'center',
        width: '80%',
        fontSize: 14,
        alignSelf: 'center',
        marginTop: 20
    },
    closeIcon: {
        position: 'absolute',
        right: 30,
        marginTop: 25
    }
});

export default Cart;
