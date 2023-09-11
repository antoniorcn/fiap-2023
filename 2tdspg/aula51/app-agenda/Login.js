import { useContext, useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { Contexto } from './contexto';

const Login = () => { 
    return (
      <View style={{flex: 1}}>
        <Text>Email</Text>
        <TextInput/>
        <Text>Senha</Text>
        <TextInput/>
        <Button title="Logar"/>
      </View>
    )
  }
  
export { Login }