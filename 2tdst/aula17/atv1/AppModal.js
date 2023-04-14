import React, {useState} from 'react';
import { Button, Modal, Text, View } from 'react-native';

export default function App() {
  const [modalVisivel, setModalVisivel] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: "center",
                  alignItems: "center"}}>
      <Text style={{fontSize: 16}}>Tela Principal</Text>
      <Button title="Abrir Modal" onPress={()=>{
        setModalVisivel(true);
      }}/>
      
      <Modal visible={modalVisivel} 
            transparent={true}>
        <View style={{flex: 1, 
          backgroundColor:"lightcyan",
          alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontSize: 16}}>Tela Modal</Text>
            <Button title="Fechar" onPress={()=>{
              setModalVisivel(false);
            }}/>
        </View>
      </Modal>

    </View>
  );
}
