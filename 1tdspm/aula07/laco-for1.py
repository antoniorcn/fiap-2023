# contador = 1
# while contador <= 5:
#     print(contador)
#     contador = contador + 1

for contador in range(0, 10, 1):
    dobro = contador * 2
    print("Contador", contador)
    # continue
    print("Dobro", dobro)
    if dobro == 12:
        break
else:
    print("Terminado normalmente sem o Break")