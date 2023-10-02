import kivy
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.textinput import TextInput
from kivy.uix.label import Label
from kivy.uix.button import Button
import oracledb

print("Programa para gestão de contatos de uma agenda eletronica")
# nome
# telefone
# email
class AgendaForm( App ):

    def __init__(self):
        super().__init__()
        self.conn = oracledb.connect(user="rm550364", password="021204", 
                                dsn="oracle.fiap.com.br:1521/orcl")
        print("Conectado no banco de dados")
        
    def salvar(self, *args):
        cursor = self.conn.cursor()
        sql = """INSERT INTO contatos (nome, telefone, email) 
                 VALUES (:nome, :tel, :email)"""
        cursor.prepare(sql)
        cursor.execute(None, 
                       {"nome": self.txt_nome.text, 
                        "tel": self.txt_telefone.text,
                        "email": self.txt_email.text})
        cursor.close()
    
    def listar(self, *args):
        cursor = self.conn.cursor()
        cursor.execute("""SELECT nome, telefone, email FROM contatos""")
        contatos = cursor.fetchall()
        cursor.close()
        self.box_lista.clear_widgets()
        box_cabecalho = BoxLayout(orientation="horizontal")
        box_cabecalho.add_widget(Label(text="Nome"))
        box_cabecalho.add_widget(Label(text="Telefone"))
        box_cabecalho.add_widget(Label(text="Email"))
        self.box_lista.add_widget( box_cabecalho )
        for contato in contatos:
            box_contato = BoxLayout(orientation="horizontal")
            box_contato.add_widget(Label(text=contato[0]))
            box_contato.add_widget(Label(text=contato[1]))
            box_contato.add_widget(Label(text=contato[2]))
            self.box_lista.add_widget( box_contato )

    def build(self):
        box_principal = BoxLayout(orientation="vertical")
        self.box_lista = BoxLayout(orientation="vertical")

        box_nome = BoxLayout(orientation="horizontal")
        self.txt_nome = TextInput()
        box_nome.add_widget( Label(text="Nome completo:")  )
        box_nome.add_widget( self.txt_nome )

        box_telefone = BoxLayout(orientation="horizontal")
        self.txt_telefone = TextInput()
        box_telefone.add_widget( Label(text="Telefone:")  )
        box_telefone.add_widget( self.txt_telefone )

        box_email = BoxLayout(orientation="horizontal")
        self.txt_email = TextInput()
        box_email.add_widget( Label(text="Email:")  )
        box_email.add_widget( self.txt_email )

        box_botoes = BoxLayout(orientation="horizontal")
        btn_salvar = Button(text="Salvar")
        btn_salvar.bind(on_press=self.salvar)
        box_botoes.add_widget( btn_salvar )
        btn_listar = Button(text="Listar")
        btn_listar.bind(on_press=self.listar)        
        box_botoes.add_widget( btn_listar )

        box_principal.add_widget( box_nome )
        box_principal.add_widget( box_telefone )
        box_principal.add_widget( box_email )
        box_principal.add_widget( box_botoes )
        box_principal.add_widget( self.box_lista )

        return box_principal
    
if __name__ == "__main__":
    agenda = AgendaForm()
    agenda.run()
        