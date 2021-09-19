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

import StoreItemComponent from '../components/StoreItemComponent.js'; 

function StoreFront({ navigation, route }) {
  const { height } = Dimensions.get('window');
 
  const {storeName} = route.params;
  const {desc} = route.params;
  const {storeID} = route.params;

  const [storeItems, setStoreItems] =  useState([]); 
  /*
      storeItemID: 1,
      storeID: 1,
      name: "Cucumber",
      description: "A very fresh cucumber",
      stockQty: 10,
      price: 1.99,
      imageUrl: "",
      imageName: ""
    },
    {
      storeItemID: 2,
      storeID: 1,
      name: "Tomato",
      description: "A very fresh tomato",
      stockQty: 10,
      price: 1.99,
      imageUrl: "",
      imageName: ""
    },
    {
      storeItemID: 3,
      storeID: 1,
      name: "Tomato",
      description: "A very fresh tomato",
      stockQty: 10,
      price: 1.99,
      imageUrl: "",
      imageName: ""
    },
    {
      storeItemID: 4,
      storeID: 1,
      name: "Tomato",
      description: "A very fresh tomato",
      stockQty: 10,
      price: 1.99,
      imageUrl: "",
      imageName: ""
    },
    {
      storeItemID: 5,
      storeID: 1,
      name: "Tomato",
      description: "A very fresh tomato",
      stockQty: 10,
      price: 1.99,
      imageUrl: "",
      imageName: ""
    },
  ]); */

  function fetchItems() {
    fetch('http://ec2-13-57-28-56.us-west-1.compute.amazonaws.com:3000/storeItem', {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
        setStoreItems(() => {
            return storeItems.filter(item =>
             item.storeID.includes(storeID) 
            );
         });
        console.log(responseJson);
    })
    .catch((error) => {
        console.log(error)
    })
}

  return (
    <View style = {{backgroundColor: '#FFFFFF', height: height, alignItems: 'center'}}>
        <MaterialCommunityIcons name="chevron-left" color='#575757' size={40} style={styles.backBut} onPress={() => navigation.navigate('HomeScreen') }/>
        <Text style={styles.name}>{storeName}</Text>
        <Text style={styles.description}>{desc}</Text>
        
        <FlatList
          data={storeItems}
          extraData={storeItems}
          numColumns={2}
          keyExtractor={item => item.storeItemID}
          renderItem={({ item }) => (
            <StoreItemComponent storeItem={item} edit={false}/>
          )}
        > 
        </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
    name: {
      marginTop: -40,
      marginHorizontal: 10,
      fontFamily: 'Inter-Regular',
      fontSize: 30,
      fontWeight: 'bold', 
      color: 'black'
    }, 
    backBut: {
      marginTop: 40,
      marginLeft: -400
    },
    description:{
      fontSize: 20, 
      marginTop: 20, 
      marginBottom: 40,
     
    }
});

export default StoreFront;
