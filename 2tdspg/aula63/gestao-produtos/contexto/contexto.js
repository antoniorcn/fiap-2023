import { createContext } from 'react';

const contextoInicial = { 
    salvar: ()=>{},
    procurar: ()=>{},
    atualizar: ()=>{},
    excluir: ()=>{},
    estado: {},
    dispatcher : ()=>{},
  }
  
  const Contexto = createContext( contextoInicial );
  
  export { Contexto }