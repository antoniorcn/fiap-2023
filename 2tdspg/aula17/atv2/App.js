import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';

const Contador = () =>{
  const [numero, setNumero] = useState(0);

  return (
    <View style={{flex: 1, justifyContent: "center", 
                  alignItems: "center"}}>
      <Text>Numero: {numero}</Text>
      <Button title="Incrementar" onPress={()=>{
        setNumero(numero + 1);
      }}/>
      <Button title="Decrementar"/>
    </View>
  );
}

export default () =>
<View style={{flex: 1, justifyContent: "center", 
              alignItems: "center"}}>
  <Contador/>
</View>