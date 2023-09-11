import requests

resposta = requests.get("https://fiap-2023-1tdspm-default-rtdb.firebaseio.com/agenda.json")
dados = resposta.json()
for key in dados.keys():
    contato = dados[key]
    print("Nome: ", contato["nome"])
    print("Email: ", contato["email"])
    print("Telefone: ", contato["telefone"])