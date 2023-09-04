import { useState } from 'react';
import { View } from 'react-native';
import { OutroContexto } from './outroContexto';
import Input from './Input';
import Lista from './Lista';

export default function App() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  const contextoCompartilhado = {
    texto, setTexto, lista, setLista
  }

  return (
    <OutroContexto.Provider value={contextoCompartilhado}>
      <View style={{flex: 1}}>
        <Input/>
        <Lista/>
      </View>
    </OutroContexto.Provider>
  );
}

