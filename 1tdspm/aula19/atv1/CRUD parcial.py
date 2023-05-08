lista = [
  {"nome": "João Silva", "telefone": "(11) 1234-5678", "email": "joao@teste.com"},
  {"nome": "Maria Silva", "telefone": "(11) 3434-1212", "email": "maria@teste.com"},
  {"nome": "Fabricio Orlando", "telefone": "(11) 4545-6767", "email": "fabricio@teste.com"}
]

while True:
  print("Agenda de Contatos")
  print("(C) - Cadastrar")
  print("(L) - Listar")
  print("(A) - Apagar")
  print("(S) - Sair")

  opcao = input("Digite sua opção").upper()[0]

  if opcao == 'C':
    nome = input("Digite seu nome: ")
    tel = input("Digite seu telefone: ")
    email = input("Digite seu email: ")
    contato = {"nome": nome, "email": email, "telefone": tel}
    lista.append(contato)
  elif opcao == 'A':
    nome_apagar = input("Qual nome você deseja remover da lista: ")
    for cont in lista:
      if cont["nome"] == nome_apagar:
        lista.remove(cont)
  elif opcao == 'L':
    print("{:<40}{:^10}{:>30}".format("Nome", "Telefone", "Email"))
    for c in lista:
      print("{:<40}{:^10}{:>30}".format(c["nome"], c["telefone"], c["email"]))
    print("\n\n\n")
  elif opcao == 'S':
    break
