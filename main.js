//calcula la fecha de tu muerte

let hoy = new Date();
let anioActual = hoy.getFullYear();
let intruccionesUno =
	"Hola, dame tu fecha de nacimiento y te dire cuando moriras ";
let edad = prompt(intruccionesUno);
let edadActual = anioActual - edad;
let suerte = getRandomInt(45);
let edadMuerte = suerte + edadActual;

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

for (let i = edadActual; i <= edadMuerte; i++) {
	if (edadActual < edadMuerte) {
		console.log("no vas a morir en ", anioActual++);
	} else {
		console.log(
			" morirás en el año",
			anioActual + 70,
			" a los ",
			edadActual,
			" años"
		);
	}
	edadActual++;
}
