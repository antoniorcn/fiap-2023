def fatorial(numero):
  if numero <= 2:
    return 2
  else:
    return numero * fatorial(numero - 1)



print("Inicio do programa Fatorial")

print("Informe um numero entre 2 e 50: ")
num = int(input())

print(f"Fatorial {num}: ", fatorial(num))

print("Fim do programa Fatorial")