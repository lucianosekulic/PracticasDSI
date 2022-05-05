import * as net from 'net';
//import { spawn } from 'child_process';


export class server {
  constructor(){}

  crearServidor(){
    net.createServer({ allowHalfOpen: true }, (connection) => {
      console.log('Cliente se ha conectado');
      connection.on('error', (err) => {
        console.log('Error al crear el server', err);
      });
      
      connection.on('end', () => {
        console.log('Mensaje recibido del cliente recibido');
        
      });
    }).listen(60300, () => {
      console.log('Servidor iniciado.');
    });
  }


}


