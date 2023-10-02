import { useState, useContext } from 'react';
import { Button, View, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo as Icon } from "@expo/vector-icons";
import { Contexto } from './contexto/contexto';
import { useAgendaControl } from './control/useAgendaControl';

const { Navigator, Screen } = createBottomTabNavigator();

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const [nomeErro, setNomeErro] = useState("");
  const [telefoneErro, setTelefoneErro] = useState("");
  const [emailErro, setEmailErro] = useState("");

  const {salvar} = useContext(Contexto);

  return (
    <View style={{flex: 1}}>
      <Text>Formulario</Text>
      <TextInput placeholder="Nome Completo"
        value={nome} onChangeText={setNome}/>
      <Text style={{fontSize: 10, color: "red"}}>{nomeErro}</Text>
      <TextInput placeholder="Telefone"
        value={telefone} onChangeText={setTelefone}/>
      <Text style={{fontSize: 10, color: "red"}}>{telefoneErro}</Text>        
      <TextInput placeholder="Email"
        value={email} onChangeText={setEmail}/>
      <Text style={{fontSize: 10, color: "red"}}>{emailErro}</Text>
      <Button title="Gravar" onPress={()=>{
        salvar( {nome, telefone, email} )
        .then(()=>{})
        .catch((errors) =>{
          errors.inner.forEach(e => {
            console.log(e.message, e.path)
            if (e.path === "nome") { 
              setNomeErro(e.message)
            } else if (e.path === "telefone") { 
              setTelefoneErro(e.message)
            } else if (e.path === "email") { 
              setEmailErro(e.message)
            }
          });
        });
      }}/>    
    </View> )
}


const Listagem = () => {
  const { estado, apagar } = useContext(Contexto);
  return (
    <View style={{flex: 1}}>
      <Text>Listagem</Text>
      {estado.lista.map((item, indice)=>
        <View key={indice} style={{borderWidth: 1, margin: 5}}>
          <Text>Nome: {item.nome}</Text>
          <Text>Telefone: {item.telefone}</Text>
          <Text>Email: {item.email}</Text>
          <Icon name="trash" size={28} onPress={()=>{
            apagar(item);
          }}/>
        </View>
      )}
    </View>
  )
}

export default function App() {
  const control = useAgendaControl();
  return (
    <Contexto.Provider value={ control }>
      <View style={{ flex: 1 }}>
        <Text>Agenda de Contatos</Text>
        <NavigationContainer>
          <Navigator>
            <Screen name="Formulario" component={Formulario}/>
            <Screen name="Listagem" component={Listagem}/>
          </Navigator>
        </NavigationContainer>
      </View>
    </Contexto.Provider>
  );
}
