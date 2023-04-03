import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
const Botao = (props) => {
                                      //             0                    1
  // const lista = useState("Texto"); //  [  ponteiroParaConsulta,  funcaoAlterar  ]
  // const a = lista[0];
  // const setA = lista[1];
  const [valor, setValor] = useState("Texto");
  return (
    <View style={{backgroundColor: props.corFundo,
                  alignSelf: "stretch"}}>
      <Text onPress={()=>{
        alert("Valor A: "  + valor);
      }}>{props.texto}</Text>
      <TextInput value={valor} onChangeText={(txt)=>{
          setValor(txt);
      }}/>
    </View>
  );
}
export default () =>
<View style={{flex: 1, justifyContent: "center", 
              alignItems: "center"}}>
  <Botao texto="Botão 1" corFundo="blue"/>
  <Botao texto="Botão 2 - Personalizado" 
          corFundo="burlywood"/>
  <Botao texto="Meu Botão" corFundo="royalblue"/>
</View>
