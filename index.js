'use stric'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/curso_mean2', (err, res) => {
  if(err){
    throw err;
  }else{
    console.log("La conexion a la base de datos esta correctamente...");
  }
});
