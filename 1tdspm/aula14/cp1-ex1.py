# Faça um programa para auxiliar no cálculo do salário no
# final do mês	(2,0 pontos)
# Para isto o programa deve pedir ao usuário para digitar as
# seguintes informações: Horas trabalhadas no mês, Valor da
# hora trabalhada, Percentual de desconto. O programa deve
# calcular as seguintes informações e mostrá-las na tela:
# Salário Bruto, #Total descontado, Salário Líquido
# (fórmula : Salário Bruto = Horas Trabalhadas * Valor Hora )
# (fórmula : Total desconto = (Percentual Desconto * 
# Salário Bruto) / 100)
# (fórmula : Salário Liquido = Salário Bruto - 
# Total de Desconto)

print("Programa de calculo de salário")
horas_trabalhadas = int(input("Por favor informe a qtd de horas "\
"trabalhadas no mês: "))
valor_hora = float(input("Informe o valor da hora trabalhada: "))
per_desconto = int(input("Informe o percentual de desconto: "))

salario_bruto = horas_trabalhadas * valor_hora
total_desconto = per_desconto * salario_bruto / 100.0
salario_liquido = salario_bruto - total_desconto

print("Salario Bruto: ", salario_bruto)
print("Total desconto: ", total_desconto)
print("Salario Liquido: ", salario_liquido)