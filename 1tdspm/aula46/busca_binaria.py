lista = [3, 6, 9, 12, 15, 18, 21, 24]
contador_comparacoes = 1
valor_procurado = 12
encontrado = None
inicio = 0
termino = len(lista) - 1

while encontrado == None:
    print("Buscando : ", contador_comparacoes)
    contador_comparacoes += 1
    meio = int(((termino - inicio) / 2) + inicio)
    if valor_procurado == lista[meio]:
        encontrado = meio
    elif valor_procurado > lista[meio]:
        if termino == meio:
            break
        else:
            inicio = meio + 1
    elif valor_procurado < lista[meio]:
        if inicio == meio:
            break
        else:
            termino = meio - 1

print("Valor encontrado na posicao : ", encontrado)