class CorretivoMaquiagem():
    cor = "#AD6C44"
    marca = ""
    tipo = ""
    fragrancia = ""
    textura = ""

    def cobrir(self):
        print("Cobrindo com a maquiagem")

    def passar_com_pincel(self):
        print("Passando a maquiagem com pincel")

    def remover(self):
        print("Removendo a maquiagem")


class Computador():
    marca = ""
    preco = 0.0
    qualidade = 0
    peso = 0.0
    cor = "#000000"

    def ligar(self):
        print("Computador ligado")

    def conectar_internet(self):
        print("Conectar a internet")

    def atualizar(self):
        print("Atualizar o computador")


class Pneu():
    marca = ""
    aro = 13

    def rodar(self):
        print("Pneu com aro", self.aro ,"esta rodando")



class Carro():
    marca = ""
    qtd_combustivel = 0
    tipo_combustivel = ""
    placa = ""
    chassi = ""
    ligado = False
    pneu = Pneu()

    def dirigir(self):
        if self.ligado:
            print("Dirigindo...")
            self.pneu.rodar()
        else:
            print("Precisa ligar o carro primeiro")

    def ligar(self):
        print("Ligando o carro...")
        self.ligado = True

    def trocar_marcha(self):
        print("Trocando a marcha")




class Ferrari( Carro ):
    qtd_combustivel = 40

    def dirigir_rapido(self):
        self.qtd_combustivel = self.qtd_combustivel - 10
        print("Dirigindo rapido")

    

f512 = Ferrari()
print("Combustivel Ferrari: ", f512.qtd_combustivel)
f512.ligar()
f512.dirigir()
f512.dirigir_rapido()
print("Combustivel Ferrari: ", f512.qtd_combustivel)

# fiat_uno = Carro()
# celta = Carro()
# corsa_classic = Carro()

# fiat_uno.placa = "FTU1234"
# celta.marca = "Chevrolet"


# print ("Fiat Uno")
# print("Marca: ", fiat_uno.marca)
# print("Qtd Combustivel: ", fiat_uno.qtd_combustivel)
# print("Tipo Combustivel: ", fiat_uno.tipo_combustivel)
# print("Placa: ", fiat_uno.placa)
# print("Chassi: ", fiat_uno.chassi)
# print("Ligado: ", fiat_uno.ligado)


# print ("Celta")
# print("Marca: ", celta.marca)
# print("Qtd Combustivel: ", celta.qtd_combustivel)
# print("Tipo Combustivel: ", celta.tipo_combustivel)
# print("Placa: ", celta.placa)
# print("Chassi: ", celta.chassi)
# print("Ligado: ", celta.ligado)