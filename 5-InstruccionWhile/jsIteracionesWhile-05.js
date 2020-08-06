/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {

	let sexo;
	
	sexo = prompt("Ingrese f para femenino o m para masculino");


	while (sexo != "f" && sexo != "m") {

	//while (!( sexo == "m" || sexo == "f")) {

	sexo = prompt("Dato inválido, debe ingresar f para femenino o m para masculino.");

	}

	if (sexo == "f") {

		document.getElementById("txtIdSexo").value = "Femenino";

	} else {

		document.getElementById("txtIdSexo").value = "Masculino";
	}


}//FIN DE LA FUNCIÓN