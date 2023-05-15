import os
from datetime import datetime


def data_hoje():
    momento = datetime.now()
    hoje = momento.strftime("%d/%m/%Y")
    return hoje


def cabecalho():
    hoje = data_hoje()
    print("#" * 75)
    print("#" * 10, end="")
    print("{:^55}".format(
        "Programa para soma de numeros"), end="")
    print("#" * 10)
    print("#" * 10, end="")
    print("{:^55}".format("Faculdade FIAP"), end="")
    print("#" * 10)
    print("#" * 10, end="")
    print("{:^55}".format(hoje), end="")
    print("#" * 10)
    print("#" * 75)
    print("\n\n")


cabecalho()
n1 = int(input("Digite um numero: "))
n2 = int(input("Digite outro numero: "))
soma = n1 + n2
os.system('clear')
cabecalho()
print("Resultado: ", soma)