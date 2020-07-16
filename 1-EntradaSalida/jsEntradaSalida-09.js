/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{


    //Como el dinero lleva centavos, usaremos parseFloat
	let sueldo1;
	let aumento;
	let sueldo2;
	
	sueldo1=parseFloat(document.getElementById("txtIdSueldo").value);
	aumento=sueldo1*0.1; //se puede usar 0.1 ó .1 directamente IMPORTANTE: ES PUNTO NO COMA
	sueldo2=sueldo1+aumento;

	document.getElementById("txtIdResultado").value=sueldo2;
    

}
