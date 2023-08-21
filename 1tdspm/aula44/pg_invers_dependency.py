def imprimir(valor):
    print("", valor, end="")

def imprimi_dobrado(valor):
    print("", valor*2, end="")

    
def imprimi_entre_aspas(valor):
    print("'" + str(valor) + "', ", end="")

def pg( numero, q, funcao_imprimi ):
    if numero <= 1:
        funcao_imprimi(1)
        return 1
    else:
        res = q * pg(numero - 1, q, funcao_imprimi)
        funcao_imprimi(res)
        return res

print ("Programa para calculo de Progressão Geometrica")
print ("Digite o termo para calculo da PG: ")
termo = int(input())
print ("Digite a razão para o calculo da PG: ")
razao = int(input())
resultado = pg(termo, razao, imprimi_entre_aspas)
print (f"\nPG do {termo}º elemento com a q={razao} é : ", resultado)
print ("Fim do programa")