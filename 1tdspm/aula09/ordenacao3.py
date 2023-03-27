print("Ordenação de 3 numeros")

n1 = int(input("informe o valor do numero 1"))
n2 = int(input("informe o valor do numero 1"))
n3 = int(input("informe o valor do numero 1"))

# n3
# n1
# n3
# n2
# n3


if n1 > n2:
    if n3 > n1: 
        print(n2, n1, n3)
    else:
        if n3 > n2:
            print(n2, n3, n1)
        else:
            print(n3, n2, n1)
else:
    if n3 > n2:
        print(n1, n2, n3)
    else: 
        if n3 > n1:
            print(n1, n3, n2)
        else:
            print(n3, n1, n2)
