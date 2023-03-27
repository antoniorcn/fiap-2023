import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import imgMusica from './assets/musica.jpg'


class MusicaFormulario extends React.Component { 
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 1}}></View>
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

    </View>
  </View>