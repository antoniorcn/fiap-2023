import React, { useState, useEffect } from 'react';
import { Button, FlatList, Modal, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator();

const Cadastrar = (props) => { 
  const [nome, setNome] = useState("Pudim de Leite");
  const [rendimento, setRendimento] = useState("8 porções");
  const [ingredientes, setIngredientes] = useState("Leite condensado, ovos, leite, açucar para a calda");
  const [modoPreparo, setModoPreparo] = useState("Ferva o leite ...");
  return (
    <View style={{flex:1}}>
      <Text>Nome</Text>
      <TextInput value={nome} onChangeText={setNome}/>
      <Text>Rendimento</Text>
      <TextInput value={rendimento} onChangeText={setRendimento}/>
      <Text>Ingredientes</Text>
      <TextInput value={ingredientes} onChangeText={setIngredientes}/>
      <Text>Modo de Preparo</Text>
      <TextInput value={modoPreparo} onChangeText={setModoPreparo}/>
      <Button title="Gravar" onPress={()=>{
        const obj = {nome, rendimento, ingredientes, modoPreparo};
        props.onGravar(obj);
      }}/>
    </View>
  )
}

const Item = (props) =>
<View style={{flexDirection: "row", borderColor: "cadetblue", 
              borderWidth: 2, margin: 10}}>
  <View style={{flex: 3, flexDirection: "column"}}>
    <Text>ID: {props.item.id}</Text>
    <Text>Nome: {props.item.nome}</Text>
    <Text>Rendimento: {props.item.rendimento}</Text>
    <Text>Ingredientes: {props.item.ingredientes}</Text>
    <Text>Modo de Preparo: {props.item.modoPreparo}</Text>
  </View>
  <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    <MaterialIcons name="delete" size={48} 
          onPress={()=>{props.onRemover(props.item.id)}}/>
  </View>
</View>

const Listagem = (props) => {

  return (
    <View style={{flex: 1}}>
      <FlatList data={props.lista} 
          renderItem={(propsItem)=><Item {...propsItem} onRemover={props.onRemover}/>}/>
    </View>
  );
};

export default function App() { 
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [userName, setUserName] = useState("joao@teste.com"); 
  const [password, setPassword] = useState("1234");
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [listaReceitas, setListaReceitas] = useState([]);
  const [contador, setContador] = useState(1);

  const gravar = ( obj ) => { 
    obj['id'] = contador;
    setContador(contador + 1);
    const lista = [...listaReceitas, obj]
    setListaReceitas(lista)
    AsyncStorage.setItem(usuarioLogado, JSON.stringify(lista));
  }

  const remover = ( id ) => {
    const novaLista = [];
    for (let i = 0; i < listaReceitas.length; i++) { 
      const o = listaReceitas[i];
      if (o.id !== id) { 
        novaLista.push(o);
      }
    }
    setListaReceitas(novaLista);
    AsyncStorage.setItem(usuarioLogado, JSON.stringify(novaLista));
  }

  useEffect( ()=> {  
    AsyncStorage.getItem("USUARIOS")
    .then((info)=>{
      if (!info) {
        alert("Faça seu registro por favor")
        setListaUsuarios([])
      } else { 
        setListaUsuarios(JSON.parse(info))
      }
    })
    .catch((err)=>{
      alert("Erro ao ler a lista de usuarios: ", err)
    })
  }, [])

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Modal visible={!usuarioLogado}>
          <View style={{flex: 1}}>
            <Text>Login</Text>
            <Text>Nome do Usuario</Text>
            <TextInput value={userName} onChangeText={setUserName}/>
            <Text>Senha</Text>
            <TextInput value={password} onChangeText={setPassword}/>
            <Button title="Login" onPress={()=>{
              let achou = false
              for (let i = 0; i < listaUsuarios.length; i++) {
                const item = listaUsuarios[i];
                if (item.userName === userName 
                    && item.password === password) {
                      setUsuarioLogado(userName)
                      setListaReceitas([]);
                      AsyncStorage.getItem(userName)
                      .then((info)=>{
                        if (info) { 
                          setListaReceitas(JSON.parse(info));
                        }
                      })
                      .catch((err)=>{
                        alert("Erro ao carregar a lista de receitas")
                      })
                      achou = true;
                      break;
                }
              }
              if (!achou) { 
                alert("Usuario ou senha estao incorretos")
              }
            }}/>  
            <Button title="Registrar" onPress={()=>{
              console.log("Botao Registrar apertado")
              const obj = {userName, password} 
              const lista = [...listaUsuarios, obj]
              setListaUsuarios(lista)
              AsyncStorage.setItem("USUARIOS", JSON.stringify(lista))
              .then((info)=>{alert("Usuario registrado com sucesso " + info)})
              .catch((err)=>{alert("Erro: " + err)})
              
            }}/>
            <Button title="Ler chaves" onPress={()=>{
              AsyncStorage.getAllKeys()
              .then((info)=>{alert("Chaves: " + info)})
            }}/>
            <Button title="Limpar chaves" onPress={()=>{
              AsyncStorage.clear();
              alert("Chaves Limpas")
            }}/>
          </View>
        </Modal>
        <View style={{flex: 1}}> 
          <Navigator screenOptions={{headerShown: true, headerBackground:
            ()=><View style={{flex: 1, backgroundColor: "lightpink"}}></View>
          }}>
            <Screen options={{tabBarIcon: 
                  (props)=><MaterialIcons name="food-bank" {...props} />}}
              name="Cadastrar">
              {()=><Cadastrar onGravar={gravar} />}
            </Screen>
            <Screen options={{tabBarIcon: 
                  (props)=><MaterialIcons name="format-list-bulleted" {...props} />}}
              name="Listar">
              {()=><Listagem lista={listaReceitas} onRemover={remover}/>}
            </Screen>
          </Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}