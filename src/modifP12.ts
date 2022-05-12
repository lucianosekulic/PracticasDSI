import * as express from 'express';
import { spawn } from 'child_process';

/**
 * servidor con express
 */
const app = express();

	app.listen(3000, () => {
		console.log('Escuchando');
	});



app.get('/execmd', (req, res) => {

		const cmd = req.query.cmd as string;
		let peticiones:string[] = [];

		if (req.query.args) {
			const args = req.query.args as string;
			peticiones = args.split(" ");
		}

		const processComand = spawn(cmd, peticiones);
		let resultado = '';
		processComand.stdout.on('data', (data) => {
			resultado += data;
		});

		processComand.on('error', (err) => {
			res.send(`{
				"Error": "${err}"
			}`)
		});
		processComand.on('close', () => {
			res.send(`{
				"Data": "${resultado}"
			}`)
		});
	});

	app.get('*', (_, res) : any => {
		res.send('<h1>Error 404</h1>');
	});



