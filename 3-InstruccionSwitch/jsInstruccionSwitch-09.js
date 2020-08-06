function mostrar()
{
	let estacion;
	let destino;
	let tarifa;
	let tarifaFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	tarifa = 15000;

	switch (estacion) {
		case "Invierno" :

			if (destino == "Bariloche") {
				tarifaFinal = tarifa *= 1.2;

			}else if (destino == "Mar del Plata") {
				tarifaFinal = tarifa *= 0.8;

			}else {
				tarifaFinal = tarifa *= 0.9;
							}
			break;

		case "Verano" :

			if (destino == "Bariloche") {
				tarifaFinal = tarifa *= 0.8;

			}else if (destino == "Mar del Plata") {
				tarifaFinal = tarifa *= 1.2;

			}else {
				tarifaFinal = tarifa *= 1.1;
			}
			break;

		case "Primavera" :
		case "Otoño" :

			if (destino != "Cordoba") {
				tarifaFinal = tarifa *= 1.1;

			}else {
				tarifaFinal = tarifa;
			}
			break;
		}
	
alert("La tarifa final es $"+tarifaFinal);


}//FIN DE LA FUNCIÓN