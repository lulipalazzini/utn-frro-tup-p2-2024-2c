/* 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “Hello World”. */
alert("Hello World");

/* 2. Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga “Hello World” (document.write). */
document.write("Ejercicio 2");
document.write("<br> Hola mundo!");

/* 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado
de sumar 3 + 5. */
document.write("<br> <br> Ejercicio 3");
document.write("<br> El resultado de 3 + 5 es: ",  3 + 5);

/* 4. Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga “Hola nombreUsuario” */
document.write("<br> <br> Ejercicio 4");
var nombre = prompt("Ingrese su nombre");
document.write("<br>Hola " + nombre);

/* 5. Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números. */
document.write("<br> <br> Ejercicio 5");
var num1 = parseInt(prompt("Ingrese un numero"));
var num2 = parseInt(prompt("Ingrese otro numero"));
document.write("<br> El resultado de sumar " + num1 + " y " + num2  + " es: ", num1 + num2);

/* 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor. */
document.write("<br> <br> Ejercicio 6");
if (num1  > num2) {
    document.write("<br> El numero mayor es: " + num1);
}  else {
    document.write("<br> El numero mayor es: " + num2);
}

/* 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres. */
document.write("<br> <br> Ejercicio 7");
var num3 = parseInt(prompt("Ingrese un tercer numero"))
if (num1  > num2 && num1  > num3) {
    document.write("<br> El numero mayor es: " + num1);
}  else if (num2  > num1 && num2  > num3) {
    document.write("<br> El numero mayor es: " + num2);
} else if (num3  > num1 && num3  > num2) {
    document.write("<br> El numero mayor es: " + num3);
} else {
    document.write("<br> Los numeros ingresados son iguales");
}

/* 8. Escribe un programa que pida un número y diga si es divisible por 2*/
document.write("<br> <br> Ejercicio 8");
var numModulo = parseInt(prompt("Ingrese un numero para ver si es divisible por 2"))
if (numModulo % 2 == 0) {
    document.write("<br> El numero " + numModulo + " es divisible por 2");
} else {
    document.write("<br> El numero " + numModulo + " no es divisible por 2");
}

/* 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
letra a */
document.write("<br> <br> Ejercicio 9");
var frase = prompt("Ingrese una frase"); 
var frase1 = frase.toLowerCase();
var contadorA = 0;
for (var i = 0; i<frase1.length; i++) {
    if (frase1[i] == "a") {
        contadorA++;
        }
}
document.write("<br> La letra a aparece " + contadorA + " veces en la frase");

/* 10. Escribe un programa que pida una frase y escriba las vocales que aparecen */
/* 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
cada una de las vocales */
document.write("<br> <br> Ejercicio 10 y 12");
var contadorE = 0;
var contadorI = 0;
var contadorO = 0;
var contadorU = 0;
for (var i = 0; i<frase1.length; i++) {
    if (frase1[i] == "e") {
        contadorE++;
    } else if (frase1[i] == "i") {
        contadorI++;
    } else if (frase1[i] == "o") {
        contadorO++;
    } else if (frase1[i] == "u") {
        contadorU++;
    }
}
document.write("<br> La letra a aparece " + contadorA + " veces");
document.write("<br> La letra e aparece " + contadorE + " veces");
document.write("<br> La letra i aparece " + contadorI + " veces");
document.write("<br> La letra o aparece " + contadorO + " veces");
document.write("<br> La letra u aparece " + contadorU + " veces");

/* 11. Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales */
document.write("<br> <br> Ejercicio 11");
var contadorVocales = 0;
for (var i = 0; i<frase1.length; i++) {
    if (frase1[i] == "a" || frase1[i] == "e"  || frase1[i] == "i" || frase1[i] == "o" || frase1[i] == "u") {
        contadorVocales++;
    }
}
document.write("<br> La cantidad de vocales es " + contadorVocales);

/* 13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro) */
/* 14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay
que decir todos por los que es divisible) */
document.write("<br> <br> Ejercicio 13 y 14");
var numDivisible = parseInt(prompt("Ingrese un numero divisible"));
if (numDivisible % 2 == 0) {
    document.write("<br> El número es divisible por 2");
} 
if (numDivisible % 3 == 0) {
    document.write("<br> El número es divisible por 3");
} 
if (numDivisible % 5 == 0) {
    document.write("<br> El número es divisible por 5");
} 
if (numDivisible % 7 == 0) {
    document.write("<br> El número es divisible por 7");
}
/* Lo que hice para el 14 es cambiar que sean else if por if solamente, asi los ejecuta a todos */


/* 15. Escribir un programa que escriba en pantalla los divisores de un número dado */
document.write("<br> <br> Ejercicio 15");
for (var i = 1; i <= numDivisible; i++) {
    if (numDivisible % i == 0) {
        document.write("<br> El número " + i + " es divisor de " + numDivisible);
    }
}

/* 16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados */
document.write("<br> <br> Ejercicio 16");
var numDivisible2 = parseInt(prompt("Ingrese otro numero divisible"));
for (var i = 1; i <= numDivisible; i++) {
    if (numDivisible % i == 0 && numDivisible2 % i == 0) {
        document.write("<br> El número " + i + " es divisor de " + numDivisible + " y de " + numDivisible2);
    }
}

/* 17. Escribir un programa que nos diga si un número dado es primo (no es divisible
por ninguno otro número que no sea él mismo o la unidad) */
document.write("<br> <br> Ejercicio 17");
let esPrimo = false;
for (var i = 2; i <= numDivisible; i++) {
    if (numDivisible % i != 0) {
        esPrimo = true;
    }
}
if (esPrimo) {
    document.write("<br> El número " + numDivisible + " es primo");
} else {
    document.write("<br> El numero " + numDivisible + " no es primo");
}

/* 18. Pide la edad y si es mayor de 18 años indica que ya puede conducir */
document.write("<br> <br> Ejercicio 18");
let edad = parseInt(prompt("Ingrese su edad"));
if (edad >= 18) {
    document.write("<br> Ya puede conducir");
} else {
    document.write("<br> No puede conducir");
}

/* 19. Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente */
document.write("<br> <br> Ejercicio 19");
let nota = parseInt(prompt("Ingrese una nota (numero)"));
switch(nota)  {
    case 0,1,2:
        document.write("<br> Muy deficiente");
        break;
    case 3, 4:
        document.write("<br> Insuficiente");
        break;
    case 5:
        document.write("<br> Suficiente");
        break;
    case 6:
        document.write("<br> Bien");
        break;
    case 7, 8:
        document.write("<br> Notable");
        break;
    case 9, 10:
        document.write("<br> Sobresaliente");
        break;
    default:
        document.write("<br> La nota ingresada no es válida");
    }


/* 20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión */
document.write("<br> <br> Ejercicio 20");
let texto = prompt("Ingrese una cadena de texto");
let textoConcatenado = texto;

while (texto != null) {
    texto = prompt("Ingrese otra cadena de texto");
    textoConcatenado += " - " + texto;
}
document.write("<br>" + textoConcatenado);

/* 21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos. */
document.write("<br> <br> Ejercicio 21");
let numero = prompt("Ingrese un numero o pulsa cancelar para salir");
let numeroSuma = 0;

while (numero !== null) {
    if (isNaN(parseInt(numero))) {
        alert("Debes ingresar un número");
    } else {
        numeroSuma += parseInt(numero);
    }
    numero = prompt("Ingrese un numero o pulsa cancelar para salir");
}
document.write("<br>" + numeroSuma);


/* 22. Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento Nacional de Identidad).
El algoritmo para calcular la letra del dni es el siguiente :
● El número debe ser entre 0 y 99999999
● Debemos calcular el resto de la división entera entre el número y el número */
document.write("<br> <br> Ejercicio 22");
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
var dni = parseInt(prompt("Ingrese su DNI"));

if (dni >= 0 && dni <= 99999999) {
    const resto = dni % 23;
    const letraDNI = letras[resto];
    document.write("<br> La letra de su DNI es: " + letraDNI);
} else {
    document.write("Por favor, introduzca un número válido entre 0 y 99999999.");
}

/* 23. Realiza un script que escriba una pirámide del 1 al 30 */
document.write("<br> <br> Ejercicio 23");
for (let i = 1; i <= 30; i++) {
    let numeros = '';
    for (let j = 1; j <= i; j++) {
        numeros += i + ' ';
    }
    document.write(numeros.trim() + "<br>");
}



/* 24. Haz un script que escriba una pirámide inversa de los números del 1 al
número que indique el usuario */
document.write("<br> <br> Ejercicio 24");
let limite = parseInt(prompt("Ingrese un número para generar la pirámide:"));
if (!isNaN(limite) && limite > 0) {
    for (let i = limite; i >= 1; i--) {
        let numeros = '';
        for (let j = 1; j <= i; j++) {
            numeros += i + ' ';
        }
        document.write(numeros.trim() + "<br>");
    }
} else {
    document.write("Por favor, ingrese un número válido mayor que 0.");
}


/* 25. Un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. */
document.write("<br> <br> Ejercicio 25");
let numUltimo = 1;
let numMultiplo4 = false;
let numMultiplo9 = false;
while (numUltimo <= 500) {
    numMultiplo4 = numUltimo % 4 == 0;
    numMultiplo9 = numUltimo % 9 == 0;
    document.write("<br>" + numUltimo + " ");
    if (numMultiplo4) {
        document.write("Múltiplo de 4 <br>");
    }
    if (numMultiplo9) {
        document.write("Múltiplo de 9 <br>");
    }
    if (numUltimo % 5 == 0) {
        document.write("<hr>");
    }
    numUltimo++;
}
