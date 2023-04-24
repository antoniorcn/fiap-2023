import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Text, View } from 'react-native';

// const Tab = createBottomTabNavigator(); // {Navigator: {}, Screen: {}}
const Tab = createDrawerNavigator(); // {Navigator: {}, Screen: {}}

const TelaA = ()=>
<View style={{flex: 1, backgroundColor: "lightcyan"}}>
  <Text>Tela A</Text>
</View>

const TelaB = ()=>
<View style={{flex: 1, backgroundColor: "lightyellow"}}>
  <Text>Tela B</Text>
</View>

export default function App() {
  return (
    <NavigationContainer>
      <View style={{flex: 1, justifyContent: "center",
            alignItems: "stretch"}}>
        <Text style={{flex: 1, 
            textAlign: "center", 
            textAlignVertical: "center"}}>
              Teste de Navegação
        </Text>
        <View style={{flex: 1}}>
          <Tab.Navigator>
            <Tab.Screen name="Tela A" 
                component={TelaA}/>
            <Tab.Screen name="Tela B" 
                component={TelaB}/>                                           
          </Tab.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}