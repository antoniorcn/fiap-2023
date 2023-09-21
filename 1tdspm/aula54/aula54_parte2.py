import kivy
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.textinput import TextInput

class MeuApp( App ): 

    def __init__(self):
        self.lista = []

    def build(self):
        box_principal = BoxLayout(orientation="vertical")

        box_nome = BoxLayout(orientation="horizontal")
        self.txt_nome = TextInput()
        box_nome.add_widget( Label(text="Nome: ") )
        box_nome.add_widget(self.txt_nome)

        box_telefone = BoxLayout(orientation="horizontal")
        txt_telefone = TextInput()
        box_telefone.add_widget( Label(text="Telefone: ") )
        box_telefone.add_widget(txt_telefone)

        box_email = BoxLayout(orientation="horizontal")
        txt_email = TextInput()
        box_email.add_widget( Label(text="Email: ") )
        box_email.add_widget(txt_email) 

        box_botoes = BoxLayout(orientation="horizontal")
        btn_salvar = Button(text="Salvar")
        btn_listar = Button(text="Listar")
        box_botoes.add_widget(btn_salvar)
        box_botoes.add_widget(btn_listar)

        box_principal.add_widget(box_nome)
        box_principal.add_widget(box_telefone)
        box_principal.add_widget(box_email)
        box_principal.add_widget(box_botoes)

        btn_salvar.bind(on_press=self.salvar)

        return box_principal
    

    def salvar(self, *args):
        print("Nome: ", self.txt_nome.text)


MeuApp().run()
