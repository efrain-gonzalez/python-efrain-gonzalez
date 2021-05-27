var nombre="efrain"
var email="efrain_sesma@outlook.es"
var edad=20

function getNombre() {
	console.log(nombre);
	//accesamos al DOM
	var myNameElement = document.getElementById("nombre");
	// myNameElement es un div
	myNameElement.innerHTML ='<b>'+ nombre + '</b>';

}

function getEmail() {
        console.log(email);
        //accesamos al DOM
        var myEmailElement = document.getElementById("email");
        // myNameElement es un div
        myEmailElement.innerHTML ='<H3>'+ email + '</H3>';
}

function getEdad() {
        console.log(edad);
        //accesamos al DOM
        var myEdadElement = document.getElementById("edad");
        // myNameElement es un div
        myEdadElement.innerHTML ='<H1>'+ edad + '</H1>';
}

