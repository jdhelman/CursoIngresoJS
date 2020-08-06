
function mostrar() {

	let cantidad;
	let cantidadMax;
	let fabricante;
	let fabricanteMin;
	let marca;
	let precio;
	let precioMinimo;
	let producto;
	let tipoProducto;
	let unidadesMin;
	let flag = 0;
	let flag2 = 0;
	let acumuladorA = 0;
	let acumuladorB = 0;
	let acumuladorJ = 0;
	let cantidadCompras = 0;
	let sumatoriaAlcohol = 0;
	let sumatoriaJabon = 0;
	let sumatoriaBarbijo = 0;


	for (let i = 0; i < 5; i++) {
	 	

		producto = prompt("Ingrese el producto (alcohol, barbijo o jabon)");

		while (producto != "barbijo" && producto != "jabon" && producto != "alcohol") {

			producto = prompt("Producto inválido, debe ser alcohol, barbijo o jabon");
		}


		precio = parseFloat(prompt("Ingrese precio entre $100 y $300"));

		while (precio < 100 || precio > 300 || isNaN(precio)) {  // se puede !(precio >= 100 && precio <= 300)

			precio = parseFloat(prompt("Error. Ingrese precio entre $100 y $300"));
		}


		cantidad = parseInt(prompt("Ingrese cantidad entre 1 y 1000"));

		while (cantidad < 1 || cantidad > 1000 || isNaN(cantidad)) {

			cantidad = parseInt(prompt("Error. Ingrese cantidad entre 1 y 1000"));
		}

		marca = prompt("Ingrese la marca");

		fabricante = prompt("Ingrese el fabricante");



		switch(producto) {

			case "alcohol" :
				sumatoriaAlcohol = sumatoriaAlcohol + cantidad;
				acumuladorA++;

				if (flag == 0 || (producto == "alcohol" && precio < precioMinimo)) {

					precioMinimo = precio;
					unidadesMin = cantidad;
					fabricanteMin = fabricante;
					flag = 1;
		}
				break;

			case "barbijo" :
				sumatoriaBarbijo = sumatoriaBarbijo + cantidad;
				acumuladorB++;
				break;

			case "jabon" :
				sumatoriaJabon = sumatoriaJabon + cantidad;
				acumuladorJ++;
				break;
		}



		if (flag2 == 0 || sumatoriaAlcohol > cantidadMax) {

			cantidadMax = sumatoriaAlcohol;
			tipoProducto = "Alcohol";
			cantidadCompras = acumuladorA;
		}


		if (flag2 == 0 || sumatoriaBarbijo > cantidadMax) {

			cantidadMax = sumatoriaBarbijo;
			tipoProducto = "Barbijo";
			cantidadCompras = acumuladorB;
		}


		if (flag2 == 0 || sumatoriaJabon > cantidadMax) {

			cantidadMax = sumatoriaJabon;
			tipoProducto = "Jabon";
			cantidadCompras = acumuladorJ;
			flag2 = 1;
		}

		
	} 

		if (acumuladorA > 0) {

			alert("Compraste "+unidadesMin+" unidades del alcohol más barato a $"+precioMinimo+" del fabricante "+fabricanteMin);

		}

		alert("El producto con más unidades compradas es "+tipoProducto+" y el promedio por compra es "+cantidadMax/cantidadCompras);

		if(sumatoriaJabon > 0) {

			alert("Compraste un total de "+sumatoriaJabon+" jabones");

		}


}





/*
function mostrar() {

	let cantidad;
	let cantidadMax;
	let fabricante;
	let fabricanteMin;
	let marca;
	let precio;
	let precioMinimo;
	let producto;
	let tipoProducto;
	let unidadesMin;
	let flag = 0;
	let flag2 = 0;
	//let acumuladorA = 0;
	//let acumuladorB = 0;
	//let acumuladorJ = 0;
	//let cantidadCompras = 0;
	let sumatoriaAlcohol = 0;
	let sumatoriaJabon = 0;
	let sumatoriaBarbijo = 0;
	let precioFinal = 0;
	let sumatoriaPrecioA = 0;
	let sumatoriaPrecioB = 0;
	let sumatoriaPrecioJ = 0;


	for (let i = 1; i < 6; i++) {
	 	

		producto = prompt("Ingrese el producto (alcohol, barbijo o jabon)");

		while (producto != "barbijo" && producto != "jabon" && producto != "alcohol") {

			producto = prompt("Producto inválido, debe ser alcohol, barbijo o jabon");
		}


		precio = parseFloat(prompt("Ingrese precio entre $100 y $300"));

		while (precio < 100 || precio > 300 || isNaN(precio)) {  // se puede !(precio >= 100 && precio <= 300)

			precio = parseFloat(prompt("Error. Ingrese precio entre $100 y $300"));
		}


		cantidad = parseInt(prompt("Ingrese cantidad entre 1 y 1000"));

		while (cantidad < 1 || cantidad > 1000 || isNaN(cantidad)) {

			cantidad = parseInt(prompt("Error. Ingrese cantidad entre 1 y 1000"));
		}

		marca = prompt("Ingrese la marca");

		fabricante = prompt("Ingrese el fabricante");


		if (flag == 0 || (producto == "alcohol" && precio < precioMinimo)) {

			precioMinimo = precio;
			unidadesMin = cantidad;
			fabricanteMin = fabricante;
			flag = 1;
		}
*/

/*
		switch(producto) {

			case "alcohol" :
				sumatoriaAlcohol = sumatoriaAlcohol + cantidad;
				acumuladorA++;
				break;

			case "barbijo" :
				sumatoriaBarbijo = sumatoriaBarbijo + cantidad;
				acumuladorB++;
				break;

			case "jabon" :
				sumatoriaJabon = sumatoriaJabon + cantidad;
				acumuladorJ++;
				break;
		}



		if (flag2 == 0 || sumatoriaAlcohol > cantidadMax) {

			cantidadMax = sumatoriaAlcohol;
			tipoProducto = "Alcohol";
			cantidadCompras = acumuladorA;

		}


		if (flag2 == 0 || sumatoriaBarbijo > cantidadMax) {

			cantidadMax = sumatoriaBarbijo;
			tipoProducto = "Barbijo";
			cantidadCompras = acumuladorB;
			flag2 = 1;
		}


		if (flag2 == 0 || sumatoriaJabon > cantidadMax) {

			cantidadMax = sumatoriaJabon;
			tipoProducto = "Jabon";
			cantidadCompras = acumuladorJ;
		}


*/

/*
		switch(producto) {

			case "alcohol" :
				sumatoriaAlcohol = sumatoriaAlcohol + cantidad;
				sumatoriaPrecioA = sumatoriaPrecioA + (cantidad * precio);

				break;
			case "jabon" :
				sumatoriaJabon = sumatoriaJabon + cantidad;
				sumatoriaPrecioJ = sumatoriaPrecioJ + (cantidad * precio);
				break;
			case "barbijo" :
				sumatoriaBarbijo = sumatoriaBarbijo + cantidad;
				sumatoriaPrecioB = sumatoriaPrecioB + (cantidad * precio);
				break;

		}



		if (flag2 == 0 || sumatoriaAlcohol > cantidadMax) {

			cantidadMax = sumatoriaAlcohol;
			tipoProducto = "Alcohol";
			precioFinal = sumatoriaPrecioA;

		}

		if (flag2 == 0 || sumatoriaJabon > cantidadMax) {

			cantidadMax = sumatoriaJabon;
			tipoProducto = "Jabon";
			precioFinal = sumatoriaPrecioJ;
		}

		if (flag2 == 0 || sumatoriaBarbijo > cantidadMax) {

			cantidadMax = sumatoriaBarbijo;
			tipoProducto = "Barbijo";
			precioFinal = sumatoriaPrecioB;
			flag2 = 1;
		}

	

		
	} 

		alert("Compraste "+unidadesMin+" alcohol del fabricante "+fabricanteMin+" a $"+precioMinimo);

        alert("El promedio por compra de "+tipoProducto+" es $"+precioFinal/cantidadMax);

	//  alert("El promedio por compra de "+tipoProducto+" es de "+cantidadMax/cantidadCompras);

		alert("Compraste en total "+sumatoriaJabon+" jabones")



}

*/