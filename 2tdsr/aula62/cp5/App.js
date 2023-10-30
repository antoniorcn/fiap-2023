import { StatusBar } from 'expo-status-bar';
import React, { useContext, useReducer, useContext, createContext } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { object, string, number } from 'yup';
import axios from 'axios';

const api = axios.create({
  baseURL: "https://fiap-database.firebaseio.com"
})

const contextoInicial = { 
  estado : {},
  salvar : ()=>{},
  carregar : ()=>{},
  apagar : ()=>{},
  dispatcher : ()=>{} 
}

const estadoInicial = { 
  entidade : {
    sabor: "",
    preco: "",
    tamanho: ""
  },
  lista: []
}

const Contexto = createContext( contextoInicial );

const funcaoReducer = (estado, {type, payload}) => {
  const novoEstado = {...estado};
  if (type === "ENTIDADE_ALTERAR") { 
    // payload = {campo: "sabor", valor: "Mussarela"}
    novoEstado.entidade = {...estado.entidade}
    novoEstado.entidade[payload.campo] = payload.valor;
  } else if (type === "LISTA_ADICIONAR") { 
    // payload = {sabor: "Calabresa", tamanho: "grande", preco: "39.90"}
    novoEstado.lista = [...estado.lista, payload]
  } else { 
    throw new Error("Tipo invalido na funcao Reducer")
  }
  return novoEstado;
}

const ElementoSchema = object({
  sabor: string().required().min(3),
  preco: number().required().min(0),
  tamanho: string().required()
})

const useControl = () => { 

  const [estado, dispatcher] = useReducer(funcaoReducer, estadoInicial);

  const salvar = () => { 
    api.post("/elemento.json", estado.entidade)
    .then(()=>carregar())
    .catch(()=>alert("Erro ao salvar o objeto"))
  }

  const carregar = () => { 
    api.get("/elemento.json")
    .then((response)=>{
      for (let chave in response.data) { 
        const obj = response.data[chave];
        obj.id = chave;
        dispatcher({type: "LISTA_ADICIONAR", payload: obj});
      }
    })
    .catch(()=>alert("Erro ao carregar a lista"))
  }

  const apagar = ( obj ) => { 
    api.delete("/elemento/" + obj.id + ".json")
    .then(()=>carregar())
    .catch(()=>alert("Erro ao apagar o objeto"))
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
  const {estado, dispatcher} = useContext(Contexto);

  const alterarCampo = (campo, valor) => {
    dispatcher({type: "ENTIDADE_ALTERAR", payload: {campo, valor}})
  } 

  return ( 
    <View style={{flex: 1, padding: 10}}>
      <Text>Sabor: </Text>
      <TextInput value={estado.entidade.sabor}
        onChangeText={( txt )=> alterarCampo("sabor", txt)} />
      <Text>Tamanho: </Text>
      <TextInput value={estado.entidade.tamanho}
        onChangeText={( txt )=> alterarCampo("tamanho", txt)} />
      <Text>Preço: </Text>
      <TextInput value={estado.entidade.preco}
        onChangeText={( txt )=> alterarCampo("preco", txt)} />
      <Button title="Salvar" onPress={salvar}/>
    </View>
  )
}

const Item = ( {item, index} ) => {
  return (
    <View styles={{borderWidth: 1, margin: 5, flexDirection: "row"}} key={index}>
      <View style={{flex: 3}}>
        <Text>Sabor: {item.sabor}</Text>
        <Text>Tamanho: {item.tamanho}</Text>
        <Text>Preço: {item.preco}</Text>
      </View>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Icon name="trash" size={28} onPress={()=>{}}/>
      </View>
    </View>
  )
}

const Listagem = () => { 
  const {estado} = useContext(Contexto);
  return ( 
    <View style={{flex: 2, padding: 5}}>
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
    backgroundColor: '#ddd',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
});
