import { useContext, useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { Contexto } from './contexto';


const Cadastrar = () => { 
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
  
    const ctx = useContext(Contexto);
  
    return (
      <View style={{flex: 1}}>
        <Text>Detalhes do Contato</Text>
        <Text>Nome Completo</Text>
        <TextInput value={nome} onChangeText={setNome}/>
        <Text>Email</Text>
        <TextInput value={email} onChangeText={setEmail}/>
        <Text>Telefone</Text>
        <TextInput value={tel} onChangeText={setTel}/>
        <Button title="Gravar" onPress={()=>{
          const obj = {nome, email, tel}
          ctx.salvar( obj );
        }}/>
      </View>
    )
}

export { Cadastrar };