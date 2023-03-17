import React from 'react';
import {Button, View, Text, TextInput, ImageBackground, StyleSheet} from 'react-native';
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
            marginHorizontal: 15, marginVertical: 20,
            height: 50, paddingHorizontal: 10 },
  titulo: {fontSize: 48, color: "white"} 
});

class ProdutoFormulario extends React.Component { 
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <TextInput style={estilos.input} placeholder="Nome do produto"/>
          <TextInput style={estilos.input} placeholder="Preço"/>
          <TextInput style={estilos.input} placeholder="Quantidade"/>
          <Button title="Salvar"/>
        </View>
        <View style={{flex: 1}}></View>
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
