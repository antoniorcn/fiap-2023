import React from "react";
import { Button, View, TextInput } from 'react-native';
import { OutroContexto } from "./outroContexto";

const Input = () => {
    return (
      <OutroContexto.Consumer>
        { (contexto)=>
          <View style={{flex: 1}}>
            <TextInput placeholder="Digite um texto" 
              value={contexto.texto} onChangeText={contexto.setTexto}/>
            <Button title="Salvar" onPress={()=>{
              contexto.setLista([...contexto.lista, contexto.texto])
            }}/>
          </View>
        }
      </OutroContexto.Consumer>
    );
  }
  

  export default Input;