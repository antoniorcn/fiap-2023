import requests
import json

print("Cliente HTTP iniciado")
print("Conectando no servidor Pudim")
# resp = requests.get("http://pudim.com.br")
resp = requests.get("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial='06-01-2023',dataFinalCotacao='07-30-2023')?$top=100&$format=json&$select=cotacaoVenda")
print("Resposta recebbida HEADERS")
print(resp.headers)
print("Dados recebidos em formato: ", 
        resp.headers["Content-Type"])
print("Resposta recebida BODY")
dados = json.loads(resp.text)
lista = dados["value"]
for item in lista:
    print(item["cotacaoVenda"])