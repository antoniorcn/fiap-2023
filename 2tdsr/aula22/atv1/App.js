import React from 'react';
import {Button, View, Text} from 'react-native';

const Principal = () => { 
  return (
    <View style={{flexDirection: "column", flex: 1,
                  justifyContent: "flex-start",
                  alignItems: "stretch" }}>
      <View style={{backgroundColor: "blue", width: 50, height: 50}}/>
      <View style={{backgroundColor: "red", width: 50, height: 50}}/>
      <View style={{backgroundColor: "green", width: 50, height: 50}}/>
    </View>
  )
}

export default Principal;