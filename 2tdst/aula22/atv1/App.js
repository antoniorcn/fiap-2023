import React from 'react';
import {Button, View, Text} from 'react-native';

const PainelB = (props) => {
  return (
    <View style={{flex: 1, margin: 50,
              backgroundColor: "lightpink",
              justifyContent: "flex-start",
              alignItems: "stretch"}}>
      <Text style={{fontSize: 32}}>Painel B</Text>
      <Text>{props.onNumero}</Text>
      <Button title="Avisar"
        onPress={()=>{props.onAvisar();}}/>
    </View>
  )
}

const PainelA = (props) => {
  return (
    <View style={{flex: 1, margin: 50,
              backgroundColor: "lightyellow",
              justifyContent: "flex-start",
              alignItems: "stretch"}}>
      <Text style={{fontSize: 32}}>Painel A</Text>
      <Text>{props.onNumero}</Text>
      <Button title="Avisar" 
              onPress={()=>{props.onAvisar();}}/>
      <PainelB onNumero={props.onNumero}
          onAvisar={()=>{props.onAvisar();}}/>
    </View>
  )
}

const App = () => {
  const numero = 213456;

  const avisar = () => { 
    alert("Avisado...");
  }

  return (
    <View style={{flex: 1, justifyContent: "flex-start",
                    alignItems: "stretch",
                    marginTop: 25,
                    backgroundColor: "lightcyan"}}>
      <Text style={{fontSize: 32}}>Principal</Text>
      <Text>{numero}</Text>
      <Button title="Apertar" onPress={()=>{avisar()}}/>
      <PainelA onNumero={numero} onAvisar={avisar}/>
    </View>
  )
}

export default App;