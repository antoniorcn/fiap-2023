import React, {useState} from 'react';
import { Button, ImageBackground, Text, View } from 'react-native';
import img from './assets/music.png';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput } from 'react-native';

const {Navigator, Screen} = createBottomTabNavigator();

const Cadastrar = (props) => {
  const [marca, setMarca] = useState("");
  const [tipo, setTipo] = useState("");
  const [modelo, setModelo] = useState("");
  const [preco, setPreco] = useState("");

  return (
    <View>
      <TextInput placeholder="Marca"
        value={marca} onChangeText={setMarca}/>
      <TextInput placeholder="Tipo"
        value={tipo} onChangeText={setTipo}/>
      <TextInput placeholder="Modelo"
        value={modelo} onChangeText={setModelo}/>
      <TextInput placeholder="Preco"
        value={preco} onChangeText={setPreco}/>
      <Button title="Gravar" onPress={()=>{
        const obj = {marca, tipo, modelo, preco};
        props.onAdicionar( obj );
      }}/>
    </View>
  );
}

const Listagem = () =>
<View>

</View>

export default function App() {
  const [lista, setLista] = useState([]);

  const adicionar = ( o ) => {
    setLista([ ... lista, o ]);
  }

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <ImageBackground source={img}
            resizeMode="cover"
            style={{flex: 1,
              justifyContent: "center", 
              alignItems: "center"}}>
          <Text style={{fontSize: 30, color: "white"}}>
            Loja de Instrumentos musicais</Text>
        </ImageBackground>
        <View style={{flex: 3}}>
          <Navigator>
            <Screen options={{headerTitle: "Cadastro"}} 
                    name="Cadastrar">
              {()=><Cadastrar onAdicionar={adicionar}/>}
            </Screen>
            <Screen name="Listagem" component={Listagem}/>
          </Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}
