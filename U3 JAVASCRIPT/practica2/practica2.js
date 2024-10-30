document.write(<h1>Funciones</h1>);
/* 1. Realizar una función, a la que se le pase como parámetro un número N,
y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
curso Full Stack” */
let nEj1 = parseInt(prompt("Ej 1: Ingrese un numero"));
function ej1 (nEj1) {
    for (let i = 0; i < nEj1; i++) {
        console.log("Bienvenidos al curso Full Stack");
    }
}
ej1(nEj1);

/* 2. Diseñar una función que tenga como parámetros dos números, y que
calcule el máximo. */
let n1Ej2 = parseInt(prompt("Ej 2: Ingrese un numero"));
let n2Ej2 = parseInt(prompt("Ej 2: Ingrese un numero"));
function ej2 (n1Ej2, n2Ej2) {
    if (n1Ej2 > n2Ej2) {
        console.log("El mayor es: ", n1Ej2);
    } else if (n2Ej2 > n1Ej2) {
        console.log("El mayor es: ", n2Ej2);
    } else {
        console.log("Los numeros son iguales");
    }
}
ej2(n1Ej2, n2Ej2);

/* 3. Crear una función que se llame promedio3, que reciba como
parámetro tres valores y devuelva el promedio de los mismos. */
let n1Ej3 = parseInt(prompt("Ej 3: Ingrese un numero"));
let n2Ej3 = parseInt(prompt("Ej 3: Ingrese un numero"));
let n3Ej3 = parseInt(prompt("Ej 3: Ingrese un numero"));
function promedio3 (n1Ej3, n2Ej3, n3Ej3) {
    let promedio = (n1Ej3 + n2Ej3 + n3Ej3) / 3;
    console.log("El promedio es: ", promedio);
}
promedio3(n1Ej3, n2Ej3, n3Ej3);

/* 4. Crear una función que lea notas hasta que ingrese -1 y devuelve el
promedio de las notas leídas. ( aunque no se suele leer valores en una
función) Una función que se llame siguiente, que reciba como
parámetro un valor entero, y devuelva el siguiente del número
ingresado como parámetro */
let contador = 0;
let promedio = 0;

function notas (contador, promedio) {
    let notasEj4 = parseInt(prompt("Ej 4: Ingrese una nota o -1 para salir"));
    contador = 1;
    while (notasEj4 != -1) {
        promedio += notasEj4;
        notasEj4 = parseInt(prompt("Ej 4: Ingrese una nota o -1 para salir"));
        contador++;
    }
    let promedioFinal = promedio / contador;
    console.log("El promedio es: ", promedioFinal);
}
notas(contador, promedio);

let  nEj4 = parseInt(prompt("Ej 4: Ingrese un numero para saber el siguiente"));
function siguiente (nEj4) {
    let siguiente = nEj4 + 1;
    console.log("El siguiente de ", nEj4, " es: ", siguiente);
}
siguiente(nEj4);

/* 5. Una función que se llame doble, que reciba como parámetro un valor, y
devuelva el doble del número ingresado como parámetro. */
let  nEj5 = parseInt(prompt("Ej 5: Ingrese un numero para saber el doble"));
function doble (nEj5) {
    let doble = nEj5 * 2;
    console.log("El doble de ", nEj5, " es: ", doble);
}
doble(nEj5);

/* 6. Una función que se llame cuadrado, que reciba como parámetro un
valor, y devuelva el valor del numero ingresado como parámetro
elevado al cuadrado. */
let  nEj6 = parseInt(prompt("Ej 6: Ingrese un numero para saber el cuadrado"));
function cuadrado (nEj6) {
    let cuadrado = nEj6 ** 2;
    console.log("El cuadrado de ", nEj6, " es: ", cuadrado);
}
cuadrado(nEj6);

/* 7. Una función que se denomine imprimirValores que dado un número
por parámetro, imprima cual es el valor siguiente, el doble y el
cuadrado. Usando las funciones definidas en los puntos 5) , 6) y 7) :
siguiente, el doble y el cuadrado. */
let  nEj7 = parseInt(prompt("Ej 7: Ingrese un numero para saber el siguiente, el doble y el cuadrado"));
function imprimirValores (nEj7) {
    let siguiente = nEj7 + 1;
    let doble = nEj7 * 2;
    let cuadrado = nEj7 ** 2;
    console.log("El siguiente de ", nEj7, " es: ", siguiente);
    console.log("El doble de ", nEj7, " es: ", doble);
    console.log("El cuadrado de ", nEj7, " es: ", cuadrado);
}
imprimirValores(nEj7);

/* 8. Una función que se denomine imprimirElDobleDelSiguiente que dado
un número por parámetro, imprima cual es el valor siguiente al el doble.
Usando las funciones definidas en los puntos 5) , 6) : siguiente, el
doble . */
let  nEj8 = parseInt(prompt("Ej 8: Ingrese un numero para saber el doble del siguiente"));
function imprimirElDobleDelSiguiente (nEj8) {
    let doble = nEj8 * 2;
    let dobleSiguiente = doble + 1;
    console.log("El siguiente del doble de ", nEj8, " es: ", dobleSiguiente);
}
imprimirElDobleDelSiguiente(nEj8);

/* 9. Una función que se denomine
imprimirElDobleDelSiguienteAlCuadrado que dado un número por
parámetro, imprima cual es el valor siguiente al el doble. Usando las
funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el
cuadrado */
let  nEj9 = parseInt(prompt("Ej 9: Ingrese un numero para saber el doble del siguiente de su cuadrado"));
function imprimirElDobleDelSiguienteAlCuadrado (nEj9) {
    let doble = nEj9 * 2;
    let dobleSiguiente = doble + 1;
    let dobleSiguienteCuadrado = dobleSiguiente ** 2;
    console.log("El siguiente del doble al cuadrado de ", nEj9, " es: ", dobleSiguienteCuadrado);
}
imprimirElDobleDelSiguienteAlCuadrado(nEj9);

/* 10.Una función que dado la longitud de un lado de un cuadrado devuelva
el perímetro */
let ladoEj10 = parseInt(prompt("Ej 10: Ingrese la longitud de un lado de un cuadrado"));
function perimetroCuadrado (ladoEj10) {
    let perimetro = ladoEj10 * 4;
    console.log("El perimetro del cuadrado es: ", perimetro);
}
perimetroCuadrado(ladoEj10);

/* 11. Una función que dado la longitud de un lado de un cuadrado devuelva
la superficie. */
let ladoEj11 = parseInt(prompt("Ej 11: Ingrese la longitud de un lado de un cuadrado"));
function superficieCuadrado (ladoEj11) {
    let superficie = ladoEj11 ** 2;
    console.log("La superficie del cuadrado es: ", superficie);
}
superficieCuadrado(ladoEj11);

/* 12.Una función que dado el radio de un círculo devuelva la circunferencia
(perímetro del círculo). */
let radioEj12 = parseInt(prompt("Ej 12: Ingrese el radio de un círculo"));
function circunferenciaCirculo (radioEj12) {
    let circunferencia = 2 * Math.PI * radioEj12;
    console.log("La circunferencia del círculo es: ", circunferencia );
}
circunferenciaCirculo(radioEj12);

/* 13.Una función que dado el radio de un círculo devuelva el área del
círculo. */
let radioEj13 = parseInt(prompt("Ej 13: Ingrese el radio de un círculo"));
function areaCirculo (radioEj13) {
    let area = Math.PI * (radioEj13 ** 2);
    console.log("El área del círculo es: ", area );
}
areaCirculo(radioEj13);

/* 14.Una función que dado un número de mes y me devuelva la cantidad de
días de ese mes (suponiendo que no es un año bisiesto). */
let mesEj14 = parseInt(prompt("Ej 14: Ingrese el número del mes (1-12)"));
function  diasDelMes(mesEj14) {
    switch (mesEj14) {
        case 1, 3,  5, 7, 8, 10, 12:
            console.log("El mes tiene 31 días");
            break;
        case 4, 6, 9, 11:
            console.log("El mes tiene 30 dias");
            break;
        case 2:
            console.log("El mes tiene 28 dias");
            break;
        default:
            console.log("Mes no válido");
    }
}
diasDelMes (mesEj14);

/* 15.Una función que reciba como parámetro un año y diga si ese año es
bisiesto. */
let anioEj15 = parseInt(prompt("Ej 15: Ingrese el año"));
function esBisiesto(anioEj15) {
    if (anioEj15 % 4 == 0 && (anioEj15 % 100 != 0 || anioEj15 % 400 == 0)) {
        console.log("El año es bisiesto");
    } else {
        console.log("El año no es bisiesto");
    }
}
esBisiesto(anioEj15);

/* 16.Una función que reciba el día, mes y año y me devuelva la cantidad de
días de ese mes. */
let diaEj16 = parseInt(prompt("Ej 16: Ingrese el día"));
let mesEj16 = parseInt(prompt("Ej 16: Ingrese el mes"));
let anioEj16 = parseInt(prompt("Ej 16: Ingrese el año"));
function diasDelMes2(mesEj16, anioEj16) {
    switch (mesEj16) {
        case 1, 3,  5, 7, 8, 10, 12:
            console.log("El mes tiene 31 días");
            break;
        case 4, 6, 9, 11:
            console.log("El mes tiene 30 dias");
            break;
        case 2:
            if (anioEj16 % 4 == 0 && (anioEj16 % 100 != 0 || anioEj16 % 400 == 0)) {
                console.log("El mes tiene 29 dias");
            } else {
                console.log("El mes tiene 28 dias");
            }
            break;
        default:
            console.log("Mes no válido");
    }
}
diasDelMes2(mesEj16, anioEj16);

/* 17.Una función que reciba día, mes y año y devuelva el día anterior */


/* 18.Una función que se llame ultimoDiaDelMes que reciba día, mes y año y
devuelva el último día del mes. */


document.write(<h1>String y Array</h1>);
/* 19.Ejercicio 1: cree un array con todas las edades de los estudiantes de su
clase. Itere el array utilizando un bucle while y luego imprima todas las
edades en la consola. */


/* 20.Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while
para imprimir solo números pares. Cambie el ciclo para usar un ciclo
"for" en lugar de un ciclo "while".
Para los siguientes ejercicios, no puede ordenar su array. ¡Asegúrese
de que su solución funcione para cualquier array que se pase! */


/* 21.Ejercicio 3: escriba una función que reciba un array como parámetro e
imprima el número más bajo de la array en la consola. */


/* 22.Ejercicio 4: escriba una función que reciba un array como parámetro e
imprima el número más grande de la array en la consola. */


/* 23.Ejercicio 5: Escriba una función que reciba dos parámetros, una array y
un índice. La función imprimirá el valor del elemento en la posición
dada (basado en uno) en la consola. Por ejemplo, dada la siguiente
array e índice, la función imprimirá '6'.
var array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1; */


/* 24.Ejercicio 6: Escriba una función que reciba una array y solo imprima los
valores que se repiten. Por ejemplo, dada la siguiente array e índice, la
función imprimirá '6,23,33,100'.
var array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; */


/* 25.Ejercicio 7: escriba una función de JavaScript simple para unir todos los
elementos de la siguiente array en una cadena.
myColor = ["Red", "Green", "White", "Black"];
Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco",
"Negro" */


/* 26.Ejercicio 8: escriba una función de JavaScript que invierta un número.
Por ejemplo, si x = 32443, la salida debería ser 34423. */


/* 27.Ejercicio 9: escriba una función de JavaScript que devuelva una cadena
en orden alfabético. Por ejemplo, si x = 'webmaster', la salida debería
ser 'abeemrstw'. La puntuación y los números no se pasan en la
cadena. */


/* 28.Ejercicio 10: escriba una función de JavaScript que convierta la primera
letra de cada palabra a mayúsculas. Por ejemplo, si x = "prince of
persia", la salida debería ser "Prince Of Persia". */


/* 29.Ejercicio 11: escriba una función de JavaScript que busque la palabra
más larga de una frase. Por ejemplo, si x = "Tutorial de desarrollo web",
el resultado debería ser "Desarrollo". */
