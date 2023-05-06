import React from 'react';
import {Button, View, Text} from 'react-native';

const ComponenteB = (props) => {
  return (
    <View style={{flex: 1, justifyContent: "flex-start",
    backgroundColor: "lightyellow", padding: 20}}>
      <Text style={{fontSize: 32}}>Componente B</Text>
      <Text>{props.numeroCompA}</Text>
      <Button title="Avisar" onPress={props.onAvisar}/>
    </View>
  )
}

const ComponenteA = (props) => {
  return (
    <View style={{flex: 1, justifyContent: "flex-start",
    backgroundColor: "lightcyan", padding: 30}}>
      <Text style={{fontSize: 32}}>Componente A</Text>
      <Text>{props.numeroPrincipal}</Text>
      <Button title="Avisar" onPress={()=>{props.onAvisar()}}/>
      <ComponenteB numeroCompA={props.numeroPrincipal}
                onAvisar={props.onAvisar}/>
    </View>
  )
}

const Principal = () => { 
  const numero = 3.1415;

  const avisar = () => { 
    alert("Função avisar invocada");
  }

  return (
    <View style={{flex: 1, justifyContent: "flex-start",
    backgroundColor: "lightpink", padding: 30}}>
      <Text style={{fontSize: 32}}>Principal</Text>
      <Text>{numero}</Text>
      <Button title="Avisar" onPress={()=>{avisar()}}/>
      <ComponenteA numeroPrincipal={numero} onAvisar={avisar}/>
    </View>
  )
}

export default Principal;