from random import randint, seed, randrange
from time import time

# print("Timestamp: ", time())

# seed(1000)

randrange(1, 10, 3) 
# [1, 2, 3, 4, 5, 6, 7, 8, 9]
# [1, 4, 7]

contador = 0
while contador < 10:
    # numero = randint(1, 100)
    numero = randrange(1, 10, 3)
    print( "Numero aleatório: ", numero)
    contador = contador + 1