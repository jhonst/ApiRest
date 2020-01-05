const Hotel = require('../models/HotelesCl');

module.exports = {

    listaHoteles: async (req, res, next) => {
        try {
            const hoteles = await Hotel.find({}, {details: false});
            res.json(
                {
                    "meta": { "success" : "true", "length" : hoteles.length },
                    "hotels": hoteles
                }
            );
        } catch (error) {
            res.json(
                {
                    "meta": { "success" : "false", "length" : hoteles.length },
                    "hotels": hoteles
                }
            );
        }
    },

    detalleHotel: async (req, res, next) => {
        try {
            const nom = req.params.nom;
            const hoteles = await Hotel.findById(nom);  //Mostrar todo el registro con detalles y datos generales
            //const hoteles = await Hotel.findById(nom, {details: true});   //solo mostrar los detalles
            res.json(
                {
                    "meta": { "success" : "true", "length" : hoteles.length },
                    "hotels": hoteles
                }
            );
        } catch (error) {
            res.json(
                {
                    "meta": { "success" : "false", "length" : 0 },
                    "hotels": []
                }
            );
        }
    }

};