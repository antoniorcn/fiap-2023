import React, {useState, useEffect} from 'react';
import {Button, SectionList, StatusBar, Text, TextInput, View} from 'react-native';

function Cabecalho(props) {
  return (
    <View>
      <Text>{props.section.title}</Text>
    </View>
  );
}

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
  const [sabor, setSabor] = useState("X-Burguer");
  const [qtd, setQtd] = useState("2");
  const [preco, setPreco] = useState("25.50");
  const [tipo, setTipo] = useState("1");
  const [listaCarne, setListaCarne] = useState([]);
  const [listaFrango, setListaFrango] = useState([]);

  useEffect(
    ()=>{console.log("Quantidade: ", qtd)}, []
  )

  return (
    <View>
      <StatusBar backgroundColor={"#FFFFDD"}/>
      <View style={{flex: 1}}>
        <Text>Hamburgueria</Text>
        <Text>Sabor</Text>
        <TextInput value={sabor} onChangeText={setSabor}/>
        <Text>Preco</Text>
        <TextInput value={preco} onChangeText={setPreco}/>
        <Text>Quantidade</Text>
        <TextInput value={qtd} onChangeText={setQtd}/>
        <Text>Tipo</Text>
        <TextInput value={tipo} onChangeText={setTipo}/>
        <Button title="Salvar" onPress={()=>{
          const obj = {sabor, preco, qtd, tipo}
          if (tipo === "1") {
            setListaCarne([...listaCarne, obj])
          } else { 
            setListaFrango([...listaFrango, obj])
          }
        }}/>
      </View>
      <View style={{flex: 1}}>
          <SectionList 
            sections={[
              {title: "Hamburgueres de Carne", data: listaCarne},
              {title: "Hamburgueres de Frango", data: listaFrango},
            ]}
            renderItem={Item}
            renderSectionHeader={Cabecalho}/>
      </View>
    </View>
  );
  
}

export default () =>
<View style={{flex: 1, justifyContent: "center", 
    alignItems: "center", backgroundColor: "#FFFFDD"}}>
    <HamburguerForm/>
</View>