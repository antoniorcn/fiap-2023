import { Alert, StatusBar, Platform, Button,
  StyleSheet, Text, View, ToastAndroid } from 'react-native';

const estilos = StyleSheet.create({
  view: {
          borderColor: "#FFF",
          marginTop: StatusBar.currentHeight
        },

  viewColor: {
      backgroundColor: "yellow"
  }
});

function apertarBotao() { 
  function botaoOk() {
    ToastAndroid.show("Botao Ok apertado", ToastAndroid.LONG);
  }
  
  function botaoCancela() {
    ToastAndroid.show("Botao Cancel apertado", ToastAndroid.LONG);
  }

  Alert.alert("Botao apertado", "Escolha", 
        [ {
            text: 'Ok',
            onPress: ()=>{botaoOk()},
            style: 'ok',
          },
          {
            text: 'Cancela',
            onPress: ()=>{botaoCancela()},
            style: 'cancel',
          }]);
}



export default function App() {
  return (
    <View style={[estilos.view, estilos.viewColor]}>
        <StatusBar hidden={false} 
              backgroundColor="#F00" barStyle="light-content"/>
        <Text>{Platform.OS}</Text>
        <Button title="Teste" onPress={apertarBotao}/>
    </View>
  );
}