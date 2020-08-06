function mostrar()
{

let destino = document.getElementById("txtIdDestino").value;

	/*switch (destino){
		
		case "Cataratas" :
		case "Mar del Plata" :
			alert ("En este destino hace calor");
			break;

		case "Bariloche" :
		case "Ushuaia" :
			alert ("En este destino hace frío");
			break;
		}*/

	if (destino == "Cataratas" || destino == "Mar del Plata") {
		alert ("En este destino hace calor");
	}else {
		alert ("En este destino hace frío");
	}



}//FIN DE LA FUNCIÓN