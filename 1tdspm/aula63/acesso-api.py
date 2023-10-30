import requests
import json

URL = "https://fiap-2023-1tdspm-default-rtdb.firebaseio.com/agenda.json"

class AcessoAPI():
    def __init__(self) -> None:
        pass

    def ler(self):
        response = requests.get(URL)
        dicionario = response.json()
        if response.status_code == 200:
            for obj in dicionario.values():
                print("-"*40)
                print("Nome Completo: ", obj["nome"])
                print("Telefone: ", obj["telefone"])
                print("Email: ", obj["email"])
                print("\n")

    def cadastrar(self):
        print("Cadastrar novo contato")
        print("Informe o nome do contato: ")
        nome = input()
        print("Informe o telefone do contato: ")
        telefone = input()
        print("Informe o email do contato: ")
        email = input()
        obj = {"nome": nome, "telefone": telefone, "email": email}
        str_obj = json.dumps(obj)
        resposta = requests.post(URL, headers={
            "content-type": "application/json"
        }, data=str_obj)
        print("Resposta: ", resposta.status_code)
        if resposta.status_code == 200:
            print("Salvo com sucesso")

    def menu(self):
        while True:
            print("Menu de opções")
            print("(L)istar contatos da agenda")
            print("(C)adastrar contato na agenda")
            print("(X) para Sair")
            opcao = input("Digite sua opção ==>").lower().strip()[0]
            if opcao == 'l':
                self.ler()
            elif opcao == 'c':
                self.cadastrar()
            elif opcao == 'x':
                break

if __name__=="__main__":
    api = AcessoAPI()
    api.menu()

    


