import { createContext } from "react"

const contextoInicial = { 
    estado : {},
    salvar : ( obj ) => {},
    carregar : () => {},
    apagar : ( obj ) => {},
    dispatcher : ( action ) => {}
}

const Contexto = createContext(contextoInicial);

export {Contexto}