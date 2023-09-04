import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { MeuContexto } from './contexto';
import { useState, useContext } from 'react';

const Alerta = (props) => {
  return (
    <MeuContexto.Consumer>
      {(compart) => 
        <Button title="Alerta" onPress={compart.atividadeBotao}/>
      }
    </MeuContexto.Consumer>
  );
}

const MostrarTextosLista = (props) => { 
  const valor = useContext(MeuContexto);
  return ( 
    <View style={{flex: 1}}>
      {valor.lista.map( 
          (valor, indice) => 
          <Text key={indice}>{valor}</Text>)
      }
    </View>
  )
}

const Cabecalho = (props) => { 
  return ( 
    <View>
      <Text style={{fontSize: 18, alignSelf: "center"}}>
        {props.texto}
      </Text>
      <Alerta onBotaoPressionado={props.onBotaoPressionado}/>
    </View>
  )
}

export default function App() {

  const [lista, setLista] = useState([
    "Linha 1 com contexto", "Linha 2 contexto", "Linha 3 contexto"
  ]);
  
  const atividadeBotao = () => { 
    alert("Botao pressionado por meio do contexto");
  }

  const compartilhado = {
    lista,
    setLista,
    atividadeBotao
  }

  return (
    <MeuContexto.Provider value={compartilhado}>
      <View style={{flex: 1, paddingTop: 50}}>
        <Cabecalho texto="Minha Aplicação com Maps" 
          onBotaoPressionado={atividadeBotao}/>
        <MostrarTextosLista lista={lista}/>
        <MapView style={{flex: 1}}
          initialRegion={{
            latitude: -23.573858842413735, 
            longitude: -46.62317375961893,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }}>
        </MapView>
      </View>
    </MeuContexto.Provider>      
  );
}
