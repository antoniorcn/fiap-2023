import kivy
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.textinput import TextInput
from kivy.uix.label import Label
from kivy.uix.button import Button

class ProdutoCRUD( App ):
    def __init__(self):
        super().__init__()
        print("Instancia criada")
        self.lista = []

    def build(self):
        box_principal = BoxLayout(orientation = "vertical")
        box_a = BoxLayout(orientation="horizontal")
        box_nome = BoxLayout(orientation="vertical")
        self.txt_nome = TextInput()
        box_nome.add_widget(self.txt_nome)
        box_nome.add_widget(Label(text="Informe o nome do produto"))
        box_a.add_widget(Label(text="Nome do produto"))
        box_a.add_widget(box_nome)

        box_b = BoxLayout(orientation="horizontal")
        box_qtd = BoxLayout(orientation="vertical")
        self.txt_qtd = TextInput()
        box_qtd.add_widget(self.txt_qtd)
        box_qtd.add_widget(Label(text="Informe a quantidade de numeros em decimal exemplo 10.50"))
        box_b.add_widget(Label(text="Quantidade do produto"))
        box_b.add_widget(box_qtd)

        box_c = BoxLayout(orientation="horizontal")
        box_unidade = BoxLayout(orientation="vertical")
        self.txt_unidade = TextInput()
        box_unidade.add_widget(self.txt_unidade)
        box_unidade.add_widget(Label(text="Informe a unidade de medida, exemplo=Kg, Litros, Unidades, etc..."))
        box_c.add_widget(Label(text="Unidade de Medida"))
        box_c.add_widget(box_unidade)

        box_botoes = BoxLayout(orientation="horizontal")
        btn_salvar = Button(text="Salvar")
        btn_salvar.bind(on_press=self.salvar)
        btn_listar = Button(text="Listar")
        btn_listar.bind(on_press=self.listar)
        box_botoes.add_widget(btn_salvar)
        box_botoes.add_widget(btn_listar)

        box_principal.add_widget(box_a)
        box_principal.add_widget(box_b)
        box_principal.add_widget(box_c)
        box_principal.add_widget(box_botoes)

        return box_principal
    
    def salvar(self, *args):
        print("Botao Salvar apertado")
        # print("Valor do Nome: ", self.txt_nome.text)
        # print("Valor do Quantidade: ", self.txt_qtd.text)
        # print("Valor do Unidade de Medida: ", self.txt_unidade.text)
        d = {   "nome": self.txt_nome.text, 
                "qtd": self.txt_qtd.text,
                "unidade": self.txt_unidade.text
            }
        self.lista.append(d)
        self.txt_nome.text = ""
        self.txt_qtd.text = ""
        self.txt_unidade.text = ""
        print(self.lista)

    def listar(self, *args):
        print("Nome\t\t\tQtd\t\t\tUnidade de Medida")
        for item in self.lista:
            print('{}\t\t\t{}\t\t\t{}'\
                  .format(item["nome"], item["qtd"], item["unidade"]))
    
produto_crud = ProdutoCRUD()
produto_crud.run()