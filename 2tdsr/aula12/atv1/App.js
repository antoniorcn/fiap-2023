import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native';
import {View, Text, StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
  textoBotao : {fontSize: 24, color: "white", margin: 30}
});

function pressionado() {
  alert("Botão apertado...");
}

class Botao extends React.Component {
  constructor(props) {
    super(props);
    // props == {texto: "Aperte-me"}

  }

  render() {
    return(
      <TouchableOpacity onPress={()=>{
        alert("Botão pressionado Arrow Function");
      }}>
        <View style={{backgroundColor: this.props.cor}}>
          <Text style={estilos.textoBotao}>
            {this.props.texto}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}


export default () =>
  <View style={{marginTop: 50}}>
    <Text>Aplicação de teste de props</Text>
    <Botao texto="Aperte-me" cor="blue"/>
    <Botao texto="Aperte este botão" cor="red"/>
    <Botao texto="Pressione" cor="lightpink"/>
  </View>