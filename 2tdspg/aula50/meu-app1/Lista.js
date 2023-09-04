import React, { useContext } from "react";
import { OutroContexto } from "./outroContexto";
import { ScrollView, Text } from "react-native";

const Lista = () => { 
    const contexto = useContext(OutroContexto);
    return (
      <ScrollView style={{flex: 1}}>
      {
        contexto.lista.map( (texto, indice) => 
          <Text key={indice}>{texto}</Text>
        )
      }
      </ScrollView>
    );
  }

export default Lista;