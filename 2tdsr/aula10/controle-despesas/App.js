import React from 'react';
import { Button, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
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
    this.state = {descricao: "", valor: "", pagamento: "", lista: [
      {descricao: "Condominio", valor: "600.00", pagamento: "10/04/2023"},
      {descricao: "NetFlix", valor: "57.00", pagamento: "15/04/2023"},
    ]}
  }

  render() {

    const listaElementosVisuais =
          this.state.lista.map( (obj, idx) => {
            return (
              <View key={idx}>
                <Text>{obj.descricao}</Text>
                <Text>{obj.valor}</Text>
                <Text>{obj.pagamento}</Text>
              </View>
            );
          });

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <TextInput style={estilos.input}
              value={this.state.descricao}
              onChangeText={(txt)=>{
                this.setState({descricao: txt})
              }}
              placeholder="Descrição da Despesa"/>
          <TextInput style={estilos.input}
              value={this.state.valor}
              onChangeText={(txt)=> {
                this.setState({valor: txt})
              }}
              placeholder="Valor"/>
          <TextInput style={estilos.input}
              value={this.state.pagamento}
              onChangeText={(txt)=>{
                this.setState({pagamento: txt})
              }}
              placeholder="Data do Pagamento"/>
          <Button title="Salvar" color="green" 
            onPress={()=>{
              const obj = {descricao: this.state.descricao, valor: this.state.valor,
                pagamento: this.state.pagamento}
              this.setState({lista: [...this.state.lista, obj]})
            }}/>
        </View>
        <ScrollView style={{flex: 1}}>
              {listaElementosVisuais}
        </ScrollView>
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
