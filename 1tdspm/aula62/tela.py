import kivy
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
import csv

def salvar_para_csv(nome_arquivo, lista, nome_campos):
    with open(nome_arquivo, 'w', newline="") as csvfile:
        writer = csv.DictWriter(csvfile, 
                                fieldnames=nome_campos,
                                delimiter=';',
                                quotechar='"',
                                quoting=csv.QUOTE_NONNUMERIC)
        writer.writeheader()
        for obj in lista:
            writer.writerow(obj)
    # Arquivo sera automaticamente fechado

def ler_do_csv( nome_arquivo ):
    nova_lista = []
    with open(nome_arquivo, 'r') as csvfile:    
        reader = csv.DictReader(csvfile, 
                                delimiter=';',
                                quotechar='"',
                                quoting=csv.QUOTE_NONNUMERIC)        
        for row in reader:
            nova_lista.append(row)
    return nova_lista

def limpar( valor ):
    if isinstance(valor, str):
        return valor.strip().replace("\n", " ")
    # elif isinstance(valor, float):
    #     return str(valor).replace(".", ",")
    else:
        valor


class Tela( App ):
    def __init__(self):
        super().__init__()
        self.lista = ler_do_csv("pizzas.csv")

    def salvar(self, *args):
        obj = {"sabor": limpar(self.txtSabor.text),
               "tamanho": limpar(self.txtTamanho.text),
               "preco": float(self.txtPreco.text)}
        self.lista.append( obj )
        salvar_para_csv("pizzas.csv", 
                        self.lista, 
                        list(obj.keys()))
       
    def pesquisar(self, *args):
        for obj in self.lista:
            if self.txtSabor.text in obj["sabor"]:
                self.txtSabor.text = obj["sabor"]
                self.txtTamanho.text = obj["tamanho"]
                self.txtPreco.text = str(obj["preco"])
        

    def build(self):
        super().build()
        box = BoxLayout(orientation="vertical", 
                        padding=[100, 0, 100, 0],
                        spacing=20)
        lblTitulo = Label(text="Pizzaria", 
                          font_size='30sp')
        box.add_widget(lblTitulo)
        self.txtSabor = TextInput(size_hint=(.8, 1))
        self.txtTamanho = TextInput(size_hint=(.8, 1))
        self.txtPreco = TextInput(size_hint=(.8, 1))
        btnSalvar = Button(text="Salvar")
        btnSalvar.bind(on_press=self.salvar)

        box_sabor = BoxLayout(orientation="horizontal", 
                              spacing=10,
                              padding=10)
        btnPesquisar = Button(text="Pesquisar", size_hint=(.2, 1))
        btnPesquisar.bind(on_press=self.pesquisar)
        box_sabor.add_widget(self.txtSabor)
        box_sabor.add_widget(btnPesquisar)

        box.add_widget(Label(text="Sabor da Pizza"))
        box.add_widget( box_sabor )
        box.add_widget(Label(text="Tamanho"))
        box.add_widget( self.txtTamanho )
        box.add_widget(Label(text="Preço"))
        box.add_widget( self.txtPreco )
        box.add_widget( btnSalvar )
        return box

# tela = Tela()
# tela.run()

# Tela().run()

if __name__== "__main__":
    tela = Tela()
    tela.run()
