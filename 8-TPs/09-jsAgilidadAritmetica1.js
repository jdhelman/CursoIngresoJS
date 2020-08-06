/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let primerNumero;
let segundoNumero;
let operador;
let resultado;
let operacion;


function comenzar()
{

		primerNumero = Math.round(Math.random() * 9 + 1);
		document.getElementById("txtIdPrimerNumero").value = primerNumero;

		segundoNumero = Math.round(Math.random() * 9 + 1);
		document.getElementById("txtIdSegundoNumero").value = segundoNumero;

		operador = Math.round(Math.random() * 3 + 1);
		
		if (operador == 1 ) {
			operacion = "+";
			document.getElementById("txtIdOperador").value = operacion;

		}else if (operador == 2) {
			operacion = "-";
			document.getElementById("txtIdOperador").value = operacion;

		}else if (operador == 3) {
			operacion = "*";
			document.getElementById("txtIdOperador").value = operacion;

		}else {
			operacion = "/";
			document.getElementById("txtIdOperador").value = operacion;
		}
	

}//FIN DE LA FUNCIÓN
function Responder()
{	
		let respuesta;
		respuesta = parseInt(document.getElementById("txtIdRespuesta").value);

		switch (operador) {
				case 1 :
					resultado = primerNumero + segundoNumero;
					break;
				case 2 :
					resultado = primerNumero - segundoNumero;
					break;
				case 3 :
					resultado = primerNumero * segundoNumero;
					break;
				case 4 :
					resultado = primerNumero / segundoNumero;
					break;
			}

			if (resultado == respuesta) {
				alert("Su respuesta es correcta");

			}else{
				alert("Su respuesta es incorrecta");
			}

	

}//FIN DE LA FUNCIÓN
