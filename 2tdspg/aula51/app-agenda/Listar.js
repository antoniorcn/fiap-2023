import { useContext } from 'react';
import { View, Text } from 'react-native';
import { Contexto } from './contexto';
import { Entypo as Icon } from '@expo/vector-icons';

const Listar = () => { 
    const ctx = useContext(Contexto);

    return (
        <View style={{flex: 1}}>
        <Text>Lista de Contatos</Text>
        {ctx.lista.map( (item, indice) => 
            <View key={indice} style={{margin: 5, borderWidth: 1, boderRadius: 5}}>
                <Text>{item.nome}</Text>
                <Text>{item.email}</Text>
                <Text>{item.tel}</Text>
                <Icon name="trash" size={28} onPress={
                    ()=>{ctx.remover( item )}
                }/>
                <Icon name="edit" size={28} onPress={
                    ()=>{ctx.editar( item )}
                }/>
            </View>
        )}
        </View>
    )
}

export { Listar };