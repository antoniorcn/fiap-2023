nome_arquivo = "d:/git/fiap-2023/1tdspm/aula46/ola_mundo.txt"
print("Nome arquivo: ", nome_arquivo)
arquivo = open(nome_arquivo, "r")

print("Objeto arquivo: ", arquivo)

#for i in range(60):
letra = None
while letra != "":
    letra = arquivo.read(1)
    if letra != "":
        print("Letra: ", letra, "  ORD: ", ord(letra))


arquivo.close()
