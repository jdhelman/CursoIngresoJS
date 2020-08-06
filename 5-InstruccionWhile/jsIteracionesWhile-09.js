/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
let numero;
let seguir;
let maximo;
let minimo;
let flag = 0;


do {

	numero = parseInt(prompt("Ingrese un número"));



	if (flag == 0 || numero > maximo) {
		maximo = numero;
	}

	if (flag == 0 || numero < minimo) {
		minimo = numero;
		flag = 1;
	}


	seguir = prompt("¿Quiere ingresar otro número?");

	} while (seguir == 's');

		/*
	if (flag == 0) {
		maximo = numero;
		minimo = numero;
		flag = 1;

	}else if (numero > maximo) {
		maximo = numero;

	}else if (numero < minimo) {
		minimo = numero;

	} 
	*/


document.getElementById("txtIdMaximo").value = "El Máximo es: "+maximo;

document.getElementById("txtIdMinimo").value = "El Mínimo es: "+minimo;

}//FIN DE LA FUNCIÓN