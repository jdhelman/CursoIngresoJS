/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

// Declarar variable
	let nombre;
// Pedirle al usuario que ingrese su nombre por Prompt (ventana emergente)
	nombre = prompt("Ingrese su nombre");
// Guardo el contenido de la variable nombre a la caja de texto embebida en la pagina HTML (que está en read only)
	document.getElementById("txtIdNombre").value = nombre;


}

