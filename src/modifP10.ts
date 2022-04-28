import * as fs  from 'fs';
//import { sumaP10 } from './sumaP10';
import {spawn} from 'child_process';

const filename = process.argv[2];
    
/**
 * watchfile para ver si el fichero sumar.txt cambia
 */
    fs.access(filename, fs.constants.F_OK, (err) => {
        console.log(`${filename} ${err ? 'no existe' : 'existe'}`);
    
        if(!err) {
            fs.watchFile(filename, () => {
                const watch = spawn('node', [filename]);;
                
                watch.stdout.on('data', piece => piece);
    
                watch.on('close', () => {
                    let outputArray: any;
                    outputArray.forEach((element: any) => {
                        console.log(element);
                    });
                });
            });
        } else {
            fs.writeFile(filename, '/n23', () => {
                console.log('Se ha creado el fichero de forma correcta, ya que el fichero que usted especifico no existia, vuelva a ejecutar el programa');
            })
        }
    });