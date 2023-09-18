import kivy
from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.floatlayout import FloatLayout

print("Programa com Kivy iniciado")

class MeuApp( App ):
    def build(self):
        layout_a = FloatLayout(size=(400, 400))
        # label_a = Label(text="Label A", pos=(-400, 0))
        label_b = Label(text="Label B", pos=(300, -300))
        label_a = Label(text="Label A", pos=(0, 0),
                           size_hint=(.5, .5))
        layout_a.add_widget(label_a)
        layout_a.add_widget(label_b)
        return layout_a

MeuApp().run()

print("Programa com Kivy finalizado")