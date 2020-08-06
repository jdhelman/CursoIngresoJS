
let eleccion;
let numeroSecreto;
let gano;
let perdio;
let empato;

function comenzar()
{
	
numeroSecreto = Math.round(Math.random() * 2 + 1);
gano = 0;
perdio = 0;
empato = 0;


}

function piedra()
{
	eleccion = 1;

	switch (numeroSecreto) {

		case 1 :
			alert("Empató");
			empato += 1;
			document.getElementById("txtIdEmpatadas").value = "Juegos empatados: "+empato;
			break;

		case 2 :
			alert("Perdió");
			perdio += 1;
			document.getElementById("txtIdPerdidas").value = "Juegos perdidos: "+perdio;
			break;
		case 3 :
			alert("Ganó");
			gano += 1;
			document.getElementById("txtIdGanadas").value = "Juegos ganados: "+gano;
			break;
	}

numeroSecreto = Math.round(Math.random() * 2 + 1);


}

function papel()
{
	eleccion = 2;

	switch (numeroSecreto) {

		case 1 :
			alert("Ganó");
			gano += 1
			document.getElementById("txtIdGanadas").value = "Juegos ganados: "+gano;
			break;
		case 2 :
			alert("Empató");
			empato += 1
			document.getElementById("txtIdEmpatadas").value = "Juegos empatados: "+empato;
			break;
		case 3 :
			alert("Perdió");
			perdio += 1
			document.getElementById("txtIdPerdidas").value = "Juegos perdidos: "+perdio;
			break;
	}

numeroSecreto = Math.round(Math.random() * 2 + 1);


}

function tijera()
{
	eleccion = 3;

	switch (numeroSecreto) {

		case 1 :
			alert("Perdió");
			perdio += 1
			document.getElementById("txtIdPerdidas").value = "Juegos perdidos: "+perdio;
			break;
		case 2 :
			alert("Ganó");
			gano += 1
			document.getElementById("txtIdGanadas").value = "Juegos ganados: "+gano;
			break;
		case 3 :
			alert("Empató");
			empato += 1
			document.getElementById("txtIdEmpatadas").value = "Juegos empatados: "+empato;
			break;
	}

numeroSecreto = Math.round(Math.random() * 2 + 1);

}

function mostrarResultado()
{

}




