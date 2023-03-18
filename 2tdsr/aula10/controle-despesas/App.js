import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import imgCoins from './assets/coins.jpg';

const estilos = StyleSheet.create({
  titulo: {fontSize: 48, color: "white"},
  input: {borderBottomColor: "lightgray", borderBottomWidth: 3,
    marginVertical: 5, paddingVertical: 5,
    marginHorizontal: 20 }
})

class DespesaFormulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {descricao: "Condominio", valor: "", pagamento: ""}
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <TextInput style={estilos.input}
              value={this.state.descricao}
              placeholder="Descrição da Despesa"/>
          <TextInput style={estilos.input}
              value={this.state.valor}
              placeholder="Valor"/>
          <TextInput style={estilos.input}
              value={this.state.pagamento}
              placeholder="Data do Pagamento"/>
          <Button title="Salvar" color="green"/>
        </View>
        <View style={{flex: 1}}>

        </View>
      </View>
    );
  }
}

export default () => {
  return (
    <View style={{marginTop: 30, flex: 1}}>
      <ImageBackground source={imgCoins} resizeMode="cover"
        style={{flex: 1, padding: 50}}>
          <View style={{flex: 1, backgroundColor: "#DDDDDDAA",
            justifyContent: "space-evenly", alignItems: "center"}}>
            <Text style={estilos.titulo}>Controle</Text>
            <Text style={estilos.titulo}>Despesas</Text>
          </View>
      </ImageBackground>
      <View style={{flex: 3}}>
        <DespesaFormulario/>
      </View>
    </View>
  );
}
