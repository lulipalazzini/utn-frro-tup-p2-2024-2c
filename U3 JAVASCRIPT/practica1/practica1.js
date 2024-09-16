/* 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “Hello World”. */
alert("Hello World");

/* 2. Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga “Hello World” (document.write). */
document.write("Hola mundo!");

/* 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado
de sumar 3 + 5. */
document.write("<br> El resultado de 3 + 5 es: ",  3 + 5);

/* 4. Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga “Hola nombreUsuario” */
var nombre = prompt("Ingrese su nombre");
document.write("<br>Hola " + nombre);

/* 5. Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números. */
var num1 = parseInt(prompt("Ingrese un numero"));
var num2 = parseInt(prompt("Ingrese otro numero"));
document.write("<br> El resultado de sumar " + num1 + " y " + num2  + " es: ", num1 + num2);

/* 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor. */
if (num1  > num2) {
    document.write("<br> El numero mayor es: " + num1);
}  else {
    document.write("<br> El numero mayor es: " + num2);
}

/* 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres. */
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
var numModulo = parseInt(prompt("Ingrese un numero para ver si es divisible por 2"))
if (numModulo % 2 == 0) {
    document.write("<br> El numero " + numModulo + " es divisible por 2");
} else {
    document.write("<br> El numero " + numModulo + " no es divisible por 2");
}

/* 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
letra a */
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
var numDivisible = prompt("Ingrese otro numero");
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
/* Lo que hice para el 14 es canbiar que sean else if por if solamente, asi los ejecuta a todos */


/* 15. Escribir un programa que escriba en pantalla los divisores de un número dado */
for (var i = 1; i <= numDivisible; i++) {
    if (numDivisible % i == 0) {
        document.write("<br> El número " + i + " es divisor de " + numDivisible);
    }
}

