const DEFINIR_PRODUTO = "DEFINIR_PRODUTO";
const DEFINIR_PRODUTO_ERRO = "DEFINIR_PRODUTO_ERRO";
const ADICIONAR_LISTA = "ADICIONAR_LISTA";

const estadoInicial = { 
  listaProdutos : [
    {}, {}
  ],
  produto : {},
  produtoErros : {}
}

const funcaoReducer = (estadoAtual, {type, payload}) => { 
    const novoEstado = { ...estadoAtual};
    if (type === DEFINIR_PRODUTO) { 
      novoEstado.produto = { ...payload }
      return novoEstado
    } else if (type === DEFINIR_PRODUTO_ERRO) { 
      novoEstado.produtoErros = { ...payload }
      return novoEstado
    } else if (type === ADICIONAR_LISTA) {
      novoEstado.listaProdutos.push( {...estadoAtual.produto} )
      return novoEstado;
    } else { 
      throw new Error("Type desconhecido na funcao reducer")
    }
}

export { estadoInicial, funcaoReducer,
    DEFINIR_PRODUTO, DEFINIR_PRODUTO_ERRO, ADICIONAR_LISTA }