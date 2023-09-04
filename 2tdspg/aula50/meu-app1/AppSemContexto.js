import { Pressable, Text, View } from 'react-native';

const Titulo = () => {
  return (
    <Text style={{
      fontSize: 48, 
      alignSelf: "center"}}>Cabeçalho</Text>
  );
}

const SubTitulo = (props) => { 
  return (
    <Pressable onPress={props.onPressionado}>
      <Text style={{
        fontSize: 32, 
        alignSelf: "center"}}>{props.texto}</Text>
    </Pressable>
  );
}

const Cabecalho = (props) => {
  return (
    <View style={{flex: 1}}>
      <Titulo/>
      <SubTitulo  texto={props.appName} 
                  onPressionado={props.onPressed}/>
    </View>
  )
}

export default function App() {

  const creditos = () => { 
    alert("Desenv. por Antonio")
  }

  return (
    <View style={{flex: 1}}>
      <Cabecalho  appName="Minha App2" 
                  onPressed={creditos}/>
    </View>
  );
}

