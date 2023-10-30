from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button

class ProdutoApp(App):
    def __init__(self):
        super().__init__()
        self.lista = []
    
    def build(self):
        box_layout = BoxLayout(orientation="vertical")
        lbl_nome = Label(text="Nome do Produto: ")
        self.txt_nome = TextInput()
        lbl_descricao = Label(text="Descricao: ")
        self.txt_descricao = TextInput()
        lbl_preco = Label(text="Preco: ")
        self.txt_preco = TextInput()
        btn_salvar = Button(text="Salvar")
        btn_listar = Button(text="Listar")

        box_layout.add_widget(lbl_nome)
        box_layout.add_widget(self.txt_nome)
        box_layout.add_widget(lbl_descricao)
        box_layout.add_widget(self.txt_descricao)
        box_layout.add_widget(lbl_preco)
        box_layout.add_widget(self.txt_preco)
        box_layout.add_widget(btn_salvar)
        box_layout.add_widget(btn_listar)

        btn_salvar.bind(on_press=self.salvar)
        btn_listar.bind(on_press=self.listar)

        return box_layout
    
    def salvar(self, *args):
        with open("produtos.csv", "a+") as arquivo: 
            # arquivo.writes("nome_produto; descricao; preco\n")
            arquivo.write("{}; {}; {}\n".format(self.txt_nome.text, 
                                                 self.txt_descricao.text, 
                                                 self.txt_preco.text))
    
    def ler(self):
        with open("produtos.csv", "r") as arquivo:
            self.lista = []
            linha = 0
            contador = 0
            while linha != "":
                linha = arquivo.readline()
                # if contador > 0:
                print(linha)
                valores = linha.split(";")
                print(valores)
                if len(valores) > 2:
                    obj = {"nome": valores[0], "descricao": valores[1], "preco": float(valores[2])}
                    print(obj)
                    self.lista.append(obj)
                contador += 1

    def listar(self, *args):
        self.ler()
        print("nome do produto\t-\tpreço")
        for obj in self.lista:
            print("{}\t-\t{}".format(obj["nome"], obj["preco"]))


    
if __name__ == "__main__":
    ProdutoApp().run()




