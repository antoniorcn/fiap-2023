import React from 'react';
import {Button, ScrollView, View, Text, TextInput, ImageBackground, StyleSheet} from 'react-native';
import imgMarket from './assets/market.jpg';

// function Principal () { 
//   return (
//     <View style={{marginTop: 50, flex: 1}}>
//       <Text>Lista Mercado 2</Text>
//     </View>
//   );
// }

const estilos = StyleSheet.create({
  input : { backgroundColor: "white",
            borderColor: "#2c64c6", borderWidth: 2, borderRadius: 20,
            marginHorizontal: 15, marginVertical: 5,
            height: 50, paddingHorizontal: 10 },
  titulo: {fontSize: 48, color: "white"}
});

class ProdutoFormulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nome: "", quantidade: "", preco: "", lista: [
      {nome: "Sabao em pó OMO", quantidade: "1 kilo", preco: "15.00"},
      {nome: "Queijo Ralado Quata 100g", quantidade: "3 pacotes",
        preco: "9,79"},
      {nome: "Sucrilhos Kellog's 750g", quantidade: "1 pacote",
        preco: "16,00"},
    ]}
  }

  render() {
    // const listaVisuais = [];
    // for (const obj of this.state.lista) {
    const listaVisuais = this.state.lista.map(
      (obj, idx)=> {
        return (
          <View key={idx}>
            <Text>{obj.nome}</Text>
            <Text>{obj.quantidade}</Text>
            <Text>R$ {obj.preco}</Text>
          </View>
        );
      }
    );

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>

          <TextInput value={this.state.nome}
              onChangeText={(txt)=>{
                this.setState({nome: txt});
              }}
              style={estilos.input} placeholder="Nome do produto"/>

          <TextInput value={this.state.preco} 
              onChangeText={(txt)=>{
                this.setState({preco: txt})
              }}
              style={estilos.input} placeholder="Preço"/>

          <TextInput value={this.state.quantidade}
              onChangeText={(txt)=>{
                this.setState({quantidade: txt})
              }}
              style={estilos.input} placeholder="Quantidade"/>
          <Button title="Salvar" onPress={
            ()=> {
              const obj = {nome: this.state.nome, quantidade: this.state.quantidade,
                preco: this.state.preco};
                
              this.setState( {lista: [...this.state.lista, obj]} );
            }}/>
        </View>
        <ScrollView style={{flex: 1}}> 
              {listaVisuais}
        </ScrollView>
      </View>
    )
  }
}

export default () => {
  return (
    <View style={{marginTop: 50, flex: 1, 
        backgroundColor: "#5b8bdf"}}>
      <ImageBackground source={imgMarket} resizeMode="cover"
          style={{flex: 1, padding: 50}}>
          <View style={{flex: 1, borderRadius: 20,
            justifyContent: "center", alignItems: "center",
            backgroundColor: "#00cce599"}}>
            <Text style={estilos.titulo}>Lista</Text>
            <Text style={estilos.titulo}>Mercado</Text>
          </View>
      </ImageBackground>
      <View style={{flex: 3}}>
          <ProdutoFormulario/>
      </View>
    </View>
  );
}
