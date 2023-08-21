const API_BASE = 'https://pokeapi.co/api/v2/pokemon/';

exports.getRandomPokemon = async () => {
	// Numero aleatorio entre 1 y 151
	const randomPokemonId = Math.floor(Math.random() * 151) + 1;

	// Llamada a la API
	const response = await fetch(`${API_BASE}${randomPokemonId}`);

	// Si la respuesta es correcta, devolvemos el JSON
	if (response.ok) {
		const data = await response.json();

		return data;
	}

	// Si la respuesta no es correcta, lanzamos un error
	return {
		error: true,
		message: 'Error al obtener un pokemon aleatorio',
	};
};
