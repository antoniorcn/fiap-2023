import oracledb
try:
    conn = oracledb.connect(user="rm550364", 
                            password="021204", 
                            dsn="oracle.fiap.com.br:1521/orcl")
except Exception as e:
    print("Erro: ", e)
    conexao = False
else:
    print("Conectado")
    conexao = True


while True:

    print("Agenda de Contatos")
    print("(C)riar Tabela")
    print("(D)ropar Tabela")
    print("(I)nserir contato")
    print("(L)istar contatos")
    print("(S)air")

    opcao = input().lower()[0]

    if opcao == "c":
        cursor = conn.cursor()
        cursor.execute("""
            CREATE table contatos (
                id number, 
                nome varchar2(50), 
                telefone varchar2(30), 
                email varchar2(100)
            )""")
        cursor.close()
        print("Tabela criada")
    elif opcao == "d":
        cursor = conn.cursor()
        cursor.execute("""DROP table contatos """)
        cursor.close()
        print("Tabela apagada") 
    elif opcao == "i":
        print("Informe os dados para um novo contato")
        nome = input("Digite o nome completo: ")
        telefone = input("Digite o telefone com DDD (DDD) NNNN-NNNN: ")
        email = input("Digite o email valido: ")
        cursor = conn.cursor()
        texto = """INSERT INTO contatos (nome, telefone, email)
            VALUES (:nome, :telefone, :email)"""
        print(texto)
        cursor.prepare(texto)
        cursor.execute(None, {"nome": nome, "telefone": telefone, "email": email})
        cursor.close()
        print("Registro inserido") 
    elif opcao == "l":
        cursor = conn.cursor()
        cursor.execute("""SELECT * FROM contatos""")
        contatos = cursor.fetchall()
        cursor.close()
        print("Contatos: ")
        print(contatos)
    elif opcao == "s":
        print("Tchau")
        break
