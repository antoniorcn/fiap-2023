import React, {useState} from 'react';
import { Button, Modal,
  TouchableHighlight, Text, View } from 'react-native';

export default function App() {
  const [modalVisivel, setModalVisivel] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: "center",
        alignItems: "center"}}>
      <Text style={{fontSize: 18}}>
        Tela Principal
      </Text>
      <Button title="Ativar Modal" onPress={()=>{
        setModalVisivel(true);
      }}/>
      <Modal visible={modalVisivel}
        transparent={true}
        animationType="slide">
        <View style={{height: "30%", width: "100%",
            backgroundColor: "lightcyan"}}>
          <View>
          <TouchableHighlight style={{
                  backgroundColor: "gray", padding: 10,
                  width: "8%", alignSelf: "flex-end"
                }}
                onPress={()=>{
            setModalVisivel(false);
          }}>
                <Text>X</Text>
            </TouchableHighlight>
            <Text style={{fontSize: 18, alignSelf: "center"}}>
              Tela Modal
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
