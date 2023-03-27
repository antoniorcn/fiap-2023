import React from 'react';
import { Button, StyleSheet, Text,
          TouchableOpacity, View }
  from 'react-native';

class BotaoIncrementador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {numero: 5};
  }

  render() {
    return(
      <TouchableOpacity onPress={()=>{
          this.setState({numero: this.state.numero + 1})
      }}>
        <View style={{backgroundColor: this.props.cor,
          justifyContent: "center", alignItems: "center",
          padding: 10, margin: 10,
          elevation: 3,
          shadowColor: "#000",
          shadowRadius: 5,
          shadowOffset: {width: 3, height: 3},
          }}>
          <Text style={{fontSize: 26,
            color: "white"}}>{this.props.texto + " "}
            {this.state.numero}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


export default () =>
  <View style={{marginTop: 50}}>
    <Text>Teste de Botão Estilizável</Text>
    <BotaoIncrementador texto="Botão" cor="blue" />
    <BotaoIncrementador texto="Botão" cor="red" />
    <BotaoIncrementador texto="Botão" cor="green" />
  </View>