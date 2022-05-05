import * as net from 'net';


/**
 * Clase la cual crea un cliente 
 */
export class Cliente {

  constructor(private socket: net.Socket) {}
  enviarDatos(type: string) {
    if (type === 'comand') {
     let mensaje: string = "";
      this.socket.write(JSON.stringify(mensaje));
      this.socket.end();
    } else {
      console.log('Error: El tipo de mensaje no es correcto.');
    }
  }

  /**
   * funcion la cual recibe los datos
   */
  recibirDatos() {
    let response:string = '';
    this.socket.on('data', (data) => {
      response += data;
    });
    this.socket.on('end', () => {
      const message = JSON.parse(response);
      console.log('Mensaje recibido del servidor recibido');
      if (!message.success) {
        console.log('Error: El tipo de mensaje no es correcto.');
      }
    });
  }
}