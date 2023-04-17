import React, {useState} from 'react';
import { Button, FlatList, StatusBar, Text, View } from 'react-native';


function ComponenteVisual(props) {
  return (
    <View>
      <Text>Nome Completo: {props.item.nome}</Text>
      <Text>Telefone: {props.item.telefone}</Text>
      <Text>Email: {props.item.email}</Text>
    </View>
  )
}

export default function App() {
  const [lista, setLista] = useState([
    {id: 1, nome: "João Silva", telefone: "1111-1111", email: "joao@teste.com"},
    {id: 2, nome: "Maria Silva", telefone: "2222-2222", email: "maria@teste.com"},
    {id: 3, nome: "Alberto Silva", telefone: "3333-3333", email: "alberto@teste.com"},
  ]);

  // const listaVisual = [];

  // for (let idx in lista) {
  //   const obj = lista[idx];
  //   listaVisual.push(
  //     <Item idx={idx} item={obj}/>
  //   );
  // }

  return (
    <View style={{flex: 1,
        backgroundColor: "lightcyan",
        marginTop: StatusBar.currentHeight}}>
      <Text style={{fontSize: 18}}>View Principal</Text>
      {/*listaVisual*/}
      <FlatList data={lista} renderItem={ComponenteVisual} 
            keyExtractor={(item)=>item.id}/>
    </View>
  );
}
