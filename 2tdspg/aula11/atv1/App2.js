import React from 'react';
import {View, Text} from 'react-native';

const Botao = (props) => 
<View style={{alignItems: "center", 
        margin: 50, backgroundColor: props.cor}}>
    <Text style={{fontSize: 24, color: "white"}}
          onPress={()=>{
            alert("Props: " + JSON.stringify(props));
          }}>{props.title}</Text>
</View>

export default () => 
<View style={{marginTop: 30}}>
    <Text>Minha Aplicação</Text>
    <Botao title="Apertar" cor="green"/>
    <Botao title="Apertar-me" cor="blue"/>
</View>