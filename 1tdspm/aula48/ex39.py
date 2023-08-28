arquivo_leitura = open("./a.csv", "r")
arquivo_destino = open("./b.csv", "w")

linha = None
while linha != "":
    linha = arquivo_leitura.readline()
    if linha != "":
        linha_lista = linha.split(";")
        nova_nota = float(linha_lista[1].replace(",", ".")) + 1.0
        nova_linha = "{}; {:,}\n".format(linha_lista[0], nova_nota)
        print("Nome: ", linha_lista[0])
        print("Nota: ", nova_nota)
        print("Nova Linha: ", nova_linha)
        arquivo_destino.write(nova_linha)
arquivo_leitura.close()
arquivo_destino.close()