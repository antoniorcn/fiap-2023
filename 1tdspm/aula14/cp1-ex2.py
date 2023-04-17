# Tabuada do numero 5
# 5 X 0 = 0
# 5 X 1 = 5
# 5 X 2 = 10

# i = 1
# while i <= 10:
# 	resposta = 5 * i
# 	print(5, "\tX\t", i, "\t=\t", resposta)
# 	i = i + 1		# i += 1

numero = int(input("Por favor informe um numero para a tabuada: "))
for i in range(1, 11):
	resultado = i * numero
	print(numero, " X ", i, " = ", resultado)

