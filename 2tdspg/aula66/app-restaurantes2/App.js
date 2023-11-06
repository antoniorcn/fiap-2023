import { StatusBar } from 'expo-status-bar';
import React, { useState, useReducer, 
        createContext, useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {object, string, number} from 'yup';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from 'axios';
import { FlatList } from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';
import MapView from 'react-native-maps';

const estadoInicio = {
  lista: []
}

const contextoInicial = { 
  id: "", 
  setId: ( valor )=>{},
  nome: "", 
  setNome: ( valor )=>{},
  tipo: "", 
  setTipo: ( valor )=>{}, 
  classificacao: "", 
  setClassificacao: ( valor )=>{},
  estado: {}, 
  dispatcher: ( action ) => {},
  salvar: ()=>{}
}

const Contexto = createContext( contextoInicial );

const funcaoReducer = (estado, {type, payload}) => {
  if (type === "LISTA_LIMPAR") { 
    return { lista : []}
  } if (type === "LISTA_ADICIONAR") { 
    return { lista : [ ... estado.lista, payload] }
  }
  throw new Exception("Tipo invalido na funcaoReducer");
} 

const {Screen, Navigator} = createBottomTabNavigator();

const RestauranteSchema = object({ 
  nome: string().required().min(3),
  tipo: string().required(),
  classificacao: number().required().min(0)
})

const persistenciaRestAPI = () => { 
  const api = axios.create({
    baseURL: "https://fiap-restaurantes-default-rtdb.firebaseio.com"
  })

  const salvarAPI = ( obj ) => {
    return api.post("/restaurantes.json", obj);
  }

  const alterarAPI = ( id, obj ) => {
    console.log("alterando obj com id: ", id);
    console.log("Objeto: ", obj);
    return api.put("/restaurantes/" + id + ".json", obj);
  }

  const apagarAPI = ( obj ) => {
    console.log("ApagarAPI Executado: ", obj);
    return api.delete("/restaurantes/" + obj.id + ".json");
  }

  const carregarAPI = () => {
    return api.get("/restaurantes.json")
  }


  return {
    salvarAPI, 
    apagarAPI,
    alterarAPI,
    carregarAPI
  }
}

const useRestauranteControl = () => { 
  const [id, setId] = useState(null);
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [classificacao, setClassificacao] = useState("");

  const [estado, dispatcher] = useReducer(funcaoReducer, estadoInicio);

  const {salvarAPI, alterarAPI, apagarAPI, carregarAPI} = persistenciaRestAPI();

  useEffect(
    ()=>{ carregar() }
    , []);

  const limparCampos = () => {
    setId(null);
    setNome("");
    setTipo("");
    setClassificacao("");
  }

  const salvar = () => {
    const obj = {nome, tipo, classificacao}
    if (id) {
      alterarAPI( id, obj )
      .then(()=>{
        alert("Restaurante alterado com sucesso");
        limparCampos();
        carregar(); 
      })
      .catch((error)=>{
        console.log("Erro ao Alterar ", error);
        alert("Erro ao Alterar");       
      })

    } else { 
      salvarAPI( obj )
      .then(()=>{
        alert("Restaurante salvo com sucesso");
        limparCampos();
        carregar();
      })
      .catch((error)=>{
        console.log("Erro ao Salvar ", error);
        alert("Erro ao Salvar");
        
      })
    }
  }

  const apagar = ( obj ) => {
    console.log("Apagar executado: ", obj)
    apagarAPI( obj )
    .then(()=>{
      carregar();
    })
  }

  const alterar = ( obj ) => {
    setId(obj.id);
    setNome(obj.nome);
    setTipo(obj.tipo);
    setClassificacao(obj.classificacao);
  }

  const carregar = () => {
    carregarAPI()
    .then((response) => {
      dispatcher({type: "LISTA_LIMPAR"});
      for (const chave in response.data) { 
        const obj = response.data[chave];
        obj.id = chave;
        dispatcher({type: "LISTA_ADICIONAR", payload: obj})
      }
    })
    .catch((erro) => { 
      console.log("Erro ao carregar os dados: ", erro);
      alert("Erro ao carregar dados")
     })
  }

  return { 
    id, setId,
    nome, setNome,
    tipo, setTipo, 
    classificacao, setClassificacao,
    estado, dispatcher,
    salvar,
    apagar,
    alterar,
    carregar
  }
}

const Formulario = () => { 
  // let nomeBotao = "Cadastrar";
  // if (id !== null) { 
  //   nomeBotao = "Salvar"
  // }
  const {id, nome, setNome, tipo, setTipo,
    classificacao, setClassificacao,
    salvar} = useContext(Contexto);

  const nomeBotao = id ? "Salvar" : "Cadastrar";

  return (
    <View style={{flex: 1}}>
      <TextInput placeholder="Nome do Restaurante"
        value={nome} onChangeText={setNome}
      />
      <TextInput placeholder="Tipo da comida do restaurante"
        value={tipo} onChangeText={setTipo}
      />
      <TextInput placeholder="Classificacao"
        value={classificacao} onChangeText={setClassificacao}
      />
      <Button title={nomeBotao} onPress={salvar}/>
    </View>
  )
}

const Item = (props) => {
  return ( 
    <View key={props.index}>
        <Text>Nome do restaurante: {props.item.nome} </Text>
        <Text>Tipo: {props.item.tipo} </Text>
        <Text>Classificacao: {props.item.classificacao}</Text>
        <Icon name="trash" size={28} onPress={()=>{
          props.apagar(props.item)
        }}/>
        <Icon name="edit" size={28} onPress={()=>{
          props.alterar(props.item)
        }}/>
    </View>
  )
} 

const Listagem = () => { 
  const {estado, apagar, alterar} = useContext(Contexto);
  return (
    <View style={{flex: 1}}>
      <FlatList data={estado.lista} renderItem={
        (propsItem) => <Item {...propsItem} 
                            apagar={apagar} alterar={alterar}/>
      }/>
    </View>
  )
}

const Mapa = () => { 
  <View style={{flex: 1}}>
    <Text>Mapa da cidade</Text>
    <MapView style={{width: "100%", height: "100%"}} />
  </View>
}

export default function App() {
  const control = useRestauranteControl();

  return (
    <Contexto.Provider value={control}>
      <NavigationContainer>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <Text>Aplicaçao Restaurantes</Text>
            <StatusBar style="auto" />
          </View>
          <View style={{flex: 3}}>
              <Navigator>
                <Screen name="Cadastro" component={Formulario} />
                <Screen name="Listagem" component={Listagem}/>
                <Screen name="Mapa" component={Mapa}/>
              </Navigator>
            </View>
        </View>
      </NavigationContainer>
    </Contexto.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
