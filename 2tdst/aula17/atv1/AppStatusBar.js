import React, {useState} from 'react';
import { StatusBar, Button, Modal, Text, View } 
      from 'react-native';

export default function App() {
  const [modalVisivel, setModalVisivel] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: StatusBar.currentHeight,
                }}>
      <StatusBar barStyle="default" hidden={false}/>
      <Text style={{fontSize: 16}}>Tela Principal</Text>
      <Button title="Abrir Modal" onPress={()=>{
        setModalVisivel(true);
      }}/>
      
      <Modal visible={modalVisivel} 
            transparent={true}
            animationType='fade'>
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
