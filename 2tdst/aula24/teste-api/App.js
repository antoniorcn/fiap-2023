import React, { useState, useEffect } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native';
import axios from 'axios';

const api = axios.create({baseURL: "https://fiap-2023-2tdst-default-rtdb.firebaseio.com"})

const {Screen, Navigator} = createBottomTabNavigator();

const Cadastro = (props) => {
  const [nome, setNome] = useState("Queijo Mussarela");
  const [tipo, setTipo] = useState("Frios");
  const [preco, setPreco] = useState("36.00");
  const [quantidade, setQuantidade] = useState("200gr");
  return (
    <View style={{flex: 1}}>
      <Text>Cadastrar Alimento</Text>
      <Text>Nome</Text>
      <TextInput value={nome} onChangeText={setNome}/>
      <Text>Tipo</Text>
      <TextInput value={tipo} onChangeText={setTipo}/>
      <Text>Preço</Text>
      <TextInput value={preco} onChangeText={setPreco}/>
      <Text>Quantidade</Text>
      <TextInput value={quantidade} onChangeText={setQuantidade}/>
      <Button title="Salvar" onPress={()=>{
        const obj = {nome, tipo, preco, quantidade}
        props.onSalvar( obj );
      }}/>
    </View>
  );
}

const Item = (props) => {
  console.log("Apagar: ", props);
  return (
    <View style={{flexDirection: "row", 
                  borderColor: "black", borderWidth: 2, 
                  margin: 3}}>
      <View style={{flex: 7}}>
        <Text>Nome: {props.item.nome}</Text>
        <Text>Tipo: {props.item.tipo}</Text>
        <Text>Preco: {props.item.preco}</Text>
        <Text>Quantidade: {props.item.quantidade}</Text>
      </View>
      <View style={{flex: 3, backgroundColor: "transparent", 
                    flexDirection: "row", padding: 5}}>
        <TouchableHighlight onPress={()=>{
          props.onApagar(props.item.id);
        }}>
          <MaterialIcons name="delete" size={48}/>
        </TouchableHighlight>
        <MaterialIcons name="edit" size={48}/>
      </View>
    </View>
  )
}

const Listagem = (props) => { 
  return (
    <View style={{flex: 1}}>
      <FlatList data={props.lista} renderItem={
        (propsItem)=><Item {...propsItem} onApagar={props.onApagar}/>}/>
    </View>
  )
}

export default function App() {

  const [logado, setLogado] = useState(true);
  const [listaAlimento, setListaAlimento] = useState([]);
  const [contador, setContador] = useState(1);

  useEffect( ()=>{
    api.get("/alimentos.json")
    .then((info)=>{
      const lista = [];
      for (let chave in info.data) {
        const obj = info.data[chave];
        obj["id"] = chave;
        lista.push(obj);
      }
      setListaAlimento(lista);
    })
  }, [])


  const salvar = ( obj ) => {
    setListaAlimento( [ ...listaAlimento, obj] );
    api.post("/alimentos.json", obj)
    .then((info)=>{
      const id = info.data.name;
      obj["id"] = id;
    })
  }

  const apagar = ( id ) => { 
    const novaLista = [];
    for (let i = 0; i < listaAlimento.length; i++) { 
      const obj = listaAlimento[i];
      if (obj.id !== id) { 
        novaLista.push(obj);
      }
    }
    setListaAlimento(novaLista);
    api.delete("/alimentos/" + id + ".json")
    .then((info)=>{alert("Registro apagado")})
  }

  const Login = () => {
    const [email, setEmail] = useState("antonio@teste.com");
    const [senha, setSenha] = useState("1234");
    return (
      <View style={{flex:1}}>
        <Text>Login</Text>
        <Text>Email: </Text>
        <TextInput value={email} onChangeText={setEmail}/>
        <Text>Senha: </Text>
        <TextInput value={senha} onChangeText={setSenha}/>
        <Button title="Login" onPress={()=>{
          AsyncStorage.getItem("USUARIOS")
          .then((info)=>{
            let lista = []
            let achou = false;
            if (info) { 
              lista = JSON.parse(info)
            }
            for (let i = 0; i < lista.length; i++) {
              const obj = lista[i];
              if (obj.email === email && 
                  obj.senha === senha) {
                  setLogado(true);
                  achou = true;
                  break; 
              }
            }
            if (!achou) {
              alert("Usuario ou senha estão incorretos");
            }
          })
        }}/>
        <Button title="Registrar" onPress={()=>{
          AsyncStorage.getItem("USUARIOS")
          .then((info)=>{
            let lista = []
            const obj = {email, senha}
            if (info) { 
              lista = JSON.parse(info)
            }
            lista.push(obj)
          })
          .catch((err)=>{alert("Erro ao ler a lista de usuários: " + err)})
        }}/>        
      </View>
    )
  }

  const Principal = () => {
    return (
      <View style={{flex:1}}>
        <Navigator>
          <Screen options={{
            tabBarIcon: ({size, color})=><MaterialIcons name="food-bank" 
                                              size={size} 
                                              color={color}/>}} 
            name="Cadastrar">
            {()=><Cadastro onSalvar={salvar}/>}
          </Screen>
          <Screen options={{
            tabBarIcon: ({size, color})=><MaterialIcons name="format-list-bulleted" 
                                              size={size} 
                                              color={color}/>}} 
            name="Listagem">
            {()=><Listagem lista={listaAlimento} onApagar={apagar}/>}
          </Screen>
        </Navigator>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <View style={{flex:1}}>
        {(!logado) ? <Login/> : <Principal/>}
      </View>
    </NavigationContainer>
  );
}