const { Client, Pool } = require('pg');

// Configuración de la conexión a la base de datos
// Reemplazar por sus datos correspondientes
const config = {
	host: '172.22.0.1', // URL de docker
	port: 5432, // Puerto de postgres
	database: 'local', // Nombre de base de datos
	user: 'root', // Usuario de base de datos
	password: 'root', // Contraseña de base de datos
};

const client = new Client(config);
const pool = new Pool(config);

const initDB = async () => {
	const query = `
		CREATE TABLE IF NOT EXISTS users (
			first_name VARCHAR(100),
			last_name VARCHAR(100),
			email VARCHAR(100),
			saldo DECIMAL CHECK (saldo >= 0)
		);
	`;

	await client.connect();
	await client.query(query);
	await client.end();
};

const dropDB = async () => {
	const query = 'DROP TABLE IF EXISTS users';

	await client.connect();
	await client.query(query);
	await client.end();
};

const createUsers = async () => {
	const query = `
		INSERT INTO users (first_name, last_name, email, saldo)
		VALUES ('Juan', 'Perez', 'mail1@mail.com', 20000),
		('Pedro', 'Gomez', 'mail2@mail.com', 20000);
	`;
	const res = await pool.query(query);
	console.log(res.rows);
	pool.end();

	return res.rows;
};

const getAll = async () => {
	const query = 'SELECT * FROM users';
	const res = await pool.query(query);
	console.log(res.rows);
	pool.end();

	return res.rows;
};

const transferencia = (saldo, email1, email2) => {
	pool.connect(async (err, client) => {
		if (err) {
			return console.error('Error adquiriendo cliente', err.stack);
		}

		await client.query('BEGIN');
		let descuento, acreditacion;

		try {
			const descontar = `UPDATE users SET saldo = saldo - ${saldo} WHERE email = '${email1}' RETURNING *`;
			descuento = await client.query(descontar);

			const acreditar = `UPDATE users SET saldo = saldo + ${saldo} WHERE email = '${email2}' RETURNING *`;
			acreditacion = await client.query(acreditar);
		} catch (error) {
			if (error.constraint === 'users_saldo_check') {
				console.log(
					'No se puede realizar la transferencia, saldo insuficiente'
				);
			}

			client.query('ROLLBACK');

			return client.end();
		}

		if (descuento && acreditacion) {
			console.log('Descuento realizado con éxito:', descuento.rows);
			console.log('Acreditación realizada con éxito:', acreditacion.rows);

			await client.query('COMMIT');

			return client.end();
		}
	});
};

dropDB();
// initDB();
// createUsers();
// getAll();
// transferencia(10000, 'mail1@mail.com', 'mail2@mail.com');
