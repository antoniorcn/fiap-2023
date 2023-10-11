import { Button, Text, SafeAreaView, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect, useRef } from 'react';

export default function App() {
  const subscribe1 = useRef();
  const subscribe2 = useRef();  

  const schedulerNotificationHandler = () => { 
    Notifications.scheduleNotificationAsync({
        content: {
          title: "Exemplo 1 - Notificação",
          body: "Corpo da Notificação - Exemplo 1",
          data : {"info": "informação 1"}
        },
        trigger: {
          seconds: 5
        }
      })
    }

    useEffect( ()=>{
      Notifications.setNotificationHandler({
        handleNotification: async () => {
          return { 
            shouldPlaySound: false,
            shouldSetBadge: false,
            shouldShowAlert: true
          }
        }
      });

      subscribe1.current = Notifications.addNotificationReceivedListener(
        (notification) => { 
          console.log("Notificacao recebida: ", notification) 
        });

      subscribe2.current = Notifications.addNotificationResponseReceivedListener(
        (notification) => {
          console.log("Notificação clicada", notification)
        }
      ) 

      return ()=> {
        Notifications.removeNotificationSubscription(subscribe1.current);
        Notifications.removeNotificationSubscription(subscribe2.current);
      } 
    }, [])


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}> Teste de Notificação </Text>
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
