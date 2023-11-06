import requests

print("Cliente HTTP Iniciado")

resposta = requests.get("http://127.0.0.1:80/teste")

print("Resposta Status: ", resposta.status_code)
print("Resposta Headers: ", resposta.headers)
print("Resposta Corpo: ", resposta.text)
