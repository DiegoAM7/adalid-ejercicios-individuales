const { Pool } = require('pg');
const Client = require('pg/lib/client');

// Configuración de la conexión a la base de datos
// Reemplazar por sus datos correspondientes
const config = {
	host: '172.22.0.1', // URL de docker
	port: 5432, // Puerto de postgres
	database: 'local', // Nombre de base de datos
	user: 'root', // Usuario de base de datos
	password: 'root', // Contraseña de base de datos
};

// Creación de cliente y pool de conexiones
const client = new Client(config);
const pool = new Pool(config);

// Función para inicializar la tabla de usuarios
const initDB = async () => {
	const query = `
		CREATE TABLE IF NOT EXISTS users (
			id SERIAL PRIMARY KEY,
			nombre VARCHAR(50) NOT NULL
		);
	`;

	await client.connect();
	await client.query(query);
	await client.end();
};

// Función para borrar la tabla de usuarios
const dropDB = async () => {
	const query = 'DROP TABLE IF EXISTS users';

	await client.connect();
	await client.query(query);
	await client.end();
};

// Función para obtener todos los usuarios
const getAll = async () => {
	const query = 'SELECT * FROM users';
	const res = await pool.query(query);
	console.log(res.rows);
	pool.end();

	return res.rows;
};

// Función para insertar un usuario
const insert = async (values) => {
	const query = 'INSERT INTO users (nombre) VALUES ($1) RETURNING *';
	const res = await pool.query(query, values);
	console.log(res.rows);
	pool.end();

	return res.rows;
};

// Función para modificar un usuario
const update = async (values) => {
	const query = 'UPDATE users SET nombre = $1 WHERE id = $2 RETURNING *';
	const res = await pool.query(query, values);
	console.log(res.rows);
	pool.end();

	return res.rows;
};

// Función para eliminar un usuario
const remove = async (values) => {
	const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
	const res = await pool.query(query, values);
	console.log(res.rows);
	pool.end();

	return res.rows;
};

// dropDB();
// initDB();
// getAll();
// insert(['Diego']);
// update(['Juan', 1]);
// remove([1]);
