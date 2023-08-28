
alunos = []

def menu():
    escolha = None
    while escolha == None:
        print("Gestão de Alunos")
        print("(N)ovo Aluno")
        print("(L)istar Alunos")
        print("(E)ditar Aluno")
        print("(A)pagar Aluno")
        print("(G)ravar os dados")
        print("(S)Sair")
        opcao = input("Informe a opção escolhida: ").lower()
        if opcao in ['n', 'l', 'e', 'a', 's', 'g']:
            escolha = opcao
        else:
            print("... Opção invalida ... \n\n")
    return escolha


def novo_aluno():
    print("Novo Aluno")
    nome = input("Nome: ")
    ra = input("Ra: ")
    alunos.append({"nome": nome, "ra": ra})


def listar_alunos():
    print("Listagem de alunos")
    for aluno in alunos:
        print("{} - {}".format(aluno["ra"], aluno["nome"]))
    print("\n\n")

def editar_aluno():
    print("Editar alunos")
    ra = input("Informe o RA do aluno: ")
    for aluno in alunos:
        if aluno["ra"] == ra:
            print("Aluno com RA {} encontrado".format(ra))
            print("Nome atual: {}".format(aluno["nome"]))
            aluno["nome"] = input("Informe o novo nome do aluno: ")

def gravar_alunos():
    arquivo_alunos = open("alunos.csv", "w")
    for aluno in alunos:
        linha = "{}, {}\n".format(aluno["ra"], aluno["nome"])
        arquivo_alunos.write(linha)
    arquivo_alunos.close()


def ler_alunos():
    global alunos
    arquivo_alunos = open("alunos.csv", "r")
    linha = None
    while linha != "":
        linha = arquivo_alunos.readline().strip()
        if linha != "": 
            dados_aluno = linha.split(",")
            d = {"ra": dados_aluno[0], "nome": dados_aluno[1]}
            alunos.append(d)
    arquivo_alunos.close()



if __name__ == "__main__":
    ler_alunos()
    while True:
        opcao = menu()
        match opcao:
            case 'n':
                novo_aluno()
            case 'l':
                listar_alunos()
            case 'e':
                editar_aluno()
            case 'a':
                print("Apagar Aluno")
            case 'g':
                gravar_alunos()
            case 's':
                print("Até mais")
                break
            

