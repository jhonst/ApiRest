const { Schema, model} = require('mongoose');

const HotelSchema = new Schema({
    name: String,
    start: String,
    image: String,
    price: Number,
    city: String,
});

module.exports = model ('hoteles', HotelSchema);