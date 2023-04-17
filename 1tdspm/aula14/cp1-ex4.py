# Faça um programa que imprima um triangulo 
# feito com números crescentes com 5 linhas conforme abaixo.
# 1
# 12
# 123
# 1234
# 12345

for linha in range(0, 5):
	for coluna in range(0, linha + 1):
		print(coluna + 1, end="")
	print()