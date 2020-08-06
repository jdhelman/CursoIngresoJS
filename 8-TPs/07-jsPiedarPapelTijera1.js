/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccion;
let numeroSecreto;

function comenzar()
{
	
numeroSecreto = Math.round(Math.random() * 2 + 1);



}//FIN DE LA FUNCIÓN
function piedra()
{
	eleccion = 1

	switch (numeroSecreto) {

		case 1 :
			alert("Empató");
			break;
		case 2 :
			alert("Perdió");
			break;
		case 3 :
			alert("Ganó");
			break
	}
	
numeroSecreto = Math.round(Math.random() * 2 + 1);


}//FIN DE LA FUNCIÓN
function papel()
{
	eleccion = 2

	switch (numeroSecreto) {

		case 1 :
			alert("Ganó");
			break;
		case 2 :
			alert("Empató");
			break;
		case 3 :
			alert("Perdió");
			break
	}

numeroSecreto = Math.round(Math.random() * 2 + 1);


}//FIN DE LA FUNCIÓN
function tijera()
{
	eleccion = 3

	switch (numeroSecreto) {

		case 1 :
			alert("Perdió");
			break;
		case 2 :
			alert("Ganó");
			break;
		case 3 :
			alert("Empató");
			break
	}

numeroSecreto = Math.round(Math.random() * 2 + 1);


}//FIN DE LA FUNCIÓN