# indice   0    1    2    3    4    5    6    7    8    9    10
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
quantidade = len(letras)
print("A lista tem :", quantidade, " elementos")
i = 0
while i < len(letras):
    character = letras[i]
    if i % 2 == 0:
        print(character)
    i = i + 1
