function mostrar()
{

let numero;
let contadorDivisores = 0;

numero = parseInt(prompt("Ingrese número: "));

for (let i = 1 ; i <= numero ; i++) {

	if (numero % i == 0) {

		contadorDivisores++;
		console.log(i);
		}

	}

	alert(numero+" tiene "+contadorDivisores+" divisores");



}//FIN DE LA FUNCIÓN