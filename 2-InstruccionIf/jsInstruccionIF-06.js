function mostrar()
{
	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);


		if (edad < 13){

			alert("Es un niño");

		} else if (edad > 17) {

			alert("Es mayor de edad");

		} else if (edad <= 17  && edad >= 13) {

			alert("Es adolescente");

		}




}//FIN DE LA FUNCIÓN