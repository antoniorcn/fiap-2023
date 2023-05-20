import React, {useState} from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const {Screen, Navigator} = createBottomTabNavigator();

const login = (user, pass) => {
    AsyncStorage.getItem("USUARIO")
    .then((dados)=>{
      // "{email: 'antonio@teste.com', senha:'1234'}"
      const o = JSON.parse(dados)
      if (o["email"] === user && o["senha"] === pass) { 
        alert("Usuario logado");
      } else {
        alert("Usuário ou senha incorretos");
      }
    })
    .catch(()=>{})
    let a = 10;
    console.log(a);
    let b = 20;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View>
      <Text>Login</Text>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail}/>
      <Text>Password</Text>
      <TextInput value={senha} onChangeText={setSenha}/>
      <Button title="Login" onPress={()=>{
        login(email, senha)
      }}/>
    </View>
  )
}

const Cadastro = (props) => { 
  const [nome, setNome] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [preco, setPreco] = useState("");
  return (
    <View>
      <Text>Cadastro</Text>
      <Text>Nome da Bebida</Text>
      <TextInput value={nome} onChangeText={setNome}/>
      <Text>Tamanho</Text>
      <TextInput value={tamanho} onChangeText={setTamanho}/>
      <Text>Preço</Text>
      <TextInput value={preco} onChangeText={setPreco}/>
      <Button title="Salvar" onPress={()=>{
        // const o = {"nome": nome, "tamanho": tamanho, "preco": preco}
        const o = {nome, tamanho, preco};
        props.onInserir(o);
      }}/>
    </View>
  )
}

const Listagem = (props) => { 
  return (
    <View>
      <Text>Listagem</Text>
    </View>
  )
}

export default function App() {

  const [lista, setLista] = useState([]);

  const inserir = ( obj ) => { 
    const novaLista = [...lista, obj];
    setLista(novaLista);
    AsyncStorage.setItem("LISTA", novaLista);
  }

  return (
      <View style={{flex: 1}}>
        <NavigationContainer>
        <View style={{flex: 1}}>
          <Text>Java Cafe</Text>
        </View>
        <View style={{flex: 3}}>
          <Navigator>
            <Screen name="Cadastro">
              {()=><Cadastro onInserir={inserir}/>}
            </Screen>
            <Screen name="Listagem">
              {()=><Listagem lista={lista}/>}
            </Screen>
          </Navigator>
        </View>
        </NavigationContainer>
      </View>
  );
}
