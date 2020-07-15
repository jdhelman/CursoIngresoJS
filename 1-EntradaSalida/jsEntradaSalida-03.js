/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()

    // Hay que asignar un valor a la variable Nombre que tome el dato desde el ID de la caja de texto buscando en el archivo de HTML
{
	//let nombre = txtIdNombre.value; //No es el estándar de Javascript

	let nombre

	nombre = document.getElementById("txtIdNombre").value; //Este es el estándar de Javascript

	alert(nombre);

	document.getElementById("txtIdNombre").value=""; //El valor de la caja de texto remplazarlo por una cadena vacía para que quede vacía

}


