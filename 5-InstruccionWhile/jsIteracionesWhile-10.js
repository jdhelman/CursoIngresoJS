/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let seguir;
	let positivos = 0;
	let negativos = 0;
	let cantidadNegativos = 0;
	let cantidadPositivos = 0;
	let cantidadCeros = 0;
	let contadorPar = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;


	do {

		numero = parseInt(prompt("Ingrese un número"));

		if (numero > 0) {

			positivos = positivos + numero;
			cantidadPositivos++;


		} else if (numero < 0) {

			negativos = negativos + numero;
			cantidadNegativos++;
			

		} else {

			cantidadCeros++;

		}

		if (numero % 2 == 0) {

			contadorPar++;

		}


		seguir = prompt("¿Quiere ingresar otro número?");

	} while (seguir == 's');

	promedioPositivos = positivos / cantidadPositivos;
	promedioNegativos = negativos / cantidadNegativos;
	diferencia = positivos + negativos;


	document.write("La suma de los negativos es: "+ negativos+"<br>");
	document.write("La suma de los positivos es: "+ positivos+"<br>");
	document.write("La cantidad de positivos es: "+ cantidadPositivos+"<br>");
	document.write("La cantidad de negativos es: "+ cantidadNegativos+"<br>");
	document.write("La cantidad de ceros es: "+ cantidadCeros+"<br>");
	document.write("La cantidad de números pares es: "+ contadorPar+"<br>");
	document.write("El promedio de positivos es: "+ promedioPositivos+"<br>");
	document.write("El promedio de negativos es: "+ promedioNegativos+"<br>");
	document.write("La diferencia entre positivos y negativos es: "+diferencia+"<br>");





	/*//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos); */
}//FIN DE LA FUNCIÓN