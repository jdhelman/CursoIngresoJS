/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;
	
	importe=parseFloat(document.getElementById("txtIdImporte").value);
	descuento=importe*0.25; //se puede usar 0.25 ó .25 directamente IMPORTANTE: ES PUNTO NO COMA
	resultado=importe-descuento;

	document.getElementById("txtIdResultado").value=resultado;
}
