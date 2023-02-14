import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Constants from 'expo-constants';

function Principal() {
  const estilos = {
    estilo1: {marginTop: Constants.statusBarHeight},
    estilo2: {borderBottomColor: "red", borderBottomWidth: 2}
  }

  return (
    <View style={estilos.estilo1}>
      <Text>Ola Mundo</Text>
      <Ionicons name="trash" size={32}/>
      <TextInput style={estilos.estilo2}/>
    </View>
  );
}

export default Principal;
