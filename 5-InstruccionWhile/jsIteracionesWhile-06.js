function mostrar()
{


let numero;
let promedio;
let acumulador = 0;
let i = 0;

while (i < 5) {

	numero = parseInt(prompt("Ingrese un número"));

	acumulador = acumulador + numero;

	i++;
}


promedio = acumulador / 5;

document.getElementById("txtIdSuma").value = acumulador;
document.getElementById("txtIdPromedio").value = promedio;


}//FIN DE LA FUNCIÓN