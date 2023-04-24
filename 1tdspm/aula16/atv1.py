# índices   0   1   2  3   4   5    6   7  8     9   10, 11
numeros = [34, 67, 12, 9, 52, 13, 126, 42, 1, -128, -54, 87]

# i = 0
# while i < 12:
    # num = numeros[i]
    # print(num)
#     print(numeros[i])
#    i = i + 1

# Iterar na lista para mostrar o conteudo
# for num in numeros:
#    print(num, "\n")

# print("1\n2\n3\n4\n5\n")

# Tecnica para somar numeros da lista

total = 0
for num in numeros:
    print("Total: ", total)
    total = total + num
print("Total (soma de todos os numeros da lista): ", total)