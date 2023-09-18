import kivy
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.textinput import TextInput

class MeuApp( App ): 
    def build(self):
        box_vert = BoxLayout(orientation="vertical")
        box_a = BoxLayout(orientation="horizontal")
        box_b = BoxLayout(orientation="horizontal")
        label_a = Label(text="Nome: ")
        txt_a = TextInput()
        btn_a = Button(text="Gravar")
        label_b = Label(text="Telefone: ")
        txt_b = TextInput()

        box_a.add_widget(label_a)
        box_a.add_widget(txt_a)
        box_a.add_widget(btn_a)

        box_b.add_widget(label_b)
        box_b.add_widget(txt_b)

        box_vert.add_widget(box_a)
        box_vert.add_widget(box_b)

        return box_vert
    
MeuApp().run()
