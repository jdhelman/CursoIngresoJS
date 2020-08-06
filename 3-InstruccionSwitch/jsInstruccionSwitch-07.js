function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;

	switch (destino){
		case "Cataratas" :
			alert ("Norte");
			break
		case "Ushuaia" :
			alert ("Sur");
			break
		case "Bariloche" :
			alert ("Oeste");
			break
		case "Mar del Plata" :
			alert ("Este");
			break;
	}

	/*
	if (destino == "Cataratas") {
		alert("Norte");

	}else if (destino == "Ushuaia") {
		alert("Sur");

	}else if (destino == "Bariloche") {
		alert("Oeste");

	}else {
		alert("Este");
	} */

}//FIN DE LA FUNCIÓN