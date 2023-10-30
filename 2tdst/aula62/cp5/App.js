import { StatusBar } from 'expo-status-bar';
import React, { useReducer, useContext, createContext } from 'react';
import { FlatList, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { object, string, number } from 'yup';
import axios from 'axios';

const api = axios.create({
  baseURL: "https://fiap-database.firebaseio.com"
})

const ElementoSchema = object({
  sabor: string().required().min(3),
  preco: number().required().min(0),
  tamanho: string().required()
});

const estadoInicial = { 
  entidade : {
    sabor: "",
    preco: "",
    tamanho: ""
  },
  lista : []
}

const contextoInicial = {
  estado: {},
  salvar: ()=>{},
  carregar: ()=>{},
  apagar: ( obj )=>{},
  dispatcher: ( action )=>{},
} 

const Contexto = createContext(contextoInicial);

const funcaoReducer = (estado, {type, payload}) => { 
  const novoEstado = { ...estado };
  if (type === "ALTERAR_CAMPO") { 
    // {campo: "sabor", valor: "Mussarela"}
    novoEstado.entidade = { ...estado.entidade }; 
    novoEstado.entidade[payload.campo] = payload.valor;
    return novoEstado
  } else if (type === "INSERIR_LISTA") { 
    novoEstado.lista = [...estado.lista, payload]
    return novoEstado;
  } else { 
    throw new Error("Tipo indefinido na funcao reducer");
  }
}

const useControl = () => {

  const [estado, dispatcher] = useReducer(funcaoReducer, estadoInicial);

  const salvar = () => { 
    api.post("/elemento.json", estado.entidade)
    .then(()=>{ carregar() } )
    .catch(()=>{ alert("Erro ao salvar o elemento na Lista")});
  }

  const carregar = () => { 
    api.get("/elemento.json")
    .then((resposta)=>{
      for (const chave in resposta.data) { 
        const obj = resposta.data[chave];
        dispatcher({type: "INSERIR_LISTA", payload: obj})
      }
    })
    .catch(()=>{ alert("Erro ao carregar a Lista")});
  }

  const apagar = ( obj ) => { 
    api.delete("/elemento/" + obj.id + ".json")
    .then(()=>{ carregar() } )
    .catch(()=>{ alert("Erro ao apagar o elemento")});
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

  const alterarCampo = (campo, valor) => { 
    dispatcher({type: "ALTERAR_CAMPO", 
          payload: {campo, valor}}) 
  }
  
  return (
    <View style={{flex: 1}}>
      <Text>Sabor: </Text>
      <TextInput value={estado.entidade.sabor}
        onChangeText = { txt=> alterarCampo("sabor", txt) }
      />
      <Text>Preço: </Text>
      <TextInput value={estado.entidade.preco}
        onChangeText = { txt=> alterarCampo("preco", txt) }
      />
      <Text>Tamanho: </Text>
      <TextInput value={estado.entidade.tamanho}
        onChangeText = { txt=> alterarCampo("tamanho", txt) }
      />
      <Button title="Salvar" onPress={()=>salvar()}/>
    </View>
  );
}

const Item = ({item, index}) => { 
  return ( 
    <View style={{margin: 5, borderWidth: 1, flexDirection: "row"}} key={index}>
      <View style={{flexDirection: "column", flex: 3, padding: 3}}>
        <Text>Sabor: {item.sabor}</Text>
        <Text>Preço: {item.preco}</Text>
        <Text>Tamanho: {item.tamanho}</Text>
      </View>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Icon name="trash" size={28} onPress={()=>{}}/>
      </View>
    </View>
  );
}

const Listagem = () => { 
  const {estado, apagar} = useContext(Contexto);
  return (
    <View style={{flex: 2}}>
      <FlatList data={estado.lista} renderItem={Item}/>
    </View>
  );
}

export default function Principal() {

  const control = useControl();

  return (
    <Contexto.Provider value={control}>
      <View style={styles.container}>
        <Text>Pizzaria Na Brasa</Text>
        <Formulario/>
        <StatusBar style="auto" />
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
    justifyContent: 'start-flex',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
});
