import {createContext} from 'react';

const contextoInicial = {
    titulo: "",
    subTitulo: "",
    onPressionado: () => {}
}

const MeuContexto = createContext(contextoInicial)

export {MeuContexto, contextoInicial}