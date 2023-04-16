import React, {useState, useEffect} from 'react';
import {Button, SectionList, ScrollView, View, Text, TextInput} from 'react-native';

function Item(props) {
  return (
    <View>
      <Text>Nome: {props.item.nome}</Text>
      <Text>Email: {props.item.email}</Text>
      <Text>Apelido: {props.item.apelido}</Text>
    </View>
  )
}

function CabecalhoSecao(props) {
  return (
    <View style={{backgroundColor: "brown"}}>
      <Text>{props.section.title}</Text>
    </View>
  )
}
 
const FormularioSocial = () => {
  const [nome, setNome] = useState("João Silva");
  const [email, setEmail] = useState("joao@teste.com");
  const [apelido, setApelido] = useState("John");
  const [tipo, setTipo] = useState("trabalho")
  const [listaFamilia, setlistaFamilia] = useState([]);
  const [listaFaculdade, setlistaFaculdade] = useState([]);
  const [listaTrabalho, setlistaTrabalho] = useState([]);

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
        <Text>Tipo</Text>
        <TextInput value={tipo} onChangeText={setTipo}/>
        <Button title="Gravar" onPress={()=>{
            const obj = {nome, email, apelido, tipo}
            if (tipo === "familia") {
              setlistaFamilia([...listaFamilia, obj])
            } else if (tipo === "faculdade") { 
              setlistaFaculdade([...listaFaculdade, obj])
            } else { 
              setlistaTrabalho([...listaTrabalho, obj])
            }
        }}/>
      </View>
      <SectionList style={{flex: 1}} 
          sections={[ {title: "familia", data: listaFamilia}, 
                      {title: "faculdade", data: listaFaculdade}, 
                      {title: "trabalho", data: listaTrabalho} ]}

                renderItem={Item}
                renderSectionHeader={CabecalhoSecao}/>
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