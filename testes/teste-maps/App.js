import { Text, View } from 'react-native';
import  MapView from "react-native-maps";
		

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Text>Google Maps</Text>
      <MapView style={{flex: 1}}
        initialRegion={{
          latitude: -23.521642493852184, 
          longitude: -46.47607446699856,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        }}>
      </MapView>
    </View>
  );
}
