const express = require('express');
const next = require('next');

const PORT = 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = express();

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(PORT, err => {
			if (err) throw err;
			const URL = `http://localhost:${PORT}`;
			console.log(`> Ready on ${URL}`);
			require('opn')(URL);
		});
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
