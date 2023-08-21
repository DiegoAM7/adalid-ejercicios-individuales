const fs = require('fs');

const leerArchivo = () => {
	const archivo = fs.readFileSync('./menu.json', 'utf-8');
	const menu = JSON.parse(archivo);

	console.log(menu);
};

const agregarReceta = (receta) => {
	const archivo = fs.readFileSync('./menu.json', 'utf-8');
	const menu = JSON.parse(archivo);

	menu.almuerzos.push(receta);

	fs.writeFileSync('./menu.json', JSON.stringify(menu), 'utf-8');
};

const borrarReceta = (nombre) => {
	const archivo = fs.readFileSync('./menu.json', 'utf-8');
	const menu = JSON.parse(archivo);

	const menuFiltrado = menu.almuerzos.filter(
		(receta) => receta.nombre !== nombre
	);

	fs.writeFileSync('./menu.json', JSON.stringify(menuFiltrado), 'utf-8');
};

// Mostrar por consola
const [, , accion, ...data] = process.argv;

switch (accion) {
	case 'mostrar':
		leerArchivo();
		break;
	case 'agregar':
		const receta = {
			nombre: data[0],
			precio: Number(data[1]),
		};
		agregarReceta(receta);
		break;
	case 'borrar':
		borrarReceta(data[0]);
		break;
	default:
		console.log('No entiendo qué quieres hacer');
		break;
}
