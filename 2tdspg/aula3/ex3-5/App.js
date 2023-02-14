import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const estilos = { 
  texto : {}
}

export default function HelloWorld() {
  return (
    <View>
      <Text style={{backGroundColor: "red"}}>Hello World</Text>
    </View>
  );
}
