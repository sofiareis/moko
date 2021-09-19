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

import {
 
  BarChart,
 
} from 'react-native-chart-kit'


function Footprint({ navigation }) {
  const { height } = Dimensions.get('window');
  
  return (
    <View style = {{backgroundColor: '#FFFFFF', height: height}}>
        <Text style={styles.name}>Carbon Footprint</Text> 

        <View>
        <BarChart
        // style={graphStyle}
        data={barData}
        width={Dimensions.get('window').width}
        height={height}
        yAxisLabel="CO2"
        chartConfig={{
          backgroundColor: "#f7f2f5",
          backgroundGradientFrom: "#f0eeeb",
          backgroundGradientTo: "#a8198c",
          decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
        }}
          /> 
        </View>  
    </View>

    
  );
}

const barData = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      data: [20, 45, 28]
    }
  ]
};

const styles = StyleSheet.create({
    name: {
        marginTop: 20,
        marginLeft: 40,
        marginHorizontal: 10,
        fontFamily: 'Inter-Regular',
        fontSize: 35
      }
});

export default Footprint;
