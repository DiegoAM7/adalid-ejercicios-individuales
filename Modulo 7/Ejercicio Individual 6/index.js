const Sequelize = require('sequelize');

const sequelize = new Sequelize('local', 'root', 'root', {
	host: '172.22.0.1',
	dialect: 'postgres',
});

const Cliente = sequelize.define('cliente', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	nombre: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	direccion: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

const Producto = sequelize.define('producto', {
	codigo: {
		type: Sequelize.INTEGER,
		primaryKey: true,
	},
	nombre: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

Cliente.belongsToMany(Producto, { through: 'cliente_producto' });
Producto.belongsToMany(Cliente, { through: 'producto_cliente' });
