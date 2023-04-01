import React, {useState} from 'react';
import { Button, View, Text } from "react-native";

function MeuComponente(props) {
  return(
    <Text style={{
      backgroundColor: props.corFundo,
      alignSelf: "stretch"}}>
        {` Texto ${props.children} com cor de fundo ${props.corFundo}`}
    </Text>
  )
}


function Incrementador() { 
  // let teste = useState(0);  // ( 0 -> Valor padrao da variavel na memoria )
  // let numero = teste[0]; // [ indice 0 é um ponteiro para acessar o valor na memoria ]
  // let setNumero = teste[1]; // [ indice 1 é uma função para alterar o valor na memoria ]
  const [numero, setNumero] = useState(0);
  return (
    <View>
      <Text>Valor: {numero}</Text>
      <Button title="Incrementar" onPress={()=>{
        setNumero( numero + 1 );
      }}/>
    </View>
  )
}

export default () => 
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Incrementador/>
  </View>

