function mostrar()
{

	let numero;
	let tipoNumero = 0;

	numero = parseInt(prompt("Ingrese número: "));

	for (let i = 1 ;i <= numero ; i++) {

		if (numero % i == 0) {

			tipoNumero++;

		}

	}

	if (tipoNumero <= 2) {

		alert(numero+" es primo");

	} else {

		alert(numero+" no es primo");

	}

}