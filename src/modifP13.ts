
import * as mongoose from "mongoose";
import {Document, connect, model, Schema} from 'mongoose';


export interface userInterface extends Document{
    NIF: string;
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
    titulacion: string;
    asignaturas: string;
}

export const schemaUsuario = new Schema(
    {
      NIF: {
        type: String,
        required: true,
        },
      nombre: {
        type: String,
        required: true,
      },
      apellido: {
        type: String,
        required: true,
      },
      edad: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      titulacion: {
        type: String,
        required: true,
      },
      asingaturas: {
        type: String,
        required: true,
      },
    },
    {
      versionKey: false,
    }
  );
  
  export const User = model<userInterface>("User", schemaUsuario);



  connect('mongodb://127.0.0.1:27017', {
    autoIndex: true
  }).then(() => {
    console.log('Connected to the database');
  }).catch(() => {
    console.log('Something went wrong when conecting to the database');
  });


//crear user
const user = new User({
    NIF: '43383457R',
    nombre: 'pedro',
    apellido: 'perez',
    edad: 22,
    email: 'pedroperez@gmail.com',
    titulacion: 'ing informatica',
    asignaturas: 5,
});

user.save().then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });

//leer
const filtro = {NIF: user.NIF};
 User.findOne(filtro.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });)



 //modificar

 User.findOne({
     NIF:'43383457R'}).exec(function(err, User){
         if(err) throw err
         console.log(User)
     })



//borrar
User.findOneAndDelete({
    NIF:'43383457R'}).exec(function(err, User){
        if(err) throw err
        console.log(User)
})

