#CADENAS Y SLICING
# ej 1
cadena = input("Ingresa una cadena")
print(cadena[:5])
print(cadena[5:])
print(cadena[::-1])

# ej 2
print(cadena.upper())

print(cadena.count("a"))

for vocal in "aeiou":
    cadena = cadena.replace(vocal, "*")
print(cadena)

# ej 3
nombre = input("Ingrese su nombre")
edad = int(input("Ingrese su edad"))
ciudad = input("Ingrese su ciudad")
print(f"Hola, {nombre}. Tienes {edad} años y vives en {ciudad}")

# ej 4
numeros = [1, 2, 3, 4, 5]
print(numeros)
numeros.sort()
print(numeros)
numeros.pop()
print(numeros)
numeros.insert(0, 0)
print(numeros)

# ej 5
tuplaSemana = ("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo")
dia = int(input("Ingrese un numero para saber el dia de la semana "))
print(tuplaSemana[dia-1])

# ej 6
diccionario = {"Juan": 30, "Maria": 25, "Pedro": 40}
persona = input("Ingrese el nombre de una persona para saber su edad")
print(diccionario[persona.capitalize()])

# ej 7
cNumeros = {1, 2, 3, 4, 5}
cNumeros2 =  {2, 4, 6, 8, 10}
conjuntosUno = cNumeros.intersection(cNumeros2)
print(conjuntosUno)
conjuntosDos = cNumeros.difference(cNumeros2)
print(conjuntosDos)

#FUNCIONES
# ej 1
def suma(a, b):
    return a + b
print(suma(5, 7))

# ej 2
def modificar_lista(lista):
    lista.append(5)
    print(lista)
print(modificar_lista(numeros))

# ej 3
def saludar(nombre = "Desconocido"):
    print(f"Hola, {nombre}")
print(saludar("Juan"))
print(saludar())

# ej 4
'''Esta funcion multiplica dos valores'''
def multiplicar(a, b):
    return a * b
print(multiplicar(5, 7))

# ej 5
cuadrado = lambda x: x ** 2
resultado = list(map(cuadrado, numeros))
print(resultado)

# ej 6
def duplicar_valor(valor):
    return valor * 2
print(duplicar_valor(5))

def duplicar_lista(lista):
    return list(map(duplicar_valor, lista))
print(duplicar_lista(numeros))