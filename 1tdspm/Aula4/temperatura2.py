t = input("Informe a temperatura atual: ")
temperatura = int(t)

if temperatura < 10: 
    print("Esta muito frio")
elif temperatura < 15:
    print("Esta frio")
elif temperatura < 30:
    print("Está calor")
else:
    print("Esta muito calor")

print("fim do programa")
