/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	//Se usa el signo % para que arroje el resto

	let divisor;
	let dividendo;
	let resultado;

	divisor=parseInt(document.getElementById("txtIdNumeroDividendo").value);
	dividendo=parseInt(document.getElementById("txtIdNumeroDivisor").value);
    resultado=(divisor%dividendo);
	
	alert("El resto es "+resultado);


}
