import { createContext } from "react";

const contextoInicial = {
    texto : "",
    setTexto : ()=>{},
    lista : [],
    setLista : ()=>{}
}

const OutroContexto = createContext(contextoInicial);

export {OutroContexto, contextoInicial}