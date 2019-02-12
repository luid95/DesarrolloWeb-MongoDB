'use strict'

var mongoose = require(mongoose);
var Schema = mongoose.Schema;

var ArtistSchema = Schema({
    name: String,
    description: String,
    image: String
});

//guarda una estancia de la coleccion Artist
module.exports = mongoose.model('Artist', ArtistSchema);
