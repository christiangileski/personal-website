const Hapi = require('hapi');
require('dotenv').config();

(async () => {
	const server = new Hapi.Server({
		port: 8333,
	});

	await server.start();

	console.log('Server running at:', server.info.uri);
})();
