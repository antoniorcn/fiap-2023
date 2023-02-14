import { StatusBar, Text, View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  principal: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "lightyellow",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-end"
  },

  quadrado: {
    height: 50,
    width: 50
  },

  vermelho: {
    backgroundColor: "red"
  },

  azul: { 
    backgroundColor: "blue",
    alignSelf: "flex-start"
  }
})

export default function App() {
  return (
    <View style={estilos.principal}>
      <View style={[estilos.quadrado, estilos.vermelho]}></View>
      <View style={[estilos.quadrado, estilos.azul]}></View>
    </View>
  );
}

