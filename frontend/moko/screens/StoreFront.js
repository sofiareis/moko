import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
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

  const isFocused = useIsFocused();

  const [storeItems, setStoreItems] =  useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  function fetchItems() {
    fetch(`http://ec2-13-57-28-56.us-west-1.compute.amazonaws.com:3000/store_items/by_store/${storeID}`, {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
        setStoreItems(responseJson);
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
          style={{marginBottom: 40}}
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
      marginBottom: 20,
    }
});

export default StoreFront;
