import React, {useState} from 'react';
import { Button, View, Text, TextInput } from "react-native";


const Contador = () => {
  
  const [contador, setContador] = useState(0);
  const [valorTexto, setValorTexto] = useState("0");

  return (
    <View>
        <Text>Contador: {contador}</Text>
        <Button title="Incrementar" onPress={()=>{
          setContador( contador + 2);
        }}/>
        <Button title="Decrementar" onPress={()=>{
          if (contador >= 2) {
            setContador( contador - 2);
          }
        }}/>

        <Text>Novo valor para o contador</Text>
        <TextInput value={valorTexto} onChangeText={(txt)=>{
            setValorTexto(txt);
        }}/>
        <Button title="Definir" onPress={()=>{
          setContador( parseInt(valorTexto) )
        }} />
        
    </View>
  );
}


export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Contador/>
    </View>
  );
}
