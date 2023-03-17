import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import imgMarket from './assets/market.jpg';

// function Principal () { 
//   return (
//     <View style={{marginTop: 50, flex: 1}}>
//       <Text>Lista Mercado 2</Text>
//     </View>
//   );
// }

export default () => {
  return (
    <View style={{marginTop: 50, flex: 1, 
        backgroundColor: "#2c64c6"}}>
      <ImageBackground source={imgMarket} resizeMode="cover"
          style={{flex: 1, padding: 50}}>
          <View style={{flex: 1, borderRadius: 20,
            justifyContent: "center", alignItems: "center",
            backgroundColor: "#00cce599"}}>
            <Text style={{fontSize: 48, color: "white"}}>Lista</Text>
            <Text style={{fontSize: 48, color: "white"}}>Mercado</Text>
          </View>
      </ImageBackground>
      <View style={{flex: 2}}>

      </View>
    </View>
  );
}
