// Crear una interfaz de línea de comando con el paquete Yargs que defina un comando “adulto” y un argumento “edad” que al ser ejecutado evalúe si el valor del argumento es mayor a 18 y, de ser así, devolver el mensaje “Mayor de edad”, de lo contrario devolver “Menor de edad”

const yargs = require('yargs');

const argv = yargs
	.command(
		'adulto',
		'Evalúa si el valor del argumento es mayor a 18',
		{
			edad: {
				alias: 'e',
				describe: 'Edad',
				demandOption: true,
				type: 'number',
			},
		},
		(argv) => {
			if (argv.edad > 18) {
				console.log('Mayor de edad');
			} else {
				console.log('Menor de edad');
			}
		}
	)
	.help().argv;
