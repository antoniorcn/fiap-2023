print("Programa para calcular o volume de uma caixa")

comp = int(input("informe o comprimento da caixa")) #  "7"
prof = int(input("Informe a profundidade da caixa")) # 10
altura = int(input("Informe a altura da caixa")) # 10

# area = int(comp) * int(prof)

area = comp * prof
#       "7" * 10

#  area = "7777777777" 

#         5    *      5
#       "5" *  "5"

# volume = area * int(altura)
volume = area * altura
#         25  *   "10"
#         25  *    10
# volume = "7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777"

print("A area é ", area)
print("O volume é ", volume)