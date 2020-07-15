/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//let x=30;
	//let y=20;
	//let z;
	//z=x+y

	//Let x="20"
	//x=parseInt(x); //En este caso pasamos de string a número


	let num1
	let num2
	let resultado

	num1=document.getElementById("txtIdNumeroUno").value;
	num2=document.getElementById("txtIdNumeroDos").value;

	num1=parseInt(num1)
	num2=parseInt(num2)

	resultado=(num1+num2)

	alert("El resultado es "+ resultado);

 /*Conviene más hacer:

    let num1
	let num2
	let resultado

	num1=parseInt(document.getElementById("txtIdNumeroUno").value)
	num2=parseInt(document.getElementById("txtIdNumeroDos").value)

	resultado=(num1+num2)
    alert("El resultado es "+ resultado);


	También:

	
	alert("El resultado es "+ (parseInt(document.getElementById("txtIdNumeroUno").value)+parseInt(document.getElementById("txtIdNumeroDos").value)));

	
*/

}

