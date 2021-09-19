import { throwStatement } from '@babel/types';
import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';
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
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function HomeScreen({ navigation }) {

  const { height } = Dimensions.get('window');
  const [search, setSearch] = useState('');
  const [stores, setStores] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [radius, setRadius] = useState(5);
  const isFocused = useIsFocused();

  const [tags, setTags] = useState([]);
  const [tagItems, setTagItems] = useState([]);

  useEffect(() => {
    fetchStores();
    fetTags();
  }, [isFocused]);


  function fetchStores() {
      fetch('http://ec2-13-57-28-56.us-west-1.compute.amazonaws.com:3000/stores', {
          method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJson) => {
          setStores(responseJson);
          setListItems(responseJson);
          console.log(responseJson);
      })
      .catch((error) => {
          console.log(error)
      })
  }

  function fetTags() {
    fetch('http://ec2-13-57-28-56.us-west-1.compute.amazonaws.com:3000/tags', {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
        setTags(responseJson);
        setTagItems(responseJson);
        console.log(responseJson);
    })
    .catch((error) => {
        console.log(error)
    })
}

  function updateListItems(search) {
    setSearch(search);
    setListItems(() => {
       return stores.filter(item =>
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase())
        );
    });
  }


  return (
    <View style = {{backgroundColor: '#FFFFFF', height: height}}>

    <View style = {{flexDirection: 'row'}}>
        <Image style = {styles.name} source={require('../images/Logo_Final.png')} />
        <MaterialCommunityIcons name="map-marker" color= '#575757' size= {32} style={styles.locationIcon}/>
        <Text style ={styles.locationText}>Radius: {radius}km</Text>
    </View>
    <View style = {{flexDirection: 'row'}}>
        <TextInput
            style={styles.searchBar}
            onChangeText={(search) => updateListItems(search)}
            placeholder = 'Search'
          >
        </TextInput>
        <MaterialCommunityIcons name="close-circle" color='#575757' size={30} style={styles.searchIcon}/>
    </View>
    <View style = {styles.scrowl}>
        <FlatList
            horizontal
            data={tagItems}
            extraData={tagItems}
            keyExtractor={item => item.tagID}
            renderItem={({item}) => (
                <TouchableOpacity>
                    <View style = {styles.tagRectangle}>
                        <Text style = {styles.tagName}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            )}
            />
    </View>
        <FlatList
          data={listItems}
          extraData={listItems}
          keyExtractor={item => item.description}
          renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('StoreFront', { storeName: item.name, desc: item.description })}>
                <View style = {styles.vendorRectangle}>
                    <Text style = {styles.vendorName}>{item.name}</Text>
                    <View style = {{flexDirection: 'row', marginTop: 10}}>
                        <Image style = {styles.image} source={require('../images/peppers.png')} />
                        <Text style = {styles.vendorDescription}>{item.description}</Text>
                    </View>
                </View>
              </TouchableOpacity>
          )}
        />
  </View>
  );
}

const styles = StyleSheet.create({
    name: {
        marginTop: 35,
        marginLeft: 40,
        marginHorizontal: 10,
        fontFamily: 'Inter-Light',
        fontSize: 40
    },
    searchBar: {
        borderRadius: 10,
        backgroundColor: '#F1EFEF',
        width: "90%",
        height: 50,
        marginTop: 20,
        marginLeft: 25,
        fontSize: 20,
        fontFamily: 'Inter-Light',
        paddingLeft: 30,
    },
    searchIcon: {
        marginTop:30,
        marginLeft: -50
    },
    locationIcon: {
        marginTop: 40,
        marginLeft: 30
    },
    locationText: {
        marginTop: 45,
        marginLeft: 5,
        fontSize: 20
    },
    tagRectangle: {
        height: 45,
        paddingHorizontal: 12,
        borderRadius: 10,
        borderColor: '#4C6D41',
        borderWidth: 1.5,
        marginTop: 10,
        alignItems: 'center',
        marginHorizontal: 10
    },
    tagName: {
       fontSize:20,
       alignSelf: 'center',
       paddingTop: 8,
       color: '#4C6D41'
    },
    vendorRectangle: {
        height: 122,
        width: '90%',
        borderTopColor: '#87B676',
        borderBottomColor: '#87B676',
        borderLeftColor: '#FFFFFF',
        borderRightColor: '#FFFFFF',
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 10
    },
    scrowl: {
        //flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        paddingBottom: 8,
        paddingTop: 8
    },
    container: {
        flex: 1,
        paddingTop: 22
       },
    item: {
         padding: 10,
         fontSize: 18,
         height: 44,
       },
    vendorName: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    vendorDescription: {
        fontSize: 18,
        padding: 10
    },
    image: {
        width: 100,
        height: 70,
    }

});

export default HomeScreen;
