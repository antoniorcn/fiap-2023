import {useContext} from 'react';
import { Pressable, Text, View } from 'react-native';
import {MeuContexto} from './contexto.js';

const Titulo = () => {
  return (
    <MeuContexto.Consumer>
      { (contexto) => 
        <Text style={{
          fontSize: 48, 
          alignSelf: "center"}}>{contexto.titulo}</Text>
      }
    </MeuContexto.Consumer>
  );
}

const SubTitulo = () => { 
  const contexto = useContext(MeuContexto);
  return (
    <Pressable onPress={contexto.onPressionado}>
      <Text style={{
        fontSize: 32, 
        alignSelf: "center"}}>{contexto.subTitulo}</Text>
    </Pressable>
  );
}

const Cabecalho = () => {
  return (
    <View style={{flex: 1}}>
      <Titulo/>
      <SubTitulo/>
    </View>
  )
}

export default function App() {

  const creditos = () => { 
    alert("Desenv. por Antonio")
  }

  const contextoCompartilhado = {
    titulo: "Cabeçalho (CTX)",
    subTitulo: "Minha App 2 (Contexto)",
    onPressionado: creditos
  }

  return (
    <MeuContexto.Provider value={contextoCompartilhado}>
      <View style={{flex: 1}}>
        <Cabecalho/>
      </View>
    </MeuContexto.Provider>
  );
}

