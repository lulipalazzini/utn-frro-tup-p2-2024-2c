# ej 1, 2, 3, 4 y 5
class Persona():
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def get_edad(self):
        print(f"Edad: {self.edad}")
    
    def print_persona(self):
        print(f"Hola soy {self.nombre} y tengo {self.edad} años")

    def es_mayor_de_edad(self):
        if self.edad >= 18:
            return True
        else:
            return False
    
    def es_mayor_que(self, otra_persona):
        return self.edad > otra_persona.edad
        

persona1 = Persona("Juan", 25)
persona2 = Persona("Maria", 23)
persona1.print_persona()
persona2.print_persona()

if persona1.es_mayor_que(persona2):
    print(f"{persona1.nombre} es mayor que {persona2.nombre}")
else:
    print(f"{persona1.nombre} no es mayor que {persona2.nombre}")

# ej 6
class Alumno():
    def __init__(self, nombre, nota):
        self.nombre = nombre
        self.nota = nota
    
    def print_alumno(self):
        print(f"La nota de {self.nombre} es {self.nota}")
    
    def esta_aprobado(self):
        if self.nota >= 6:
            print(f"{self.nombre} esta aprobado con nota: {self.nota}")
        else:
            print(f"{self.nombre} no esta aprobado con nota: {self.nota}")

# ej 7
class Triangulo():
    def __init__(self, lado1, lado2, lado3):
        self.lado1 = lado1
        self.lado2 = lado2
        self.lado3 = lado3
    
    def print_lados(self):
        print(f"Lado 1: {self.lado1}")
        print(f"Lado 2: {self.lado2}")
        print(f"Lado 3: {self.lado3}")

    def tipo_triangulo(self):
        if self.lado1 == self.lado2 == self.lado3:
            print("Es equilatero")
        elif self.lado1 == self.lado2 or self.lado1 == self.lado3 or self.lado2 == self.lado3:
            print("Es isosceles")
        else:
            print("Es escaleno")

# ej 8
class Calculadora():
    def __init__(self, num1, num2):
        self.num1 = num1
        self.num2 = num2
    
    def suma(self):
        print(self.num1 + self.num2)
    
    def resta(self):
        print(self.num1 - self.num2)
    
    def multiplicacion(self):
        print(self.num1 * self.num2)
    
    def division(self):
        print(self.num1 / self.num2)

num1 = int(input("Ingrese un numero"))
num2 = int(input("Ingrese otro numero"))
calculos1 = Calculadora(num1, num2)

# ej 9
class Agenda():
    def __init__(self, nombre, telefono, email):
        self.nombre = nombre
        self.telefono = telefono
        self.email = email
    
    def menu(self):
        print("1. Añadir contacto")
        print("2. Listar contactos")
        print("3. Buscar contacto")
        print("4. Editar contacto")
        print("5. Cerrar agenda")

# ej 10
class Cliente():
    def __init__(self, nombre, cantidad=0):
        self.nombre = nombre
        self.cantidad = cantidad

    def depositar(self, monto):
        monto = int(input("Ingrese el monto a depositar"))
        self.cantidad += monto
        print(f"{self.nombre} ha depositado {monto}")

    def extraer(self, monto):
        if monto > self.cantidad:
            print(f"{self.nombre} no tiene suficiente saldo para extraer {monto}.")
        else:
            self.cantidad -= monto
            print(f"{self.nombre} ha extraído {monto}. Saldo actual: {self.cantidad}")

    def mostrar_total(self):
        return self.cantidad


class Banco():
    def __init__(self):
        self.cliente1 = Cliente("Ana", 10)
        self.cliente2 = Cliente("Luis", 30)
        self.cliente3 = Cliente("Carlos", 20)
    
    def operar(self):
        print("1. Depositar")
        print("2. Extraer")
    
    def deposito_total(self):
        print("El deposito total es: ")