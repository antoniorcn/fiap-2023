print("Programa para teste de Input")
print("Este programa pergunta seu \
nome e mostra um ola na tela")

nome = input("Digite seu nome, por favor => ") # "Antonio"
idade = int(input("Agora digite sua idade por favor => ")) # "40"

print("Ola ", nome)

# str(5)   #  "5"
# int("40")   #  40

print("Idade atual", idade)
idade_futura = int(idade) + 5       # 40 + 5  =>  45
# idade_futura = "40" + str(5)       # "5"
print("Idade daqui a 5 anos", idade_futura)

print("Fim do programa")