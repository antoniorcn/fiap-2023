import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Button, Text, TextInput, View }
        from 'react-native';

export default function App() {

  return (
      <View style={{flex: 1,
            justifyContent: "space-around"}}>
        <Button title="Gravar X" onPress={()=>{

          const numeros = [1, 3, 5, 7, 9, 11];

          AsyncStorage.setItem("X", JSON.stringify(numeros))
              .then((info)=>{alert("Chave X salva com sucesso");})
              .catch((err)=>{alert("Erro ao salvar: " + err)});
        }}/>

        <Button title="Gravar Y" onPress={()=>{
          AsyncStorage.setItem("Y",
              "Não se faz prova em papel")
              .then((info)=>{alert("Chave Y salva com sucesso");})
              .catch((err)=>{alert("Erro ao salvar: " + err)});
        }}/>

        <Button title="Ler X" onPress={()=>{
          AsyncStorage.getItem("X")
          .then((info)=>{
            const lista = JSON.parse(info)
            alert("Chave X: " + lista[2])
          })
          .catch((err)=>{alert("Erro ao ler: " + err)})
        }}/>

        <Button title="Ler Y" onPress={()=>{
          AsyncStorage.getItem("Y")
          .then((info)=>{alert("Chave Y: " + info)})
          .catch((err)=>{alert("Erro ao ler: " + err)})
        }}/>        

        <Button title="Todas as Chaves" onPress={()=>{
          AsyncStorage.getAllKeys()
          .then((info) => {alert("Chaves: " + info)})
          .catch((err)=>{alert("Erro ao ler as chaves: " + err)})
        }}/>

        <Button title="Remover X" onPress={()=>{
          AsyncStorage.removeItem("X")
          .then(() => {alert("Chave X removida")})
          .catch((err)=>{alert("Erro ao remover chave X: " + err)})
        }}/>

        <Button title="Remover Y" onPress={()=>{
          AsyncStorage.removeItem("Y")
          .then(() => {alert("Chave Y removida")})
          .catch((err)=>{alert("Erro ao remover chave Y: " + err)})
        }}/>        

        <Button title="Limpa Tudo" onPress={()=>{
          AsyncStorage.clear()
          .then(() => {alert("Memoria Limpa")})
          .catch((err)=>{alert("Erro ao limpar a memoria: " + err)})
        }}/>
      </View>
  );
}
