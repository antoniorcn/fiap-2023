import { StatusBar } from 'expo-status-bar';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Entypo as Icon } from 'react-native-vector-icons';
import { object, string, number } from 'yup';
import axios from 'axios';

const contextoInicial = {
  estado : {}, 
  salvar : ()=>{},
  carregar : ()=>{}, 
  apagar : ()=>{},
  dispatcher : ()=>{},
}

const Contexto = createContext(contextoInicial);

const ElementoSchema = object({
  sabor: string().required().min(3),
  preco: number().required().min(0),
  tamanho: string().required()
})

const estadoInicial = { 
  lista : [],
  entidade: {
    sabor: "",
    tamanho: "",
    preco: ""
  }
}

const funcaoReducer = (estado, {type, payload}) => { 
  const novoEstado = {...estado}
  // {lista: [], entidade : {} }
  novoEstado.entidade = {...estado.entidade};
  if (type === "ATUALIZAR_CAMPO") { 
    // payload = {campo: "tamanho", valor: "Grande"}
    novoEstado.entidade[payload.campo] = payload.valor;
    return novoEstado;
  } else if (type === "ADICIONAR_OBJETO") {
    // payload = {sabor: "", preco: "", tamanho: ""}
    novoEstado.lista.push( payload );
    return novoEstado;
  } else if (type === "LIMPAR_CAMPOS") { 
    novoEstado.entidade = {...estadoInicial.entidade};
    return novoEstado;
  }
  throw new Error("Tipo indefinido na funcaoReducer()")
}

const useControl = () => { 
  const [estado, dispatcher] = useReducer(funcaoReducer, estadoInicial);
  const api = axios.create({
    baseURL: "https://fiap-2023-2tdspg-16bb6-default-rtdb.firebaseio.com/"
  })

  useEffect(()=>{
    carregar();
  }, []
  );

  const salvar = () => { 
    api.post("/elemento.json", estado.entidade)
    .then(()=>{
        alert("Objeto salvo com sucesso");
        dispatcher({type: "LIMPAR_CAMPOS"});
    })
    .catch((erro)=>{alert("Erro ao salvar o objeto " + erro)});
  }

  const carregar = () => {
    api.get("/elemento.json")
    .then((response)=>{
      // for(const obj of response.data) { 
      //   dispatcher({type: "ADICIONAR_OBJETO", payload: obj});
      // }
      for(const chave in response.data) { 
        const obj = response.data[chave];
        console.log("Obj: ", JSON.stringify(obj));
        obj.id = chave
        dispatcher({type: "ADICIONAR_OBJETO", payload: obj});
        console.log("Lista: ", estado.lista); 
      }
    })
    .catch((erro)=>{alert("Erro ao carregar os objetos " + erro)})
  }

  const apagar = (obj) => { 
    api.delete(`/elemento/${obj.id}.json`)
    .then((response)=>{
      carregar();
    })
    .catch((erro)=>{alert("Erro ao apagar o objeto " + erro)});
  }

  return {
    estado, 
    salvar,
    carregar, 
    apagar,
    dispatcher
  }
}

const Formulario = () => { 
  const {estado, salvar, dispatcher} = useContext(Contexto);
  return ( 
    <View style={{flex: 1, padding: 5}}> 
      <Text>Sabor</Text>
      <TextInput value={estado.entidade.sabor}
        onChangeText={( txt )=>{
          dispatcher({type: "ATUALIZAR_CAMPO", 
                      payload: {campo: "sabor", valor: txt}})
        }}
      />
      <Text>Preço</Text>
      <TextInput value={estado.entidade.preco}
        onChangeText={( txt )=>{
          dispatcher({type: "ATUALIZAR_CAMPO", 
                      payload: {campo: "preco", valor: txt}})
        }}
      />
      <Text>Tamanho</Text>
      <TextInput value={estado.entidade.tamanho}
        onChangeText={( txt )=>{
          dispatcher({type: "ATUALIZAR_CAMPO", 
                      payload: {campo: "tamanho", valor: txt}})
        }}
      />
      <Button title="Salvar" onPress={salvar}/>
    </View>
  )
}

const Item = ({item, index}) => {
  return (
    <View style={{borderWidth: 2, margin: 5, padding: 5}} key={index}>
      <Text>Sabor: {item.sabor}</Text>
      <Text>Tamanho: {item.tamanho}</Text>
      <Text>Preço: {item.preco}</Text>
      <Icon name="trash" size={28} onPress={()=>{}}/> 
    </View>
  );
}


const Listagem = () => { 
  const {estado, apagar} = useContext(Contexto)
  return (
    <View style={{flex: 3, padding: 5}}>
      <Text>Pizzas</Text>
      <FlatList data={estado.lista} renderItem={Item}/>
    </View>
  )
}


export default function Principal() {
  const control = useControl();
  return (
    <Contexto.Provider value={control}>
      <View style={styles.container}>
        <Text>Pizzaria Na Brasa</Text>
        <StatusBar style="auto" />
        <Formulario/>
        <Listagem/>
      </View>
    </Contexto.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
  },
});
