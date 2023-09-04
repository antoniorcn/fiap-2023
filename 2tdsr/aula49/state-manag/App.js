import { useState, useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { NossoContexto } from './contexto';
import Corpo from './Corpo';

const Alerta = (props) => { 
  {/*<Button title="Alerta" onPress={props.onPressionado}/>*/}
  return (
    <NossoContexto.Consumer>
      {
        (obj)=>
        <Button title="Alerta" onPress={obj.acionarAlerta} />
      }
      
    </NossoContexto.Consumer>
  )
}

const SubTitulo = (props) =>
  <Text style={{fontSize: 18, alignSelf: "center"}}>
    {props.texto}
  </Text>


// const Corpo = (props) => { 
//   return (
//     <NossoContexto.Consumer>
//       {(info) => 
//         <View style={{flex: 1}}>
//           {info.lista.map( 
//             (valor, indice) => 
//               <Text key={indice}>{valor}</Text>
//           )}
//         </View>
//       }
//     </NossoContexto.Consumer>
//   );
// }


// const Corpo = (props) => { 
//   const obj = useContext(NossoContexto);
//   return (
//     <View>
//       {obj.lista.map( (texto, indice) => 
//         <Text key={indice}>{texto}</Text>)}
//     </View>
//   );
// }



const Cabecalho = (props) => { 
  return (
    <View>
      <Text style={{fontSize: 28, alignSelf: "center"}}>
        {props.titulo}
      </Text>
      <SubTitulo texto={props.subTitulo}/>
      <Alerta onPressionado={props.onAlerta}/>
    </View>
  )
}

export default function App() {

  const [lista, setLista] = useState([

      "Linha 1", "Linha 2", "Linha 3"

  ]);

  const alerta = () => {
    alert("Mensagem....");
  }

  const valor = { 
    lista,
    setLista,
    acionarAlerta: alerta
  }
    
  return (
    <NossoContexto.Provider value={valor}>
      <View style={{flex: 1, padding: 50}}>
        <Cabecalho titulo="Minha Aplicação"
          subTitulo="Texto do Subtitulo" onAlerta={alerta}/>
        <Corpo/>
      </View>
    </NossoContexto.Provider>
  );
}