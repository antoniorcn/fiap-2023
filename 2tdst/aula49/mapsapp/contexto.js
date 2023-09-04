import { createContext } from "react";

const contextoDefault = {
    lista : [],
}


const MeuContexto = createContext(contextoDefault);


export {MeuContexto};