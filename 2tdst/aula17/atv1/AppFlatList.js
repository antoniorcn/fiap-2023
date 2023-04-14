import React, {useState, useEffect} from 'react';
import {Button, FlatList, Text, TextInput, View} from 'react-native';

function Item(props) {
  return (
    <View>
      <Text> Sabor: {props.item.sabor} </Text>
      <Text> Preço: {props.item.preco} </Text>
      <Text> Quantidade: {props.item.qtd} </Text>
    </View>
  );
}


const HamburguerForm  = () => {
  const [sabor, setSabor] = useState("");
  const [qtd, setQtd] = useState("");
  const [preco, setPreco] = useState("");
  const [lista, setLista] = useState([]);

  return (
    <View>
      <View style={{flex: 1}}>
        <Text>Hamburgueria</Text>
        <Text>Sabor</Text>
        <TextInput value={sabor} onChangeText={setSabor}/>
        <Text>Preco</Text>
        <TextInput value={preco} onChangeText={setPreco}/>
        <Text>Quantidade</Text>
        <TextInput value={qtd} onChangeText={setQtd}/>
        <Button title="Salvar" onPress={()=>{
          const obj = {sabor, preco, qtd}
          setLista([...lista, obj])
        }}/>
      </View>
      <View style={{flex: 1}}>
          <FlatList data={lista} renderItem={Item}/>
      </View>
    </View>
  );
  
}

export default () =>
<View style={{flex: 1, justifyContent: "center", 
    alignItems: "center", backgroundColor: "#FFFFDD"}}>
    <HamburguerForm/>
</View>