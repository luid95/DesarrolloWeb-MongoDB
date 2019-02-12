'use strict'

var mongoose = require(mongoose);
var Schema = mongoose.Schema;

var SongSchema = Schema({
    number: String,
    name: String,
    duration: String,
    file: String,
    album: {type: Schema.ObjectId, ref: 'Album'}
    //referencia a la entidad Album
});

//guarda una estancia de la coleccion Song
module.exports = mongoose.model('Song', SongSchema);
