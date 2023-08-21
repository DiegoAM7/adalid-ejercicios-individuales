const express = require('express');
const handlebars = require('express-handlebars');

// Configs
const PORT = 3000;

// App
const app = express();

// Handlebars
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

// Middlewares
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
	return res.status(200).json({ message: 'Hello World' });
});

app.get('/pendientes', (req, res) => {
	return res.status(200).render('pendientes', {
		titulo: 'Tareas Pendientes',
		tareas: [
			{ nombre: 'Tarea 1', descripcion: 'Descripcion 1' },
			{ nombre: 'Tarea 2', descripcion: 'Descripcion 2' },
			{ nombre: 'Tarea 3', descripcion: 'Descripcion 3' },
			{ nombre: 'Tarea 4', descripcion: 'Descripcion 4' },
			{ nombre: 'Tarea 5', descripcion: 'Descripcion 5' },
		],
	});
});

// Server
app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
