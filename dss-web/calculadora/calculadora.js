var numero1;
var numero2;
var resultado;
function calculasuma() {
	var numero1Element = document.getElementById("cantidad 1");
	numero1 = parseInt(numero1Element.value);
	var numero2Element = document.getElementById("cantidad 2");
        numero2 = parseInt(numero2Element.value);

	console.log(numero1);
	console.log(numero2);

	resultado = numero1 + numero2;
	console.log(resultado);

	var resultadoElement = document.getElementById("resultado");
	resultadoElement.innerHTML = 'suma = ' + resultado;

}

function calcularesta() {
        var numero1Element = document.getElementById("cantidad 1");
        numero1 = numero1Element.value;
        var numero2Element = document.getElementById("cantidad 2");
        numero2 = numero2Element.value;

        console.log(numero1);
        console.log(numero2);

        resultado = numero1 - numero2;
        console.log(resultado);

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'resta = ' + resultado;

}

function calculamultiplica() {
        var numero1Element = document.getElementById("cantidad 1");
        numero1 = numero1Element.value;
        var numero2Element = document.getElementById("cantidad 2");
        numero2 = numero2Element.value;

        console.log(numero1);
        console.log(numero2);

        resultado = numero1 * numero2;
        console.log(resultado);

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'resta = ' + resultado;

}

function calculadividir() {
        var numero1Element = document.getElementById("cantidad 1");
        numero1 = numero1Element.value;
        var numero2Element = document.getElementById("cantidad 2");
        numero2 = numero2Element.value;

        console.log(numero1);
        console.log(numero2);

        resultado = numero1 / numero2;
        console.log(resultado);

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = 'resta = ' + resultado;

}
