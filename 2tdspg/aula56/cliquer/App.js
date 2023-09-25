import { useReducer, useeState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Button, Text, View, TouchableHighlight } from 'react-native';
import imgPizza from './assets/pizza.png'

const estadoInicial = {
  pontos: 9990,
  pontosPorClique: 1
} 

const funcaoReducer = ( estadoAtual,  {type, payload}, lazyInitialization=false ) => { 
  // const {type, payload} = action;
  if (type === "CLIQUE") { 
    return {...estadoAtual, 
        pontos: estadoAtual.pontos + estadoAtual.pontosPorClique};
  } else if (type === "UPGRADE") { 
    if (estadoAtual.pontos >= 200000 && estadoAtual.pontosPorClique < 200) {
      return {pontos: estadoAtual.pontos - 200000, pontosPorClique: 200};
    } else if (estadoAtual.pontos >= 10000 && estadoAtual.pontosPorClique < 100) {
      return {pontos: estadoAtual.pontos - 10000, pontosPorClique: 100};
    } else if (estadoAtual.pontos >= 1000 && estadoAtual.pontosPorClique < 10) {
      return {pontos: estadoAtual.pontos - 1000, pontosPorClique: 10};
    } else if (estadoAtual.pontos >= 100 && estadoAtual.pontosPorClique < 5) {
      return {pontos: estadoAtual.pontos - 100, pontosPorClique: 5};
    }
  }
  // return estadoAtual;
}


export default function App() {
  const [status, dispatch] = useReducer(funcaoReducer, estadoInicial);
  return (
    <View style={{flex: 1, justifyContent: "center",
    alignItems: "center", padding: 20}}>
      <View style={{flex: 1, marginVertical: 30}}>
        <Text>Cliquer</Text>
      </View>
      <View style={{flex: 1, marginVertical: 30}}>
        <Text>Pontos: {status.pontos}</Text>
        <Text>Pontos por clique: {status.pontosPorClique}</Text>
        <Button title="Upgrade" onPress={()=>{
          dispatch({type: "UPGRADE", payload:{}})
        }}/>
      </View>
      <View style={{flex: 2, marginVertical: 30}}>
        <TouchableHighlight onPress={()=>{
          dispatch({type: "CLIQUE", payload:{}})
        }}>
          <Image source={imgPizza} resizeMode="center"/>
        </TouchableHighlight>
      </View>
      <StatusBar hidden={true}/>
    </View>
  );
}
