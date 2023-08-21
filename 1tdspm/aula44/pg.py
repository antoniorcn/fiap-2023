# 8
# (1, 3, 9, 27, 81, 243, 729, 2187) q = 3
# pg(8) = pg(7) * 3
# pg(7) = pg(6) * 3
# pg(6) = pg(5) * 3
# pg(5) = pg(4) * 3
# pg(4) = pg(3) * 3
# pg(3) = pg(2) * 3
# pg(2) = pg(1) * 3
# pg(1) = 1


def pg( numero, q ):
    if numero <= 1:
        print("", 1, end="")
        return 1
    else:
        res = q * pg(numero - 1, q)
        print("", res, end="")
        return res

print ("Programa para calculo de Progressão Geometrica")
print ("Digite o termo para calculo da PG: ")
termo = int(input())
print ("Digite a razão para o calculo da PG: ")
razao = int(input())
resultado = pg(termo, razao)
print (f"\nPG do {termo}º elemento com a q={razao} é : ", resultado)
print ("Fim do programa")