import { Button, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useContext } from 'react';
import { Contexto } from './contexto';
import { Listar } from './Listar';
import { Cadastrar } from './Cadastrar';
import { Login } from './Login';

const Tab = createBottomTabNavigator();

const Principal = () => {

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Text>Tela Principal</Text>
        <Tab.Navigator>
          {/* <Tab.Screen name="Cadastrar">
            {(tabProps)=><Cadastrar {...tabProps} onSalvar={salvar}/>}
          </Tab.Screen>
          <Tab.Screen name="Listar">
            {(tabProps)=><Listar {...tabProps} lista={lista}/>}
          </Tab.Screen> */}
          <Tab.Screen name="Cadastrar" component={Cadastrar}/>
          <Tab.Screen name="Listar" component={Listar}/>
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

export default function App() {
  const [lista, setLista] = useState([]);

  const salvar = ( objContato ) => { 
    setLista([...lista, objContato]);
  }

  return (
    <Contexto.Provider value={{
      lista, setLista, salvar
    }}>
      <View style={{flex: 1}}>
        <Text>Agenda de Contatos</Text>
        <Principal/>
      </View>
    </Contexto.Provider>
  );
}
