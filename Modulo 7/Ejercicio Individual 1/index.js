const { createConnection } = require('mysql');

const config = {
	user: 'root',
	host: '172.19.0.1',
	database: 'local',
	password: 'root',
	port: 3306,
};

const client = createConnection(config);

client.connect();

client.query('SELECT NOW()', (err, res) => {
	console.log(res);
	client.end();
});
