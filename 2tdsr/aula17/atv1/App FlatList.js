import React, {useState, useEffect} from 'react';
import {Button, FlatList, ScrollView, View, Text, TextInput} from 'react-native';

function Item(props) {
  return (
    <View>
      <Text>Nome: {props.item.nome}</Text>
      <Text>Email: {props.item.email}</Text>
      <Text>Apelido: {props.item.apelido}</Text>
    </View>
  )
}
 
const FormularioSocial = () => {
  const [nome, setNome] = useState("João Silva");
  const [email, setEmail] = useState("joao@teste.com");
  const [apelido, setApelido] = useState("John");
  const [lista, setLista] = useState([]);

  return(
    <View style={{flex: 1, margin: 20}}>
      <View style={{flex: 1, backgroundColor: "lightcyan"}}>
        <Text>Nome Completo</Text>
        {/*
        <TextInput value={tudo.nome} onChangeText={(txt) =>{
          setTudo({ ... tudo, nome: txt })}}/>
        */}
        <TextInput value={nome} onChangeText={setNome}/>
        <Text>eMail</Text>
        <TextInput value={email} onChangeText={setEmail}/>
        <Text>Apelido</Text>
        <TextInput value={apelido} onChangeText={setApelido}/>
        <Button title="Gravar" onPress={()=>{
            const obj = {nome, email, apelido}
            setLista([...lista, obj])
        }}/>
      </View>
      <FlatList style={{flex: 1}} data={lista} 
                renderItem={Item}/>
    </View>
  )
}


export default ()=> {
  return (
    <View style={{flex: 1, backgroundColor: "#FFFFDD"}}>
      <FormularioSocial/>
    </View>
  );
}