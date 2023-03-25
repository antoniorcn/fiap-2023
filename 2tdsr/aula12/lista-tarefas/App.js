import React from 'react';
import { Button, ImageBackground, ScrollView,
  Text, View, TextInput } from 'react-native';
import imgTarefas from './assets/todolist.jpg';

class TodoListFormulario extends React.Component {

  constructor(props) {
    super(props);
    this.state = {nome: "",
      data: "", tempo: "", lista: []};
  }

  render() {
    const listaVisual = [];
    for (let i = 0; i < this.state.lista.length; i++) {
      const o = this.state.lista[i];
      const conteudoVisual = <View key={"id-" + i}
          style={{backgroundColor: "lightyellow",
          margin: 10}}>
                                <Text>Tarefa: {o.nome}</Text>
                                <Text>Data: {o.data}</Text>
                                <Text>Tempo: {o.tempo}</Text>
                              </View>;
      listaVisual.push(conteudoVisual);
    }

    return(
      <View style={{flex: 1}}>
        <Text>Nome da tarefa:</Text>
        <TextInput value={this.state.nome}
          onChangeText={(txt)=>{
            this.setState({nome: txt})
          }}/>
        <Text>Data Termino:</Text>
        <TextInput value={this.state.data}
          onChangeText={(txt)=>{
            this.setState({data: txt})
          }}/>
        <Text>Tempo de execução:</Text>
        <TextInput value={this.state.tempo}
          onChangeText={(txt)=>{
            this.setState({tempo: txt})
          }}/>
        <Button title="Salvar" onPress={()=>{
          const obj = { nome: this.state.nome, 
                        data: this.state.data, 
                        tempo: this.state.tempo };
          this.setState({lista: [ ... this.state.lista, obj] })
        }}/>
        <ScrollView>
          {listaVisual}
        </ScrollView>
      </View>
    );
  }
}


export default () =>
  <View style={{flex: 1}}>
    <ImageBackground style={{flex: 1}}
      source={imgTarefas} resizeMode="cover">

    </ImageBackground>
    <View style={{flex: 2}}>
      <TodoListFormulario/>
    </View>
  </View>