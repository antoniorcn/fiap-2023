import React from 'react';
import {Button, ImageBackground, View,
    ScrollView, Text, TextInput} from 'react-native';
import imgMusica from './assets/musica.jpg'


class MusicaFormulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {album: "Get a Grip",
      musica: "Amazing", banda: "Aerosmith", lista:[]};
  }

  render() {

    const listaVisual = [];
    for (let i = 0; i < this.state.lista.length; i++) {
      const o = this.state.lista[i];

      listaVisual.push(
          <View key={i} style={{backgroundColor: "lightyellow",
          borderWidth: 2, margin: 3}}>
            <Text>Album: {o.album}</Text>
            <Text>Musica : {o.musica}</Text>
            <Text>Banda: {o.banda}</Text>
          </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text>Formulario</Text>
          <Text>Nome do Album</Text>
          <TextInput value={this.state.album} 
              onChangeText={(txt)=>{
                this.setState({album: txt})
              }}/>
          <Text>Nome da Musica</Text>
          <TextInput value={this.state.musica}
              onChangeText={(txt)=>{
                this.setState({musica: txt})
              }}/>
          <Text>Nome da Banda</Text>
          <TextInput value={this.state.banda}
              onChangeText={(txt)=>{
                this.setState({banda: txt})
              }}/>
          <Button title="Salvar" onPress={()=>{
            const obj = { album: this.state.album, 
                          musica: this.state.musica,
                          banda: this.state.banda }
            this.setState({lista: [ ... this.state.lista, obj ] })
          }}/>                 
        </View>
        <ScrollView style={{flex: 1}}>
          <Text>Lista de Musicas</Text>
          {listaVisual}
        </ScrollView>
      </View>
    );
  }
}

export default () =>
  <View style={{marginTop: 50, flex: 1}}>
    <ImageBackground source={imgMusica} 
        resizeMode="cover" style={{flex: 1}}>
      <Text>App de musicas</Text>
    </ImageBackground>
    <View style={{flex: 3}}>
      <MusicaFormulario/>
    </View>
  </View>