let intruccionesUno =
	"Hola, dame tu fecha de nacimiento y te dire cuando moriras ";
let edad = prompt(intruccionesUno);
let anioActual = 2022;
let edadActual = anioActual - edad;

for (let i = edadActual; i <= 70; i++) {
	console.log("edad_actual", edadActual);
	if (edadActual < 70) {
		console.log("no vas a morir en ", anioActual++);
	} else {
		console.log(
			" morirás en ",
			anioActual + 70,
			" a los ",
			edadActual,
			" años"
		);
	}
	edadActual++;
}
