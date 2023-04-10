cp1 = 7.0
cp2 = 6.5
cp3 = 7.5
cp4 = 4.5
cp5 = 7.0
cp6 = 6.0

# notas = [7.0, 6.5, 7.5, 4.5, 7.0, 6.0]
notas = []
print(notas)
notas.append(7.0)
notas.append(6.5)
notas.append(7.5)
print(notas)
notas.append(4.5)
notas.append(7.0)
notas.append(6.0)
print(notas)
#   0    1    2    3    4    5
# [7.0, 6.5, 7.5, 4.5, 7.0, 6.0]

n = notas[2]
print(n)

print("Programa de Notas")
n = float(input("Por favor informe quanto você tirou na GS: "))
notas.append( n )
print("Suas notas são: ")
print(notas)

# Quantas variaveis precisariamos para guardar
# todas as notas de todos os alunos de uma sala com 20 alunos e 
# 6 checkpoints para cada um ?