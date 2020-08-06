/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	while ( numero < 0 || numero > 9 || isNaN(numero)) {

	numero = parseInt(prompt("Dato inválido, debe ingresar un número entre 0 y 9."));

	}

	alert("número validado!!!");

	document.getElementById("txtIdNumero").value = "El dato obtenido y validado es: "+numero;
	
}//FIN DE LA FUNCIÓN