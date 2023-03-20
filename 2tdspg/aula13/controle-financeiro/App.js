import React from 'react';
import { ImageBackground, StyleSheet, Text,
  TextInput, View, Button, ScrollView } from 'react-native';
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
    paddingBottom: 15},
  item: { borderColor: "black", borderWidth: 2,
          backgroundColor: "#A0FFA0AA",
          paddingHorizontal: 30,
          paddingVertical: 5,
          marginHorizontal: 20,
          marginVertical: 5}
})

class DepesasFormulario extends React.Component {

  constructor(props) {
    super(props);
    this.state = {nome: "", valor: "", data: "", lista: [
      {nome: "Luz", valor: "300,00", data: "10/04/2023"},
      {nome: "Água", valor: "200,00", data: "15/04/2023"}
    ]}
  }

  render() {

    const listaView = [];
    for (o of this.state.lista) {
      listaView.push(
        <View style={estilos.item}>
          <Text>Nome da despesa: {o.nome}</Text>
          <Text>Valor: {o.valor}</Text>
          <Text>Data Pagamento: {o.data}</Text>
        </View>
      );
    }

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
          <Button title="Salvar" color="green" onPress={
            ()=>{
              const obj = { nome: this.state.nome,
                            valor: this.state.valor,
                            data: this.state.data }
              // alert("Objeto: " + JSON.stringify(obj));
              this.setState({lista: [... this.state.lista, obj]})
            }}/>
            <ScrollView style={{flex: 1}}>
              {listaView}
            </ScrollView>                                          
        </View>
      </View>
    );
  }

}

export default () =>
  <View style={{flex: 1}}>
    <DepesasFormulario/>
  </View>