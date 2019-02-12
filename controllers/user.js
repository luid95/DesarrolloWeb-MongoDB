'use strict'
import userr from '../models/user';
//var User = require('../models/user');//importar el modelo
var bcrypt = require('bcrypt-nodejs');//modulo para encriptar contraseñas
function pruebas(req, res){
  res.status(200).send({
    message: 'Probando una accion del controlador de usuarios del api rest con Node y MongoDB'
  });
}

function saveUser(req, res){
  var user = new User();
  var params = req.body;
  console.log(params);

  user.name = params.name;
  user.surname = params.surname;
  user.email = params.email;
  user.role = 'ROLE_USER';
  user.image = 'null';

  if (params.password) {
    //Encriptar contraseña y guardar datos

  }else {
    res.status(500).send({message: 'Introduce la contraseña'});
  }
}

//exportar los metodos en un modulo
//para utilizar estos metodos en una ruta fuera de este fichero
module.exports = {
  pruebas,
  saveUser
};
