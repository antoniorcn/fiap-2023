import { useState, useReducer, useContext, createContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { NavigationContainer }  from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo as Icon } from '@expo/vector-icons' 
const { Screen, Navigator } = createBottomTabNavigator();

const estadoInicial = {
  lista: [],
  counter: 0
} 

const initialContext = { 
  state: {}, 
  dispatcher: ()=>{}
}

const Contexto = createContext(initialContext);

const funcaoDispatcher = (currState, {type, payload}, 
                          lazyInicialization=false) => { 
      if (type === "SALVAR") { 
        obj = {...payload, id: currState.counter};
        return {...currState, 
            counter: currState.counter + 1,
            lista: [...currState.lista, obj]};
      } else if (type === "APAGAR") { 
        const novaLista = currState.lista.filter((item, indice)=>{
          // if (item.id !== payload.id) { 
          //   return true;
          // } else { 
          //   return false;
          // }
          return item.id !== payload.id;
        })
        return {... currState, lista: novaLista}
      }
      return currState;
}

const Formulario = () => { 
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const ctx = useContext(Contexto)

  return (
    <View>
      <Text>Formulario</Text>
      <Text>Nome Completo:</Text>
      <TextInput value={nome} onChangeText={setNome}/>
      <Text>Telefone:</Text>
      <TextInput value={tel} onChangeText={setTel}/>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail}/>
      <Button title="Salvar" onPress={()=>{
        ctx.dispatcher({type: "SALVAR", payload:{nome, tel, email}})
      }}/>
    </View>
  )
}

const Listagem = () => { 

  const ctx = useContext(Contexto);
  const lista = ctx.state.lista;

  return (
    <View>
      <Text>Listagem</Text>
      {lista.map( (item, indice)=>
        <View key={indice}>
          <Text>{item.id}</Text>
          <Text>{item.nome}</Text>
          <Text>{item.tel}</Text>
          <Text>{item.email}</Text>
          <Icon name="trash" size={28}
            onPress={()=>{
              ctx.dispatcher({type: "APAGAR", payload: {
                id: item.id
              }})
            }}/>
        </View>
      )}
    </View>
  )
}

export default function App() {

  const [state, dispatcher] = useReducer(funcaoDispatcher, estadoInicial);
  
  return (
    <Contexto.Provider value={{
      state, dispatcher
    }}>
      <View style={{flex:1}}>
        <Text>Agenda de Contatos</Text>
        <NavigationContainer>
          <Navigator>
            <Screen name="Formulario" component={Formulario}/>
            <Screen name="Listagem" component={Listagem}/>
          </Navigator>
        </NavigationContainer>
      </View>
    </Contexto.Provider>
  );
}