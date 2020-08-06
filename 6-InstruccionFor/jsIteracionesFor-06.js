function mostrar()
{

let numero;
let acumuladorPares = 0;

numero = parseInt(prompt("Ingrese número: "));

for (let i = 1 ; i <= numero ; i++) {

	if (i % 2 == 0) {

		acumuladorPares++;
		console.log(i);
		}

	}

	alert(numero+" tiene "+acumuladorPares+" números pares");



}//FIN DE LA FUNCIÓN