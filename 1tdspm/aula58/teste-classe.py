class Aluno():
    rm = "0000"
    uniforme = False
    cor = "#FFFF00"


class AlunoFiap( Aluno ):
    def print(self):
        print("Aluno Fiap")
        print(self.rm)
        print(self.cor)
        print(self.uniforme)
