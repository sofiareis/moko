import React from 'react';
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
export default function CartItem(cartItem) {
  // const [qty, setQty] = React.useState(cartItem.qty);

    //const incrementVal = () => {
    //    setQty(prevQty => prevQty + 1);
    //};

    return (
            <View style = {styles.item}>
                <Image style =  {styles.itemImage} source={require('../images/Logo.png')} />
            
                <View style = {{flexDirection: 'column', marginLeft: 20, width: 200}}>
                    <Text style = {styles.itemName}>{cartItem.name}</Text>
                    <Text style = {styles.itemDescript}>{cartItem.description}</Text>
                    <Text style = {styles.itemPrice}>{cartItem.price}</Text>
                </View>

                <View style = {{flexDirection: 'row', marginLeft: -20}}>
                    <TouchableOpacity style={styles.button1} onPress={() => Alert.alert('Button pressed')}  >
                        <MaterialCommunityIcons name="plus" color={'#4C6D41'} size={35} style={{marginLeft: 2}}/>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.button2} onPress={() => Alert.alert('Button pressed')}  >
                        <MaterialCommunityIcons name="minus" color={'#4C6D41'} size={35} style={{marginLeft: 2}}/>
                    </TouchableOpacity>
                    
                    <View style = {{width: 30, height: 40, backgroundColor: '#87B676', marginLeft: -65}}>  
                        <Text style = {{fontSize: 25, color: 'white', marginLeft: 7, marginTop: 2}}>qty</Text>
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
    button1: {
        height: 40, 
        width: 40,
        borderWidth: 1,
        borderColor: '#87B676',
        borderRadius: 10
    },
    button2: {
        height: 40, 
        width: 40,
        borderWidth: 1,
        borderColor: '#87B676',
        borderRadius: 10,
        marginLeft: 20
    }
});

