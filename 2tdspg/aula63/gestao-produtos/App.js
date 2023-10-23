import { StatusBar } from 'expo-status-bar';
import { useReducer, useContext, createContext } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useProdutoControl } from './control/produtoControl'; 
import { Contexto } from './contexto/contexto';
import { funcaoReducer, estadoInicial, DEFINIR_PRODUTO } from './control/produtoReducer.js'

const Formulario = () => { 
  const {salvar, estado, dispatcher} = useContext(Contexto);
  return (
    <View style={{flex: 1,
      backgroundColor: "lightyellow"
    }}>
      <Text>Nome:</Text>
      <TextInput value={estado.produto.nome}
        onChangeText={ (txt)=>{  
          dispatcher({type: DEFINIR_PRODUTO,
            payload: {...estado.produto, nome: txt}
          })
        }}/>
      <Text style={{fontSize: 10, color: "red"}}>{estado.produtoErros.nome}</Text>
      <Text>Quantidade:</Text>
      <TextInput value={estado.produto.quantidade}
        onChangeText={ (txt)=>{  
          dispatcher({type: DEFINIR_PRODUTO,
            payload: {...estado.produto, quantidade: txt}
          })
        }}
      />
      <Text style={{fontSize: 10, color: "red"}}>{estado.produtoErros.quantidade}</Text>
      <Text>Preço:</Text>
      <TextInput value={estado.produto.preco}
        onChangeText={ (txt)=>{  
          dispatcher({type: DEFINIR_PRODUTO,
            payload: {...estado.produto, preco: txt}
          })
        }}
      />
      <Text style={{fontSize: 10, color: "red"}}>{estado.produtoErros.preco}</Text>
      <Button title="Salvar" onPress={()=>{
        salvar();
      }}/>
    </View>
  )
}

const ProdutoItem = ( props ) => { 
  return ( 
    <View style={{borderWidth: 1, margin: 5}}>
      <Text>Nome: {props.item.nome} </Text>
      <Text>Quantidade: {props.item.quantidade} </Text>
      <Text>Preço: {props.item.preco} </Text>
    </View>
  )
}

const Listagem = () => { 
  const {estado, dispatcher} = useContext(Contexto);
  return (
    <View style={{
      flex: 1,
      backgroundColor: "lightcyan"
    }}>
      <FlatList data={estado.listaProdutos} 
        renderItem={ProdutoItem}
          style={{flex: 1}}/>
    </View>
  )
}


export default function App() {
  const [estado, dispatcher] = useReducer(funcaoReducer, 
    estadoInicial);
  const control = useProdutoControl(estado, dispatcher);    
  const contextoAtual = { 
    estado,
    dispatcher,
    ...control
  }
  return (
    <Contexto.Provider value={contextoAtual}>
      <SafeAreaView style={styles.container}>
        <Text>Gestão de Produtos</Text>
        <StatusBar style="auto" />
        <Formulario/>
        <Listagem/>
      </SafeAreaView>
    </Contexto.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
