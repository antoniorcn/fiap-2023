# X-Salada
# Hamburguer, Alface, Tomate e Queijo
# R$ 14.50	

# X-Burguer
# Hamburguer e Queijo
# R$ 13.00	

# X-Churrasco
# Contrafilé e Queijo
# R$ 16.80
lista = [
    {"nome-lanche": "X-Salada", 
     "ingredientes": "Hamburguer, Alface, Tomate e Queijo",
     "preco": 14.50},
    {"nome-lanche": "X-Burguer",
     "ingredientes": "Hamburguer e Queijo",
     "preco": 13.00},
    {"nome-lanche": "X-Churrasco",
     "ingredientes": "Contrafilé e Queijo",
     "preco": 16.80}
]

while True:
    print("(C) - Cadastrar")
    print("(L) - Listar")
    print("(S) - Sair")
    opcao = input("Digite sua opção: ").lower()[0]

    if opcao == "c":
        lanche = input("Informe o nome do lanche: ")
        ingrendientes = input("Informe os ingredientes: ")
        preco = float(input("Informe o preço: "))

        dic = { "nome-lanche": lanche, 
                "ingredientes": ingrendientes,
                "preco": preco}
        lista.append(dic)
    elif opcao == "l":
        for item in lista:
            print(item["nome-lanche"])
    elif opcao == "s":
        print("Obrigado e volte sempre")
        break