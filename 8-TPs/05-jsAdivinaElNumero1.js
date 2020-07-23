/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos;
let flag = 0;

function comenzar() {

	numeroSecreto = Math.round(Math.random() * 99 + 1);
	alert(numeroSecreto);
	contadorIntentos = 0;
	document.getElementById("txtIdIntentos").value = contadorIntentos;
	flag = 1;

	
}

function verificar() {

	let numero;

	if (flag == 0) {
		alert("Primero debes presionar el boton comenzar");

	}else {
		contadorIntentos += 1; // es lo mismo que ContadorIntentos = ContadorIntentos + 1 ó contadorIntentos++
		document.getElementById("txtIdIntentos").value = contadorIntentos;
		numero = parseInt(document.getElementById("txtIdNumero").value);

		if (numero == numeroSecreto) {
			alert("¡Usted es un ganador! Y en solo "+contadorIntentos+" intentos")
			flag = 0;


		}else if (numero > numeroSecreto) {
			alert("Se pasó.")


		}else{
			alert("Falta.")
		}

	}
	


}