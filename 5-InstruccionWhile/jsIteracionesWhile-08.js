/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

let numero;
let seguir;
let positivos = 0;
let negativos = 1;
let flag = 0;

do {

	numero = parseInt(prompt("Ingrese un número"));

	seguir = prompt("¿Quiere ingresar otro número?");

	if (numero >= 0) {

		positivos = positivos + numero;

	} else {

		negativos = negativos * numero;
		flag = 1;
	}

	} while (seguir == 's');


if (flag == 0) {

		negativos = 0;
}

document.getElementById("txtIdProducto").value = negativos;

document.getElementById("txtIdSuma").value = positivos;


}