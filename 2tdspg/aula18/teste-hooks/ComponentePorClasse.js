import React from 'react';
import { Button, View, Text } from "react-native";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("\n\n\n\n##########\nconstructor() - acionado")
    this.state = {numero: 10}
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps() - acionado");
    return {}
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate() - acionado");
    return true;
  }

  // getSnapshotBeforeUpdate() {
  //   console.log("getSnapshotBeforeUpdate() - acionado");
  //   return true;
  // }

  componentDidUpdate() {
    console.log("componentDidUpdate() - acionado");
  }

  componentDidMount() {
    console.log("componentDidMount() - acionado")
  }

  render() {
    console.log("render() - acionado")
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Numero: {this.state.numero}</Text>
        <Button title="Incrementar" onPress={()=>{
          this.setState({numero: this.state.numero + 1});
        }}/>
      </View>
    );
  }
}

export default App;
