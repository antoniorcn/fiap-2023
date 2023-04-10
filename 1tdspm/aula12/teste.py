print("Programa que calcula a média final") 
notas = [] 
for i in range(6): 
    #cp1 = float(input("Por favor digite a nota do"+ \ # "Checkpoint #{}: ".format(i+1))) 
    cp1 = float(input(f'Por favor, digite a sua nota do Checkpoint {i+1}: ')) 
    notas.append(cp1) 
print("Lista de Notas: ") 
print(notas)