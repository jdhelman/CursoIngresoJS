/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
	let convertido;

	temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    convertido = (temperatura-32)*(5/9);
	
	alert(temperatura+" F° es "+convertido.toFixed(2)+" C°");

	
}

function CentigradosFahrenheit () 
{
	let temperatura;
	let convertido;

	temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    convertido = (temperatura*5/9)+32;
	
	alert(temperatura+" C° es "+convertido.toFixed(2)+" F°");
}
