"""
Ex1 - Faça uma função para ler as pizzas de um arquivo texto 
no formato CSV, onde cada linha possui os dados de uma Pizza 
contendo sabor, preco e tamanho separados por ( ; ) esta função 
deverá retorna uma lista com todos os elementos lidos, onde 
cada elemento será um dicionário:........... (2,0 ponto)
"""

import csv

def limpar( texto ):
    return texto.strip().replace("\n", "").replace("\t", "")

def ler_arquivo():
    arquivo = open("pizzas.csv", "r")
    # leitor_csv = csv.reader(arquivo, delimiter=';', quotechar='')
    lista = []
    linha_texto = None
    contador = 0
    while linha_texto != "":
        linha_texto = arquivo.readline()
        if linha_texto != "" and contador > 0:
            # print("Lido: ", linha_texto)
            valores = linha_texto.split(",")
            d = dict()
            d["sabor"] = limpar(valores[0])
            d["preco"] = float(limpar(valores[1]))
            d["tamanho"] = limpar(valores[2])
            lista.append(d)
        contador = contador + 1
    arquivo.close()
    return lista


"""
Faça um laço infinito que mostre um menu, e solicite ao usuário que escolha 
uma opção guardando-a na variável opcao conforme abaixo:...... (1,0 ponto)
"""
def menu():
    opcao = None
    while opcao not in ['c', 'l', 's']:
        print("\n\nMenu de Opções")
        print("(C) - Cadastrar")
        print("(L) - Listar")
        print("(S) - Sair")
        print("Digite sua opção")
        opcao = input().lower()[0]
    return opcao

"""
Faça uma função chamada salvar que ao ser executada solicite ao usuário 
para digitar o Sabor o Preco e o Tamanho, a função deve abrir o arquivo CSV 
usando o modo "a+" e deverá adicionar uma nova linha contendo as 
informações digitadas, o sabor o tamanho e o preço separados por ( ; )
........................................................... (1,0 ponto)
"""
def salvar():
    print("Por favor informe os dados para cadastrar uma nova pizza")
    sabor = input("sabor da pizza: ")
    preco = float(input("preco da pizza: "))
    tamanho = input("tamanho da pizza (grande, medio, broto): ")
    arquivo = open("pizzas.csv", "a+")
    arquivo.write("\n{},{},{}".format(sabor, preco, tamanho))
    arquivo.close()



print("Inicio do programa")
while True:
    op = menu()
    print("Opção escolhida: ", op)
    if op == 'c':
        salvar()
    elif op == 'l':
        lista = ler_arquivo()
        print("Sabor\t\tPreço\t\tTamanho")
        for pizza in lista:
            print("{}\t\t{}\t\t{}".format(
                pizza["sabor"], pizza["preco"], pizza["tamanho"]))
    elif op == 's':
        print("Obrigado e volte sempre")
        break


