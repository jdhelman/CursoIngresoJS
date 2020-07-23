/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
 	let precio = 35;
 	let descuento50 = 0.5;
 	let descuento40 = 0.6;
 	let descuento30 = 0.7;
 	let descuento25 = 0.75;
 	let descuento20 = 0.8;
 	let descuento15 = 0.85;
 	let descuento10 = 0.9;
 	let descuento5 = 0.95;
 	let cantidad;
 	let marca;
 	let precioConDescuento;
 	let importeFinal;
 	let importeFinalConIIBB;

 	cantidad = parseInt(document.getElementById("txtIdCantidad").value);
 	marca = document.getElementById("Marca").value;

 	/*if (cantidad >= 6) {
 			precioConDescuento = precio*descuento50;

 		}else if (cantidad == 5 && marca == "ArgentinaLuz") {
 			precioConDescuento = precio*descuento40;

 		}else if (cantidad == 5 && marca != "ArgentinaLuz") {
 			precioConDescuento = precio*descuento30;

 		}else if (cantidad == 4 && marca == "ArgentinaLuz") {
 			precioConDescuento = precio*descuento25;

 		}else if (cantidad == 4 && marca == "FelipeLamparas") {
 			precioConDescuento = precio*descuento25;

 		}else if (cantidad == 4 && marca != "ArgentinaLuz") {
 			precioConDescuento = precio*descuento20;

 		}else if (cantidad == 4 && marca != "FelipeLamparas") {
 			precioConDescuento = precio*descuento20;

 		}else if (cantidad == 3 && marca == "ArgentinaLuz") {
 			precioConDescuento = precio*descuento15;

 		}else if (cantidad == 3 && marca == "FelipeLamparas") {
 			precioConDescuento = precio*descuento10;

 		}else if (cantidad == 3 && marca != "ArgentinaLuz") {
 			precioConDescuento = precio*descuento5;

 		}else if (cantidad == 3 && marca != "FelipeLamparas") {
 			precioConDescuento = precio*descuento5;
 		} */

 	switch (cantidad) {
 		case 1 :
 			precioConDescuento = precio;
 		case 2 :
 			precioConDescuento = precio;
 			break;
 		case 3 :
 			if (marca == "ArgentinaLuz") {
 				precioConDescuento = precio*descuento15;
 			}
 			else if(marca == "FelipeLamparas"){
 				precioConDescuento = precio*descuento10;
 			}
 			else {
 				precioConDescuento = precio*descuento5;
 			}

 			break;

 		case 4 :
 			if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
 				precioConDescuento = precio*descuento25;
 			}
 			else{
 				precioConDescuento = precio*descuento20;
 			}
 			break;

 		case 5 :
 			if (marca == "ArgentinaLuz") {
 				precioConDescuento = precio*descuento40;
 			}
 			else{
 				precioConDescuento = precio*descuento30;
 			}
 			break;
 		default :
 			precioConDescuento = precio*descuento50;
 			break;


 	}


 	document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);

 	importeFinal = precioConDescuento*cantidad;
 	importeFinalConIIBB = importeFinal*1.1

 	if (importeFinal > 120) {
 		alert("Usted pago $"+importeFinalConIIBB.toFixed(2)+", siendo $"+(importeFinal*0.1).toFixed(2)+" el impuesto que se pagó por IIBB.")
 	} else {
 		alert("Usted pago $"+importeFinal)

 	}


}
