function mostrar()
{
		let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);


		if (edad < 13 || edad > 17){

			alert("No adolescente");
		}
		
		/*La otra versión

		iif (!(edad >= 13 && edad <= 17)){

			alert("No adolescente");
		}

		*/

}