import { Button, Text, View } from 'react-native';
import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

const notificationConfig = async () => {
  let permissions = await Notifications.getPermissionsAsync();
  if (permissions.status !== "granted") {
    permissions = await Notifications.requestPermissionsAsync();
  }
  if (permissions.status !== "granted") {
    Alert.alert("Permissão necessária",
    "O aplicativo precisa de permissão de notificação para prosseguir");
  }
  const pushToken = (await Notifications.getExpoPushTokenAsync({
    projectId: '6d9bc3b2-f6bc-4d02-9ccb-918deedcd9ce',
  })).data;
  console.log("Push Token");
  console.log(pushToken);
  if (Platform.OS == 'android') { 
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.DEFAULT
    });
  }
}
  


export default function App() {

  Notifications.setNotificationHandler({
    handleNotification : async () => {
      return (
        {
          shouldPlaySound: true,
          shouldSetBadge: false,
          shouldShowAlert: true 
        }
      )
    }
  })

  useEffect( ()=>{
    const notificationHandler = Notifications
      .addNotificationResponseReceivedListener(
        ( notification )=>{
          const content = notification.notification.request.content;
          console.log("Notification: ", notification);
          console.log("Title: ", content.title);
          console.log("Body: ", content.body);
          console.log("Data: ", content.data);
      })
    notificationConfig();
    return ()=>{
      notificationHandler.remove();
    }
  }, []);

  

  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      <Text>Teste de Notificação</Text>
      <Button title="Acionar notificação" onPress={()=>{
        Notifications.scheduleNotificationAsync(
          {
            content: {
              title: "Notificação App-Teste-1",
              body: "Esta é uma notificação do aplicativo App-Teste-1",
              data: {"id": "0001"}
            },
            trigger: {
              seconds: 5
            }
          }
        );
      }}/>
    </View>
  );
}