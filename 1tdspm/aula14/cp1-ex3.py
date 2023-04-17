# Faça um programa que calcule o volume de um cilindro 
# area = raio * raio * 3.14 
# volume = area * altura
# Para isto o programa deve solicitar algumas informações para o usuário


raio = float(input("Por favor informe o raio do cilindro: "))
altura = float(input("Informe agora a altura do cilindro: "))

area = raio * raio * 3.1415
volume = area * altura

print("Area: ", area)
print("Volume: ", volume)