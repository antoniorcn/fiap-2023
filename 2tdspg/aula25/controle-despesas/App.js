import React, { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

const {Screen, Navigator} = createBottomTabNavigator();

const Login = (props) => {
  const [email, setEmail] = useState("joao@teste.com");
  const [senha, setSenha] = useState("1234");
  return (
    <View>
      <Text>
        Controle de Despesas - Login
      </Text>
      <Text>e-Mail:</Text>
      <TextInput value={email} onChangeText={setEmail}/>
      <Text>Senha</Text>
      <TextInput value={senha} onChangeText={setSenha}/>

      <Button title="Login" onPress={()=>{
        AsyncStorage.getItem("USUARIOS")
        .then((info)=>{ 
          const usuarios = JSON.parse(info);
          let achado = false
          for( const user of usuarios) { 
            if (user.email === email && 
                user.senha === senha){ 
                  achado = true;
            }
          }
          if (achado) { 
            props.onLogar(email);
            alert("Usuario logado");
          } else {
            props.onLogar(null);
            alert("Usuario ou senha incorretos");
          }

        })
        .catch((err) => alert("Erro ao ler a lista e usuarios"))
      }}/>
      <Button title="Registrar" onPress={()=>{

        AsyncStorage.getItem("USUARIOS")
        .then((info)=>{
          let lista = JSON.parse(info);
          if (lista === null) { 
            lista = [];
          }
          const obj = {email, senha}
          lista.push(obj);
          AsyncStorage.setItem("USUARIOS", JSON.stringify(lista));
        })
        .catch((err)=>{alert("Erro ao acessar a lista de USUARIOS: " + err)})
      }}/>
    </View>
  );
}

const DespesaCadastro = (props) => {
  const [titulo, setTitulo] = useState("Conta de Luz");
  const [categoria, setCategoria] = useState("Residência");
  const [valor, setValor] = useState("350.00");
  const [data, setData] = useState("10/05/2023");
  return (
    <View style={{flex: 1}}>
      <Text>Titulo</Text>
      <TextInput value={titulo} onChangeText={setTitulo}/>
      <Text>Categoria</Text>
      <TextInput value={categoria} onChangeText={setCategoria}/>
      <Text>Valor</Text>
      <TextInput value={valor} onChangeText={setValor}/>
      <Text>Data</Text>
      <TextInput value={data} onChangeText={setData}/>
      <Button title="Gravar" onPress={()=>{
        const obj = {titulo, categoria, valor, data}
        props.onGravar(obj)
      }}/>
    </View>
  )
}

const Item = (props) => 
<View>
  <Text>Titulo: {props.item.titulo} </Text>
  <Text>Categoria: {props.item.categoria} </Text>
  <Text>Preco: {props.item.preco} </Text>
  <Text>Data: {props.item.data} </Text>
</View>

const DespesaLista = (props) =>
<View style={{flex: 1}}>
  <FlatList data={props.lista} renderItem={Item}/>
</View>

const DespesaForm = (props) => 
<View style={{flex: 1}}>
  <Text>Gestão de Despesas</Text>
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name="Cadastro"
      options={{
        tabBarIcon: (iconProps)=>
          <FontAwesome5 name="dollar-sign" {...iconProps} />}}>

          {/*
            size={iconProps.size}
            color={iconProps.color}
          */}
          
      {()=><DespesaCadastro onGravar={props.onGravar}/>}
    </Screen>
    <Screen name="Listagem"
      options={{
        tabBarIcon: (iconProps)=>
          <FontAwesome5 name="list" {...iconProps} />}}>
      {()=><DespesaLista lista={props.lista}/>}
    </Screen>
  </Navigator>
</View>

export default function App() {
  const [despesas, setDespesas] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  

  const gravarDespesa = ( obj ) => {
    console.log("Usuairo Logado: ", usuarioLogado);
    console.log("Despesas: ", despesas);
    console.log("Obj: ", obj);
    const novaLista = [ ...despesas, obj ]
    console.log("Nova Lista: ", novaLista);
    setDespesas( novaLista )
    AsyncStorage.setItem(usuarioLogado, JSON.stringify(novaLista))
  }

  const fazerLogin = ( email ) => { 
    setUsuarioLogado( email )
    if (email !== null) {
      AsyncStorage.getItem(email)
      .then((info)=>{
        let lista = JSON.parse(info)
        if (lista === null ) { 
          lista = []
        }
        setDespesas(lista)
      })
      .catch((err)=>{alert("Erro ao acessar a lista de despesas")})
    }
  }

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        {usuarioLogado !== null ? 
                  <DespesaForm onGravar={gravarDespesa} 
                    lista={despesas}/> : 
                  <Login onLogar={fazerLogin}/>}
      </View>
    </NavigationContainer>
  );
}