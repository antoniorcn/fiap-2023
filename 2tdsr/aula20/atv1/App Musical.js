import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, TextInput, View }
        from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native';

const {Navigator, Screen} = createBottomTabNavigator(); // { Navigator: {}, Screen: {} }

const Cadastrar = (props) => {
  const [marca, setMarca] = useState("");
  const [tipo, setTipo] = useState("");
  const [modelo, setModelo] = useState("");
  const [preco, setPreco] = useState("");

  return (
  <View style={{flex: 1}}>
    <TextInput placeholder="Marca"
      value={marca} onChangeText={setMarca}/>
    <TextInput placeholder="Tipo"
      value={tipo} onChangeText={setTipo}/>
    <TextInput placeholder="Modelo"
      value={modelo} onChangeText={setModelo}/>
    <TextInput placeholder="Preço"
      value={preco} onChangeText={setPreco}/>
    <Button title="Gravar" onPress={()=>{
      const obj = {marca, tipo, modelo, preco};
      props.onAdicionar( obj );
    }}/>
  </View>
  );
}

const ItemView = ( props ) => 
  <View style={{flex: 1}}>
    <Text>Marca: {props.item.marca}</Text>
    <Text>Tipo: {props.item.tipo}</Text>
    <Text>Modelo: {props.item.modelo}</Text>
    <Text>Preço: {props.item.preco}</Text>
  </View>

const Listagem = (props) => 
<View style={{flex: 1}}>
  <FlatList data={props.lista} renderItem={ItemView}/>
</View>

export default function App() {

  const [lista, setLista] = useState([]);

  const adicionar = ( o ) => { 
    setLista([ ...lista, o ]);
  }

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
        </View>
        <View style={{flex: 3}}>
          <Navigator>
              <Screen name="Cadastrar"
                options={{
                  tabBarIcon: (props)=>
                    <MaterialCommunityIcons 
                      {...props}
                      name="trumpet" 
                    />}
              }>
                {()=><Cadastrar onAdicionar={adicionar}/>}
              </Screen>
              <Screen name="Listagem" options={{
                  tabBarIcon: (props)=>
                    <MaterialCommunityIcons name="view-list"
                      {...props}
                    />}
              }>
                {()=><Listagem lista={lista}/>}    
              </Screen>
          </Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}
