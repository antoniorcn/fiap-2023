import { createContext } from "react";


const contextoInicial = {
    lista : [],
    setLista: ()=>{},
    salvar : ()=>{},
    remover: ()=>{},
    editar : ()=>{},
    alterarDados : null,
}; 

const Contexto = createContext( contextoInicial );

export {Contexto, contextoInicial};