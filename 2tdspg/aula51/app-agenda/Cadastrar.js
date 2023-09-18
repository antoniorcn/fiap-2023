import { useContext, useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { Contexto } from './contexto';


const Cadastrar = () => { 

    const ctx = useContext(Contexto);

    let idDefault = null;
    let nomeDefault = "";
    let emailDefault = "";
    let telDefault = "";
    if (ctx.alterarDados) {
        idDefault = ctx.alterarDados.id;
        nomeDefault = ctx.alterarDados.nome;
        emailDefault = ctx.alterarDados.email;
        telDefault = ctx.alterarDados.tel;
    }
    
    const [id, setId] = useState(idDefault);
    const [nome, setNome] = useState(nomeDefault);
    const [email, setEmail] = useState(emailDefault);
    const [tel, setTel] = useState(telDefault);
  
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
          if (idDefault) { 
            obj["id"] = idDefault;
          }
          ctx.salvar( obj );
        }}/>
      </View>
    )
}

export { Cadastrar };