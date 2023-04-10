print("Programa que calcula a media final")
notas = []

for i in range(6):
    # cp1 = float(input("Por favor digite a nota do" + \
    #                   "Checkpoint {}: ".format(i + 1)))
    cp1 = float(input(f'Por favor digite a nota do Checkpoint {i + 1}: '))
    notas.append(cp1)

ch1 = float(input('Por favor digite agora a 1ª nota do Challenge'))
notas.append(ch1)

ch2 = float(input('Por favor digite agora a 2ª nota do Challenge'))
notas.append(ch2)

gs = float(input('Por favor digite agora a nota da Global Solution'))
notas.append(gs)

print("Lista de Notas: ")
print(notas)





# soma = 0
# for n in notas:
#     soma = soma + n
# print("Soma: ", soma)

media = soma / 9.0

print("Media: ", media)

