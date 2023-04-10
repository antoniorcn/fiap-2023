import React, {useState, useEffect} from 'react';
import { Button, View, Text } from "react-native";
import axios from 'axios';

const api = axios.create({baseUrl:
  "https://api.openweathermap.org/data/2.5/weather?appid=a38ed348035dc2b02bc94d58b067a600&lang=pt&units=metric&q=Sao+Paulo,br"});

const App = () => {
  const [numero, setNumero] = useState(10);
  const [numero2, setNumero2] = useState(0);

  console.log("Componente construido/atualizado");
  // Atividade

  // function componentDidUpdate() {
  //   console.log("componentDidUpdate() - acionado");
  // }
  useEffect(()=>{
    console.log("Componente atualizado")
  }, [numero])


  // function componentDidMount() {
  //   console.log("componentDidMount() - acionado")
  // }
  useEffect(()=>{
    console.log("Componente montado")
    api.get("/")
    .then((dados)=>{
      alert("Dados: " + JSON.stringify(dados))
    })
    .catch((erro)=>{
      alert("Erro: " + erro)
    })
    setNumero(15);
  }, [])

  return (
    <View
      style={{
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Numero: {numero}</Text>
      <Button title="Incrementar" onPress={()=>{
        setNumero(numero + 1);
      }}/>
      <Text>Numero 2: {numero2}</Text>
      <Button title="Incrementar 2" onPress={()=>{
        setNumero2(numero2 + 1);
      }}/>
    </View>
  );
}

export default App;
