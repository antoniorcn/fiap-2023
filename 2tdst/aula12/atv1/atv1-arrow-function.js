import React from 'react';
import {Button, Text, View} from 'react-native';

// class Principal extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, marginTop: 50}}>
//         <Text>Aperte o botão</Text>
//         <Button title="Aperte-me"/>
//       </View>
//     );
//   }
// }

// function Principal() {
//   return (
//     <View style={{flex: 1, marginTop: 50}}>
//       <Text>Aperte o botão</Text>
//       <Button title="Aperte-me"/>
//     </View>
//   );
// }

// export default Principal;

// function aperta() {
//   alert("Botão apertado");
// }

// export default () => {
//   return (
//     <View style={{flex: 1, marginTop: 50}}>
//       <Text>Aperte o botão</Text>
//       <Button title="Aperte-me" onPress={aperta}/>
//     </View>
//   )
// }



// export default () => {
//   return (
//     <View style={{flex: 1, marginTop: 50}}>
//       <Text>Aperte o botão</Text>
//       <Button title="Aperte-me" onPress={()=>{
//         alert("Botão pressionado");
//       }}/>
//     </View>
//   )
// }



export default () =>
  <View style={{flex: 1, marginTop: 50}}>
    <Text>Aperte o botão</Text>
    <Button title="Aperte-me" 
            onPress={()=>alert("Botão pressionado")}/>
  </View>