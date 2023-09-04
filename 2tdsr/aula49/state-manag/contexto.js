import { createContext } from "react";

const initContexto = { 
    lista: [],
    setLista: ()=>{},
    acionarAlerta: ()=>{}
}

const NossoContexto = 
    createContext(initContexto);

export {NossoContexto};