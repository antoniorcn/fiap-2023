nome_arquivo = "c:/temp/teste.txt"

arquivo = open(nome_arquivo, "r")
letra = None
while letra != "":
    letra = arquivo.read(1)
    print(letra)

# texto = arquivo.read()
# for letra in texto:
#     print(letra)
