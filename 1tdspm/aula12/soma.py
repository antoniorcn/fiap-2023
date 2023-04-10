#        0  1  2   3   4   5
lista = [4, 7, 9, 12, 16, 20]
soma = 0
i = 0
while i < len(lista):
    numero = lista[i]
    soma = soma + numero
    print("Numero: ", numero, "    Soma atual: ", soma)
    i = i + 1

print("Soma Final: ", soma)
