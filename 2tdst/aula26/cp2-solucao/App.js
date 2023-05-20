import React, {useState} from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createBottomTabNavigator();

const login = (user, pass) => {
  AsyncStorage.getItem("USUARIO")
  .then((dados)=>{
      const o = JSON.parse(dados);
      if (dados["email"] == user && dados["senha"] == pass) { 
        alert("Usuario logado com sucesso");
      } else { 
        alert("Usuario ou senha incorretos");
      }
  })
  .catch(()=>{})
  let a = 2;
}


const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View>
      <Text>Java Café</Text>
      <Text>Bebidas</Text>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password</Text>
      <TextInput value={senha} onChangeText={setSenha}/>
      <Button title="Login" onPress={()=>{login(email, senha)}}/>
    </View>
  )
}

const Cadastro =(props) => {
  const [nome, setNome] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [preco, setPreco] = useState("");
  return (
    <View style={{flex: 1}}>
      <Text>Cadastro</Text>
      <Text>Nome da Bebida</Text>
      <TextInput value={nome} onChangeText={setNome}/>
      <Text>Tamanho</Text>
      <TextInput value={tamanho} onChangeText={setTamanho}/>
      <Text>Preço</Text>
      <TextInput value={preco} onChangeText={setPreco}/>
      <Button title="Salvar" onPress={()=>{
        const obj = {nome, tamanho, preco};
          // {"nome": nome, "tamanho": tamanho, "preco": preco};
        props.onInserir(obj);
      }}/>
    </View>
  );
}

const Listagem =(props) =>
<View style={{flex: 1}}>
  <Text>Listagem</Text>
</View>

export default function App() {
  const [lista, setLista] = useState([]);

  const inserir = ( o ) => {
    const novaLista = [...lista, o];
    setLista(novaLista);
    AsyncStorage.setItem("LISTA", JSON.stringify(novaLista));
  }


  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <View>
          <Text>Java Café Bebidas</Text>
        </View>
        <View style={{flex: 1}}>
          <Navigator>
            <Screen name="Cadastro">
              {()=><Cadastro onInserir={inserir}/>}
            </Screen>

            <Screen name="Listagem">
                {()=><Listagem lista={lista}/>}
            </Screen>
          </Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}
