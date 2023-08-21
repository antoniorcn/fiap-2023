def imprimir(valor):
    print("", valor, end="")

def pg( numero, q ):
    if numero <= 1:
        imprimir(1)
        return 1
    else:
        res = q * pg(numero - 1, q)
        imprimir(res)
        return res

print ("Programa para calculo de Progressão Geometrica")
print ("Digite o termo para calculo da PG: ")
termo = int(input())
print ("Digite a razão para o calculo da PG: ")
razao = int(input())
resultado = pg(termo, razao)
print (f"\nPG do {termo}º elemento com a q={razao} é : ", resultado)
print ("Fim do programa")