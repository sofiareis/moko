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
  const [user, setUser] = useState('');
  const [stores, setStores] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [radius, setRadius] = useState(5);
  const [withinRadius, setWithinRadius] = useState([]);
  const isFocused = useIsFocused();
  const [colorChange, setColorChange] = useState([
      false, false, false, false, false, false, false, false, false, false
  ]);

  const [tags, setTags] = useState([]);
  const [tagItems, setTagItems] = useState([]);

  useEffect(() => {
    fetchStores();
    fetTags();
    fetchUser();
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

  function fetchUser() {
    fetch('http://ec2-13-57-28-56.us-west-1.compute.amazonaws.com:3000/users', {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
        setUser(responseJson);
        console.log(responseJson);
    })
    .then(() => updateRadiusSearch(5)) // default radius is 5km
    .catch((error) => {
        console.log(error)
    })
  }

  function updateListItems(search) {
    setSearch(search);
    setListItems(() => {
       return stores.filter(item =>
        withinRadius.contains(item) &&
        (item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase()))
        );
    });
  }

  function updateRadiusSearch(radius) {
    fetch('http://ec2-13-57-28-56.us-west-1.compute.amazonaws.com:3000/stores/radius', {
        method: 'GET',
        body: JSON.stringify({
          address: user.address,
          radius: radius
        })
    })
    .then(response => response.json())
    .then(responseJson => {
      setWithinRadius(responseJson);
    })
    .then(() => {
      // update the list of stores
      setListItems(() => {
         return stores.filter(item =>
          withinRadius.contains(item) &&
          (item.description.toLowerCase().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase()))
          );
      });
    });
  }

  function changeColor(index) {
    var temp = [...colorChange];
    temp[index] = !temp[index];
    setColorChange(temp);
  }

  return (
    <View style = {{backgroundColor: '#FFFFFF', height: height}}>

    <View style = {{flexDirection: 'row'}}>
        <Image style = {styles.name} source={require('../images/Logo_Final.png')} />
        <MaterialCommunityIcons name="map-marker" color= '#575757' size= {32} style={styles.locationIcon}/>
        <Text style ={styles.locationText}>Radius:</Text>
        <TextInput
          style={styles.radiusBox}
          onChangeText={(radius) => updateRadiusSearch(radius)}
          keyboardType="numeric"
          placeholder = '5'
        >
        </TextInput>
        <Text style={styles.locationText}>km</Text>
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
                <TouchableOpacity style = {colorChange[item.tagID - 1] ? styles.selectedTagRectangle : styles.tagRectangle}
                                    onPress={()=> changeColor(item.tagID - 1)}
                >
                    <Text style = {colorChange[item.tagID - 1] ? styles.selectedTagName : styles.tagName }>{item.name}</Text>
                </TouchableOpacity>
            )}
            />
    </View>
        <FlatList
          data={listItems}
          extraData={listItems}
          keyExtractor={item => item.description}
          renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('StoreFront', { storeName: item.name, desc: item.description, storeID: item.storeID })}>
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
    radiusBox: {
      width: 40,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F1EFEF',
      borderRadius: 7,
      marginTop: 35,
      marginLeft: 5,
      paddingBottom: 0,
      fontSize: 15
    },
    searchIcon: {
        marginTop:30,
        marginLeft: -50
    },
    locationIcon: {
        marginTop: 40,
        marginLeft: 15
    },
    locationText: {
        marginTop: 50,
        marginLeft: 5,
        fontSize: 15,
        fontWeight: 'bold'
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
    selectedTagRectangle:{
        height: 45,
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor: '#4C6D41',
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
    selectedTagName: {
        fontSize:20,
        alignSelf: 'center',
        paddingTop: 8,
        color: '#FFFFFF'
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
        alignItems: 'center',
        marginTop: 10,
        alignContent: 'center',
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
        //padding: 10,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginRight: 10
    },
    image: {
        width: 100,
        height: 70,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }

});

export default HomeScreen;
