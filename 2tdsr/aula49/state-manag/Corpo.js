import { useContext } from 'react';
import { View, Text } from 'react-native';
import { NossoContexto } from './contexto';

const Corpo = (props) => { 
    const obj = useContext(NossoContexto);
    return (
      <View>
        {obj.lista.map( (texto, indice) => 
          <Text key={indice}>{texto}</Text>)}
      </View>
    );
  }

export default Corpo;