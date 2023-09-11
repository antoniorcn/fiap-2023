import requests
# resposta = requests.get(
#     "https://olinda.bcb.gov.br"+
#     "/olinda/service/PTAX/version/v1/odata/Currencies", 
#     {"$format": "json", "$top": "10"} )
# print(resposta.status_code)
# moedas = resposta.json()["value"]
# for moeda in moedas:
#     print("Symbolo: ", moeda["simbolo"])

# resposta = requests.get("https://www.climatempo.com.br/")
# # print(resposta.text)
# texto = str(resposta.text)
# i = resposta.text.find('id="current-weather-temperature"')
# print("indice ", texto[i:i+200])

resposta = requests.get("https://pokeapi.co/api/v2/pokemon/pikachu")
d = resposta.json()
print("Tipo: ", d["types"][0]["type"]["name"])
