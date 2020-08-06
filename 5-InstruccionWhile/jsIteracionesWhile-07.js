/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {

let numero = 0;
let promedio;
let seguir;
let cantidad = 0;


do {

	numero += parseInt(prompt("Ingrese un número"));

	seguir = prompt("¿Quiere ingresar otro número?");

	cantidad ++;

	}while (seguir == 's');

promedio = numero / cantidad;

document.getElementById("txtIdSuma").value = numero;
document.getElementById("txtIdPromedio").value = promedio;

}