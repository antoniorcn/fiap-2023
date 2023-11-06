class NumeroInvalidoError(Exception):
    """Exception raised for error for Invalid Number

    Attributes:
        message -- explanation of the error
    """
    def __init__(self, message="O numero deve ser um inteiro positivo"):
        self.message = message
        super().__init__(self.message)



def dividir( n1, n2 ):
    if n2 != 0:
        return n1/n2
    else:
        raise NumeroInvalidoError()

print("Teste de Exceção no Python")
print("Por favor digite um numero: ")
num1 = int(input())

correto = False
while not correto:
    try:
        print("Por favor digite outro numero: ")
        num2 = int(input())  # Pode dar ValueError
        resultado = dividir(num1, num2)

        correto = True
        print("Resultado: ", resultado)
    except NumeroInvalidoError as e:
        print("O numero a ser divisor não pode ser zero (0)", e)
    except ValueError as e:
        print("O valor a ser digitado precisa ser um numero")
    else:
        print(" Deu tudo certo ate mais obrigado ")
    finally:
        print(" ---------- ")
    