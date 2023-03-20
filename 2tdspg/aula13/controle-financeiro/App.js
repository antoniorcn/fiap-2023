import React from 'react';
import { ImageBackground, StyleSheet, Text,
  TextInput, View, Button } from 'react-native';
import coinsimg from './assets/coins.jpg';

const estilos = StyleSheet.create({
  titulo: {fontSize: 26, color: "white", 
    textShadowColor: "black",
    textShadowRadius: 5,
  textShadowOffset: {width: 3, height: 3}},
  input: {fontSize: 22, color: "black",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginVertical: 15,
    marginHorizontal: 30,
    paddingBottom: 15}
})

class DepesasFormulario extends React.Component {

  constructor(props) {
    super(props);
    this.state = {nome: "", valor: "", data: "", lista: []}
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground source={coinsimg}
              resizeMode="cover"
              style={{flex: 1, 
                justifyContent: "center",
                padding: 50,
                alignItems: "center"}}>
        <View style={{flex: 1, paddingHorizontal: 50,
          marginVertical: 20,
          backgroundColor: "#A0FFA0AA",
          borderRadius: 20, justifyContent: "center",
          alignItems: "center"}}>
          <Text style={estilos.titulo}>Controle</Text>
          <Text style={estilos.titulo}>Despesas</Text>
        </View>
        </ImageBackground>
        <View style={{flex: 3}}>
          <TextInput  placeholder="Nome" 
                      placeholderTextColor="black"
                      value={this.state.nome}
                      style={estilos.input}
                      onChangeText={(txt)=>{
                        this.setState({nome: txt})
                      }}/>
          <TextInput  placeholder="Valor" 
                      placeholderTextColor="black"
                      value={this.state.valor}
                      style={estilos.input}
                      onChangeText={(txt)=>{
                        this.setState({valor: txt})
                      }}/>
          <TextInput  placeholder="Data Pagamento" 
                      placeholderTextColor="black"
                      value={this.state.data}
                      style={estilos.input}
                      onChangeText={(txt)=>{
                        this.setState({data: txt})
                      }}/>
          <Button title="Salvar" color="green"/>                                          
        </View>
      </View>
    );
  }

}

export default () =>
  <View style={{flex: 1}}>
    <DepesasFormulario/>
  </View>