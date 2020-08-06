function mostrar()
{
	let hora = parseInt(document.getElementById("txtIdHora").value);

	if (hora >= 7 && hora <= 11) {
		alert("Es de mañana");

	}else if (hora >= 12 && hora <= 19 ) {
		alert("Es de tarde");

	}else {
		switch (hora) {
			case 20 :
			case 21 :
			case 22 :
			case 23 :
			case 24 :
			case 0 :
			case 1 :
			case 2 :
			case 3 :
			case 4 :
			case 5 :
			case 6 :
				alert("Es de noche");
				break;
			default :
				alert("La hora no existe");
				break;
		}
	}


	
}//FIN DE LA FUNCIÓN