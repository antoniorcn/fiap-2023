import { ProdutoSchema } from '../model/produtoSchema';
import { ADICIONAR_LISTA, DEFINIR_PRODUTO_ERRO } from './produtoReducer';
  
const useProdutoControl = (estado, dispatcher) => {

    const salvar = () => {
        dispatcher({type: DEFINIR_PRODUTO_ERRO, 
            payload: {}})
        ProdutoSchema.validate( estado.produto, {abortEarly: false} )
        .then(() => { 
            dispatcher({type: ADICIONAR_LISTA, 
                    payload: estado.produto})
        })
        .catch((err)=>{
            const erros = estado.produtoErros;
            err.inner.forEach(e => {
                erros[e.path] = e.message
                dispatcher({type: DEFINIR_PRODUTO_ERRO, 
                    payload: erros})
			});
        })
    }
    const procurar = () => {

    }
    const atualizar = () => {

    }
    const excluir = () => {

    }
    return {
        salvar, 
        atualizar, 
        procurar, 
        excluir
    }
}

export { useProdutoControl };