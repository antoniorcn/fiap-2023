import React, { useState, useEffect } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native';

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
        <Text>Id: {props.item.id}</Text>
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

  const [logado, setLogado] = useState(false);
  const [listaAlimento, setListaAlimento] = useState([]);
  const [contador, setContador] = useState(1);

  // const lerStorage = async (chave) => { 
  //   try {
  //     return await AsyncStorage.getItem(chave)
  //   } catch (e) { 
  //     throw new Error("Erro ao ler o Storage chave: " + chave);
  //   }
  // }

  // const gravarStorage = async (chave, valor) => { 
  //   try {
  //     await AsyncStorage.setItem(chave, valor.toString())
  //   } catch (e) { 
  //     throw new Error("Erro ao gravar o Storage chave: " + chave);
  //   }
  // }

  // const id = lerStorage("ID");
  // alert("ID: " + id);

  // gravarStorage("ID_ALIMENTO", 1)
  // console.log("ID_ALIMENTO: ", lerStorage("ID_ALIMENTO"));
  // console.log(lerStorage("ID"))
  // AsyncStorage.getItem("ID")
  // .then((info)=>{alert("Info: " + info)})
  // .catch((err)=>{alert("Error: " + err)})

  
  useEffect( ()=>{
    // linha 1
    // linha 2
    // linha 3
    // linha 4
    // linha 5
  }, [])


  const salvar = ( obj ) => { 
    obj['id'] = contador;
    setContador(contador + 1);
    setListaAlimento( [ ...listaAlimento, obj] );
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
            AsyncStorage.setItem("USUARIOS", JSON.stringify(lista))
          })
          .catch((err)=>{alert("Erro ao ler a lista de usuários: " + err)})
        }}/>
        <Button title="Ler todas as chaves" onPress={()=>{
          AsyncStorage.getAllKeys()
          .then((info)=>{
            alert("Chaves: " + info)
          })
          .catch((err)=>{
            alert("Erro: " + err)
          })
        }}/>
        <Button title="Ler USUARIOS" onPress={()=>{
          AsyncStorage.getItem("USUARIOS")
          .then((info)=>{
            alert("Usuarios: " + info)
          })
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