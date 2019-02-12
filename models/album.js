'use strict'

var mongoose = require(mongoose);
var Schema = mongoose.Schema;

var AlbumSchema = Schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    artist: {type: Schema.ObjectId, ref: 'Artist'}
    //referencia a la entidad Artist
});

//guarda una estancia de la coleccion Album
module.exports = mongoose.model('Album', AlbumSchema);
