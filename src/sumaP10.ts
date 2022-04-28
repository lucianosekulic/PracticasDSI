import * as fs from 'fs';

/**
 * clase sumaP10 donde se encuentran los metodos para la suma de los numeros del fichero sumar.txt
 */
export class sumaP10 {
    private constructor(){
    }

    sumar(){
        let resultado: number = 0;
        if (!fs.existsSync(`./ficheros`)) {
            fs.mkdirSync(`./ficheros`, {recursive: true});       
          }

          if(fs.existsSync(`./ficheros/sumar.txt`)) {
            fs.readFile(`./ficheros/sumar.txt`, 'utf8', (err, data) => {
                if (err) throw err;
                let datos = JSON.parse(data);
                datos.forEach((element: { numero: number; }) => {
                    resultado += element.numero;
                });
                console.log(`La suma de los números es: ${resultado}`);
            }
            );
    }
}
}