import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function ComponenteA(props) {
  return (
    <Text>Componente A {props.nome}</Text>
  );
}

class ComponenteB extends React.Component { 
  constructor(props) { 
    super(props);
  }

  render() { 
    return (
      <Text>Componente B {this.props.nome}</Text>
    );
  }
}


class Principal extends React.Component {

  constructor(props) { 
    super(props)
    this.state = {nome: "Antonio"}
  }

  render() {
    return (
    <View>
      <Text style={{fontSize: 32, margin: 30}}>
        Hello World {this.state.nome}</Text>
      <ComponenteA visivel={true} nome={this.state.nome}/>
      <ComponenteB visivel={true} nome={this.state.nome}/>
      <Button title="Trocar Nome" onPress={
        ()=>{ 
          this.setState({nome: "João Silva"})
          // this.state.nome = "João Silva";
          // alert("Nome: " + this.state.nome);
        }
      }/>
    </View>
    );
  }
}

export default Principal;