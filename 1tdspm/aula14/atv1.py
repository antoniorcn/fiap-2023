#        0  1   2   3   4   5   6
lista = [7, 4, 20, 35, 51, 42, 10]

tamanho = len(lista)
print("Tamanho da lista: ", tamanho)

# i = 0
# while i < 6:
#     print(lista[i])
#    i = i + 1

# for i in range(0, 6):
#    print(lista[i])

# lista = [7, 4, 20, 35, 51, 42, 10]

#        [0, 1, 2, 3, 4, 5, 6, 7]   
# for i in range(0, 8):
#    numero = lista[i]
#    print(numero)

# Tecnica da Soma
soma = 0
for numero in lista:
    soma = soma + numero
    # print(numero)
print("Soma: ", soma)

# Tecnica para localizar o maior numero
maior_numero = lista[0]
for numero in lista:
    if numero > maior_numero:
        maior_numero = numero
print("Maior Numero é: ", maior_numero)

# Tecnica para localizar o menor numero