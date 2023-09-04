import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Text>Google Maps</Text>
      <MapView style={{flex: 1}}
        initialRegion={{
          latitude: -23.573927676643688, 
          longitude: -46.623195217291354,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}>

      </MapView>
    </View>
  );
}
