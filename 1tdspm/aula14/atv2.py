print("Programa de notas")
notas = []
for i in range(6):
	cp1= float(input(f'Informe sua nota do nota do ChekPoint: {i + 1}: '))
	notas.append(cp1)
ch1 = float(input("Informe sua primeira nota do Challenge: "))
notas.append (ch1)
ch2 = float(input("Informe sua segunda nota do Challenge: "))
notas.append (ch2)
gs = float(input("Informe sua nota do Global Solution: "))
notas.append (gs)
print ("Lista de notas: ")
print (notas)
soma = 0
for n in notas:
	soma = soma + n
print("soma", soma )
