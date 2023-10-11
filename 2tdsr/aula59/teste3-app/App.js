import { Button, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';

export default function App() {
  const listener = useRef();
  const schedulerNotificationHandler = () => { 
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Exemplo 2 - Notificação",
        body: "Corpo da Notificação - Exemplo 2",
        data : {"info": "informação 2"}
      },
      trigger: {
        seconds: 5
      }
    })
    .then((response) => console.log("Resposta: ", response))
    .catch((erro) => console.error("Erro: ", erro.message))
  }

  useEffect( ()=>{
    listener.current = Notifications.addNotificationResponseReceivedListener(
      ( notification )=>{ 
        console.log("Notificação clicada: ", notification);
      }
    );

    return ()=>{
      Notifications.removeNotificationSubscription(listener.current);
    }
  }, []);

    Notifications.setNotificationHandler({
      handleNotification: async () => {
        return { 
          shouldPlaySound: true,
          shouldSetBadge: false,
          shouldShowAlert: true
        }
      }
    });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Teste de Notificação</Text>

      <Button title="Notificar" onPress={()=>{
        schedulerNotificationHandler();
      }}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
