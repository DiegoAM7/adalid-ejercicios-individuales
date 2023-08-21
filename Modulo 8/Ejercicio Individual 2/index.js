// Desarrolla una API REST con sus métodos correspondientes que maneje un array
// Respuesta esperada:
// - Primero definir el array.
// - Despuésse declara elservidor y por último declarar cada uno de los métodos que usaremos y cómo afectan nuestro array:
// 		- La ruta get que tan solo devolverá el array
// 		- la ruta post que agregara a nuestro array lo que enviemos en el body
// 		- la ruta put que modificara nuestro array segun los parametros que le entreguemos

// Declaración array
const arr = [{ id: 1, nombre: 'Dato 1', descripcion: 'Descripcion 1' }];

// Configs
const PORT = 3000;

// Servidor express
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get('/', (req, res) => {
	return res.status(200).json({ arr });
});

app.post('/', (req, res) => {
	const { body } = req;

	arr.push(body);

	return res.status(200).json({ arr });
});

app.put('/:id', (req, res) => {
	const { id } = req.params;
	const { body } = req;

	const index = arr.findIndex((item) => Number(item.id) === Number(id));

	arr[index] = { id, ...body };

	return res.status(200).json({ arr });
});

// Servidor
app.listen(PORT, () => {
	console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
