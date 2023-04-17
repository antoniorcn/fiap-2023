import React, {useState} from 'react';
import { Button, ImageBackground, StatusBar, Text, View } from 'react-native';
import img from './assets/img1.png';


export default function App() {
  return (
    <View style={{flex: 1,
        backgroundColor: "lightcyan",
        marginTop: StatusBar.currentHeight}}>
      <ImageBackground source={img} style={{flex: 1, 
      justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 48, color: "white",
            backgroundColor: "#DDDDDDAA", padding: 20,
            borderRadius: 20}}>View Principal</Text>
      </ImageBackground>
      <View style={{flex: 2}}>

      </View>
    </View>
  );
}
