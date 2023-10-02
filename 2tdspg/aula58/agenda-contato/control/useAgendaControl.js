import { contatoSchema } from "../model/contatoSchema";
import { useReducer, useEffect } from 'react';
import { apagarAPI, carregarAPI, salvarAPI } from "../fetchers/agendaAPI";

const estadoInicial = {
    lista: []
}
  
const funcaoReducer = (estado, action) => { 
    if (action.type === "LIST_APPEND") { 
        return {...estado, lista: [...estado.lista, action.payload] }
    } else if (action.type === "LIST_CLEAR") { 
        return {...estado, lista: [] };
    }
    throw new Exception("Tipo não identificado na funcaoReducer");
}

const useAgendaControl = () => {
    const [estado, dispatcher] = useReducer(funcaoReducer, estadoInicial);
  
    const salvar = async (obj) => {
        return contatoSchema.validate( obj, {abortEarly: false})
        .then(()=>{
            salvarAPI( obj )
            .then(()=>{
                carregar();
            })
        })
    }
  
    const carregar = async () => {
      carregarAPI()
      .then((resposta)=>{
        dispatcher( {type: "LIST_CLEAR"} );
        for (const chave in resposta.data) { 
          const obj = resposta.data[chave];
          obj.id = chave
          dispatcher( {type: "LIST_APPEND", payload: obj} );
        }
      })
      .catch( (err) =>{
        alert("Erro ao ler: " + err);
      })
    }
  
    const apagar = ( obj ) => {
      apagarAPI()
      .then( ()=>{
        carregar();
      })
      .catch( (err) => {
        alert("Erro ao apagar")
      })
    }
  
    useEffect(
      ()=>{carregar()}, 
    [])
  
    return {
      estado, 
      salvar,
      carregar,
      apagar,
      dispatcher,
    }
  }

  export { useAgendaControl }