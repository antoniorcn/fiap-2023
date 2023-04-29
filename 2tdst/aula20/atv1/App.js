import React, {useState} from 'react';
import { Button, FlatList, ImageBackground, 
  Text, View } from 'react-native';
import ASyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: "space-around"}}>
      <Button title="Gravar A"  onPress={()=>{
        ASyncStorage.setItem("A", "Texto da Chave A")
      }}/>
      <Button title="Gravar B"  onPress={()=>{
        ASyncStorage.setItem("B", "Texto da Chave B")
      }}/>      
      <Button title="Gravar Lista"  onPress={()=>{
        const listaNumeros = [1, 2, 3, 9, 8, 7, 4, 5, 6, 0];
        ASyncStorage.setItem("NUMEROS", JSON.stringify(listaNumeros))
      }}/>            
      <Button title="Ler"  onPress={()=>{
        // Promisse
        ASyncStorage.getItem("A")
        .then((info)=>{alert("Lido com sucesso: " + info)})
        .catch((err)=>{alert("Erro ao ler: " + err)})
      }}/>
      <Button title="Ler Lista"  onPress={()=>{
        // Promisse
        ASyncStorage.getItem("NUMEROS")
        .then((info)=>{
          const l = JSON.parse(info);
          alert("Lido com sucesso: " + l[4])
        })
        .catch((err)=>{alert("Erro ao ler: " + err)})
      }}/>
      <Button title="Todas Chaves" onPress={()=>{
        ASyncStorage.getAllKeys()
        .then((info)=>{alert("All Keys: " + info)})
      }}/>
      <Button title="Remover Chave B" onPress={()=>{
        ASyncStorage.removeItem("B")
        .then(()=>{alert("Removido ")})
      }}/>
      <Button title="Limpar todas as chaves" onPress={()=>{
        ASyncStorage.clear()
        .then((info)=>{alert("Chaves Limpas ")})
      }}/>
    </View>
  );
}
