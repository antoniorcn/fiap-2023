import kivy
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.gridlayout import GridLayout
from kivy.uix.textinput import TextInput
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.scrollview import ScrollView
from kivy.core.window import Window

class Teste( App ):
    def build(self):
        box = BoxLayout(orientation="vertical")
        scroll = ScrollView(size_hint=(1, None), size=(Window.width, Window.height))
        scroll.bar_color = [255, 255, 255, 1]
        scroll.bar_width = 20
        grid = GridLayout(cols=1, spacing=10)
        
        for i in range(20):
            lbl = Label(text = "Linha : " + str(i))
            grid.add_widget(lbl)
        scroll.add_widget( grid )
        # box.add_widget(Label(text="Lista..."))
        # box.add_widget(scroll)
        return scroll
        

Teste().run()