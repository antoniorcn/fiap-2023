arquivo_origem = open("./notas.csv", "r")
arquivo_destino = open("./notas_calculadas.csv", "w")

linha = None
while linha != "":
    linha = arquivo_origem.readline()
    print("Linha: ", linha)
    if linha != "":
        lista = linha.split(",")
        linha_destino = "{}, ".format(lista[0])
        soma = 0
        for indice in range(1, 5):
            item = float(lista[indice])
            soma = soma + item   # soma += item
            linha_destino = linha_destino +\
                "{:4.1f}, ".format(item)
        media = soma / 4
        linha_destino = linha_destino +\
            "{:5.2f}, {:5.1f}\n".format(soma, media)
        #print(linha_destino)
        arquivo_destino.write(linha_destino)

