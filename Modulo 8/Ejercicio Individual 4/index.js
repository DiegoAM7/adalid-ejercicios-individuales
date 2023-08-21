const express = require('express');
const jwt = require('jsonwebtoken');

// Configs
const PORT = 3000;
const SECRET = 'secret';

// App
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
	res.render('/index.html');
});

app.get('/login', (req, res) => {
	const token = jwt.sign({ user: 'Logueado' }, SECRET);

	res.cookie('token', token, { httpOnly: true });

	return res.status(200).json({ token });
});

app.post('/protected', (req, res) => {
	const { token } = req.body;

	if (!token) {
		return res.status(401).json({ error: 'No autorizado' });
	}

	try {
		const decoded = jwt.verify(token, SECRET);

		return res.status(200).json({ message: 'Autorizado' });
	} catch (error) {
		return res.status(401).json({ error: 'No autorizado' });
	}
});

// Server
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
