const express = require('express');
const fileUpload = require('express-fileupload');

// Configs
const PORT = 3000;

// App
const app = express();

// Middlewares
app.use(fileUpload());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
	return res.render('/index.html');
});

app.post('/', (req, res) => {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send('No files were uploaded.');
	}

	const file = req.files.file;
	const uploadPath = __dirname + '/public/uploads/' + file.name;

	file.mv(uploadPath, (err) => {
		if (err) return res.status(500).send(err);

		res.send('Archivo suido a ' + uploadPath);
	});
});

// Server
app.listen(PORT, () => {
	console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
