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
export default function CartItem(props) {
   let cartItem = props.cartItem;
   console.log(cartItem);
   const [qty, setQty] = useState(cartItem.qty);

    const incrementVal = () => {
      setQty(prevQty => prevQty + 1);
    };

    const decrementVal = () => {
      if (qty > 0) {
        setQty(prevQty => prevQty - 1);
      }
    };

    return (
            <View style = {styles.item}>
                <Image style =  {styles.itemImage} source={require('../images/Logo.png')} />

                <View style = {{flexDirection: 'column', marginLeft: 20, width: 200}}>
                    <Text style = {styles.itemName}>{cartItem.name}</Text>
                    <Text style = {styles.itemDescript}>{cartItem.description}</Text>
                    <Text style = {styles.itemPrice}>{cartItem.price}</Text>
                </View>

                <View style = {{flexDirection: 'row', marginLeft: -30}}>
                    <TouchableOpacity style={styles.button1} onPress={() => incrementVal()}  >
                        <MaterialCommunityIcons name="plus" color={'#4C6D41'} size={25} style={{marginLeft: -7}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={() => decrementVal()}  >
                        <MaterialCommunityIcons name="minus" color={'#4C6D41'} size={25} style={{marginLeft: 7}}/>
                    </TouchableOpacity>

                    <View style = {{width: 38, height: 40, backgroundColor: '#87B676', marginLeft: -68}}>
                        <Text style = {{fontSize: 25, color: 'white', marginTop: 2, alignSelf: 'center'}}>{qty}</Text>
                    </View>

                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    item: {
        marginLeft: 20,
        marginTop: 30,
        flexDirection: 'row',
        borderWidth: 2,
        height: 100,
        borderLeftColor: '#FFFFFF',
        borderRightColor: '#FFFFFF',
        borderTopColor: '#FFFFFF',
        borderBottomColor: '#E0E0E0'
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold'
      },
    itemDescript: {
        fontSize: 16
    },
    itemPrice: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    itemImage: {
        height: 80,
        width: 80
    },
    button1: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: '#87B676',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button2: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: '#87B676',
        borderRadius: 10,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
