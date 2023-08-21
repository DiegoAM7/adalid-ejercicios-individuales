const express = require('express');
const { getRandomPokemon } = require('./component/randomPokemon');

// Configs
const PORT = 3000;

// App
const app = express();

// Routes
app.get('/', (req, res) => {
	return res.json({ message: 'Hello World!' });
});

app.get('/pokemon', async (req, res) => {
	const data = await getRandomPokemon();

	if (data.error) {
		return res.status(500).json({ message: data.message });
	}

	return res.json({ id: data.id, name: data.name });
});

// Server
app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
