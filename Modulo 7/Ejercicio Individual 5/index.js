const Sequelize = require('sequelize');

const sequelize = new Sequelize('local', 'root', 'root', {
	host: '172.22.0.1',
	dialect: 'postgres',
});

class Rectangulo {
	constructor(base, altura) {
		this.base = base;
		this.altura = altura;
	}

	calcularArea() {
		return this.base * this.altura;
	}

	calcularPerimetro() {
		return this.base * 2 + this.altura * 2;
	}
}

class Triangulo {
	constructor(base, altura) {
		this.base = base;
		this.altura = altura;
	}

	calcularArea() {
		return (this.base * this.altura) / 2;
	}

	calcularPerimetro() {
		const z = Math.sqrt(Math.pow(this.base / 2, 2) + Math.pow(this.altura, 2));
		return this.base + this.altura + z;
	}
}

class Circulo {
	constructor(radio) {
		this.radio = radio;
	}

	calcularArea() {
		return Math.PI * Math.pow(this.radio, 2);
	}

	calcularPerimetro() {
		return 2 * Math.PI * this.radio;
	}
}

const rectangulo = sequelize.define('rectangulo', {
	base: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	altura: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
});

rectangulo
	.sync()
	.then(() => {
		console.log('Tabla creada');
	})
	.catch((err) => {
		console.log('Error creando tabla', err);
	})
	.finally(() => {
		sequelize.close();
	});

const triangulo = sequelize.define('triangulo', {
	base: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	altura: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
});

triangulo
	.sync()
	.then(() => {
		console.log('Tabla creada');
	})
	.catch((err) => {
		console.log('Error creando tabla', err);
	})
	.finally(() => {
		sequelize.close();
	});

const circulo = sequelize.define('circulo', {
	radio: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
});

circulo
	.sync()
	.then(() => {
		console.log('Tabla creada');
	})
	.catch((err) => {
		console.log('Error creando tabla', err);
	})
	.finally(() => {
		sequelize.close();
	});
