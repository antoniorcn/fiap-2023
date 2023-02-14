import { StatusBar, Text, View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  principal: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "lightyellow",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch"
  },

  quadro1: {
    flex: 33,
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "space-between",
    // padding: 30
  },

  quadro2: {
    flex: 66,
    backgroundColor: "blue",
  },

  texto1: {
    flex: 1,
    margin: 10,
    backgroundColor: "lightcyan"
  },

  texto2: {
    flex: 1,
    margin: 10,
    backgroundColor: "lightyellow"
  }
})

export default function App() {
  return (
    <View style={estilos.principal}>
      <View style={estilos.quadro1}>
        <Text style={estilos.texto1}>Texto 1</Text>
        <Text style={estilos.texto2}>Texto 2</Text>
      </View>
      <View style={estilos.quadro2}></View>
    </View>
  );
}

