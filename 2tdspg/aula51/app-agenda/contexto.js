import { createContext } from "react";


const contextoInicial = {
    lista : [],
    setLista: ()=>{},
    salvar : ()=>{}
}; 

const Contexto = createContext( contextoInicial );

export {Contexto, contextoInicial};