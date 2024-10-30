# ej 1
mensaje = "Hola mundo"
print(mensaje)
mensaje = "Bienvenidos a la programación en Python"
print(mensaje)

# ej 2
print("Lucia")
print(22)
print("Rosario")

# ej 3
nombre = input("Ingrese su nombre")
edad = int(input("Ingrese su edad"))
ciudad = input("Ingrese su ciudad")
print(f"Hola {nombre} de {edad} años que vive en {ciudad}")

# ej 4
int1 =  int(input("Ingrese un número entero"))
int2 = int(input("Ingrese otro número entero"))
float1 =  float(input("Ingrese un número flotante"))
print("El resultado es: ", (int1 + int2) * float1)

# ej 5
print("Suma: ", int1 + int2)
print("Resta: ", int1 - int2)
print("Multiplicación: ", int1 * int2)

if int1 == 0 or  int2 == 0:
    print("No se puede dividir entre cero")
else:
    print("División: ", int1 / int2)

print("Modulo", int1 % int2)

# ej 6
miNombre = "Lucia"
miEdad = 22
miCalificacion = 9
print(f"Mi nombre es {miNombre}, tengo {miEdad} años y mi última calificación fue {miCalificacion}")

#CONTROLADORES DE FLUJO
# ej 1
if edad >= 18:
    print("Eres mayor de edad")
elif edad >= 13 and edad <= 17:
    print("Eres adolescente (menor de edad)")
else:
    print("Eres menor de edad")

# ej 2
calificacion = int(input("Ingrese su calificacion"))
if calificacion < 4:
    print("Insuficiente")
elif calificacion >= 4 and calificacion < 6:
    print("Regular")
elif calificacion >= 6 and calificacion < 8:
    print("Bueno")
elif calificacion >= 8 and calificacion < 10:
    print("Muy bueno")
elif calificacion == 10:
    print("Excelente")
else:
    print("Nota invalida")

# ej 3
contador = 0
total = 0
while contador <= int1:
    print(contador)
    contador += 1
    total = total + contador
print(f"El total es: {total}")

# ej 4
for i in range(1, 11):
    print(i * int1)

# ej 5
passIngresada = input("Ingrese una contraseña")
passCorrecta = "felipe"
while passIngresada != passCorrecta:
    print("Contraseña incorrecta")
    passIngresada = input("Ingrese una contraseña")
if passIngresada == passCorrecta:
    print("Contraseña correcta")

# ej 6
int3 =  int(input("Ingrese un número entero"))

if int1 > int2 and int1 > int3:
    print(f"El número más grande es: {int1}")
elif int2 > int1 and int2 > int3:
    print(f"El número más grande es: {int2}")
elif int3 > int1 and int3 > int2:
    print(f"El número más grande es: {int3}")
else:
    print("Los numeros son iguales")

# ej 7
licencia = input("Tiene licencia? SI / NO")
if edad >= 21 and licencia.upper() == "SI":
    print("Puede alquilar un coche")
else:
    print("No puede alquilar un coche")
