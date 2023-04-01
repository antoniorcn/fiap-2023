import React, {useState} from 'react';
import { Button, View, Text } from "react-native";

function MeuComponente(props) {
  return (
    <Text style={{
      backgroundColor: props.fundo,
      alignSelf: "stretch"}}> {props.texto} </Text>
  )
}

function Contador(props) {
  // let lista = useState(0);
  // let numero = lista[0];
  // let setNumero = lista[1];
  // 0       1
  const [numero, setNumero] = useState(-100);
  return (
    <View>
      <Text>Valor: {numero}</Text>
      <Button title="Incrementar" onPress={()=>{
        setNumero(1000);
      }}/>
    </View>
  );
}

export default () =>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MeuComponente fundo="yellow" texto="Meu"/>
      <MeuComponente fundo="cyan" texto="Componente"/>
      <MeuComponente fundo="burlywood" texto="feito com Função"/>
      <Contador/>
    </View>
  