
def entrar_dados():
  nome = input("Digite seu nome: ")
  tel = input("Digite seu telefone: ")
  email = input("Digite seu email: ")
  nascimento = input("Digite sua data de nascimento: ")
  obj = {"nome": nome, "email": email, "telefone": tel, "nascimento": nascimento}
  return obj


def menu_principal():
  print("Agenda de Contatos")
  print("(C) - Cadastrar")
  print("(L) - Listar")
  print("(P) - Procurar")
  print("(S) - Sair")

  opcao_escolhida = input("Digite sua opção").upper()[0]
  return opcao_escolhida


def menu_contato( contato ):
  print("Contato encontrado:")
  print(f"Nome:      {contato['nome']:<40}")
  print(f"Telefone:  {contato['telefone']:<40}")
  print(f"eMail:     {contato['email']:<40}")
  print(f"Nascimento:     {contato['nascimento']:<40}")
  print("Informe o que você deseja fazer com este contato: ")
  print("(A) - Apagar")
  print("(E) - Editar")
  print("(V) - Voltar ao menu principal")
  opcao_contato_escolhido = input("Escolha sua opção:").upper()[0]
  return opcao_contato_escolhido

lista = [
  {"nome": "João Silva", "telefone": "(11) 1234-5678", 
    "email": "joao@teste.com", "nascimento": "07/09/2000"},
  {"nome": "Maria Silva", "telefone": "(11) 3434-1212", 
    "email": "maria@teste.com", "nascimento": "15/04/1998"},
  {"nome": "Fabricio Orlando", "telefone": "(11) 4545-6767",
    "email": "fabricio@teste.com", "nascimento": "11/01/1994"},
  {"nome": "Maria Silva", "telefone": "(11) 3434-1212",
    "email": "maria2@teste.com", "nascimento": "23/11/2002"},
]

while True:
  opcao = menu_principal()
  if opcao == 'C':
    contato = entrar_dados()
    lista.append(contato)
  elif opcao == 'P':
    nome_procurar = input("Qual nome você deseja procurar na lista: ")
    i = 0
    for cont in lista:
      if cont["nome"] == nome_procurar:
        opcao_contato = menu_contato( cont )
        if opcao_contato == 'A':
          lista.remove(cont)
          print("Contato apagado com sucesso")
        elif opcao_contato == 'E':
          print("Por favor digite novas informações para este contato:")
          lista[i] = entrar_dados()
          print("Informações alteradas com sucesso")
        elif opcao_contato == 'V':
          print("Retornando ao menu principal")
          break
      i = i + 1
  elif opcao == 'L':
    print("{:<40}{:^10}{:>30}".format("Nome", "Telefone", "Email"))
    for contato in lista:
      print("{:<40}{:^10}{:>30}".format(contato["nome"], 
                                        contato["telefone"], contato["email"]))
    print("\n\n\n")
  elif opcao == 'S':
    break
