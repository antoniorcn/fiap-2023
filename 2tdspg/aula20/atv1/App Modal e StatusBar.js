import React, {useState} from 'react';
import { Button, Modal, StatusBar, Text, View } from 'react-native';
export default function App() {
  const [visivel, setVisivel] = useState(false);
  return (
    <View style={{flex: 1,
        backgroundColor: "lightcyan",
        marginTop: StatusBar.currentHeight}}>
      <Text style={{fontSize: 18}}>View Principal</Text>
      <Modal transparent={true} visible={visivel}
              animationType="fade"
              onRequestClose={()=>{setVisivel(false)}}>
        <View style={{height: "30%", width: "100%",
              backgroundColor: "lightyellow", alignItems: "center",
              justifyContent: "center",
              marginTop: 10}}>
          <Text style={{fontSize: 18}}>Modal View</Text>
          <Button title="Fechar" onPress={()=>{
            setVisivel(false);
          }}/>
        </View>
      </Modal>
      <Button title="Mostrar Modal" onPress={()=>{
        setVisivel(true);
      }}/>
      <StatusBar backgroundColor="lightcyan" 
            barStyle="dark-content" hidden={visivel}/>
    </View>
  );
}
