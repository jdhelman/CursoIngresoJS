/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () {

	let edad;
	let sexo;
	let estadoCivil;
	let estadoCivilString;
	let sueldoBruto;
	let legajo;
	let nacionalidad;
	let nacionalidadString;

	edad = parseInt(prompt("Ingrese una edadentre 18 y 90 años inclusive"))

	while ( edad < 18 || edad > 90 || isNaN(edad)) {

		edad = parseInt(prompt("Error. Ingrese una edadentre 18 y 90 años inclusive"))

	}

	document.getElementById("txtIdEdad").value = "Edad: "+edad;




	sexo = prompt("Ingrese “M” para masculino y “F” para femenino");

	while (sexo != "F" && sexo != "M" ) {

		sexo = prompt("Error. Ingrese “M” para masculino y “F” para femenino");

	}

	document.getElementById("txtIdSexo").value = "Sexo: "+sexo;




	estadoCivil = parseInt(prompt("Ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));

	
	while ( estadoCivil < 1 || estadoCivil > 4 || isNaN(estadoCivil)) {

		estadoCivil = parseInt(prompt("Error. Ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));

	}


	switch (estadoCivil) {

			case 1 :
				estadoCivilString = "Soltero"
				break;
			case 2 :
				estadoCivilString = "Casado"
				break;
			case 3 :
				estadoCivilString = "Divorciado"
				break;
			case 4 :
				estadoCivilString = "Viudo"
				break;
	}

	document.getElementById("txtIdEstadoCivil").value = "Estado Civil: "+estadoCivilString;




	sueldoBruto = parseInt(prompt("Ingrese suedo bruto no menor a 8000"))

	while (sueldoBruto < 8000 || isNaN(sueldoBruto)) {

		sueldoBruto = parseInt(prompt("Error. Ingrese suedo bruto no menor a 8000"));

	}

	document.getElementById("txtIdSueldo").value = "Suedo bruto: "+sueldoBruto;





	legajo = parseInt(prompt("Ingrese legajo de 4 cifras, sin ceros a la izquierda."));

	
	while (legajo < 999 || legajo > 10000 || isNaN(legajo)) {

		legajo = parseInt(prompt("Error. Ingrese legajo de 4 cifras, sin ceros a la izquierda."));

	}

	document.getElementById("txtIdLegajo").value = "Legajo: "+legajo;


	


	nacionalidad = prompt("Ingrese nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

	
	while ( nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N" ) {

		nacionalidad = prompt("Error. Ingrese nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

	}


	switch (nacionalidad) {

		case "A" :
			nacionalidadString = "Argentina"
			break;
		case "E" :
			nacionalidadString = "Extranjero"
			break;
		case "N" :
			nacionalidadString = "Nacionalizado"
			break;
	}


	document.getElementById("txtIdNacionalidad").value = "Nacionalidad: "+nacionalidadString;

}


