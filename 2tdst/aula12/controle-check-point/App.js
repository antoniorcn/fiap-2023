import React from 'react';
import {Button, ImageBackground, ScrollView,
  View, Text, TextInput} from 'react-native';
import imgCheck from './assets/checkpoint.jpg';

class CheckPointFormulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {materia: "Hybrid", numCheck: "#1",
                  nota: "5,0", lista: []}
  }

  render () {
    const listaVisual = []
    for(let i = 0; i < this.state.lista.length; i++) { 
      const obj = this.state.lista[i];
      const elementoVisual =
      <View key={"key-" + i} style={{backgroundColor: "lightyellow"}}>
        <Text>Materia: {obj.materia}</Text>
        <Text>CheckPoint #: {obj.numCheck}</Text>
        <Text>Nota: {obj.nota}</Text>
      </View>;
      listaVisual.push(elementoVisual);
    }


    return (
      <View style={{flex: 1}}>
        <Text>Nome da materia:</Text>
        <TextInput value={this.state.materia} 
          style={{backgroundColor: this.props.corInput}}
          onChangeText={(txt)=>{
            this.setState({materia: txt})
          }}/>
        <Text>Numero do Checkpoint:</Text>
        <TextInput value={this.state.numCheck}
          style={{backgroundColor: this.props.corInput}}
          onChangeText={(txt)=>{
            this.setState({numCheck: txt})
          }}/>
        <Text>Nota:</Text>
        <TextInput value={this.state.nota}
          style={{backgroundColor: this.props.corInput}}
          onChangeText={(txt)=>{
            this.setState({nota: txt})
          }}/>
        <Button title="Salvar" onPress={()=>{
          const obj = { materia: this.state.materia,
                        numCheck: this.state.numCheck,
                        nota: this.state.nota };
          this.setState({lista: [ ... this.state.lista, obj ]})
        }}/>
        <ScrollView style={{flex: 1}}>
          {listaVisual}
        </ScrollView>
      </View>
    );
  }
}


export default () =>
  <View style={{flex: 1}}>
    <ImageBackground style={{flex: 1}}
          source={imgCheck} resizeMode="cover">

    </ImageBackground>
    <View style={{flex: 1}}>
      <CheckPointFormulario corInput="lightpink"/>
    </View>
  </View>