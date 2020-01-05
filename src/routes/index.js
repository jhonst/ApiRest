const { Router } = require('express');
const router = Router();

//Controladores
const {
    listaHoteles,
    detalleHotel
} = require('../controllers/HotelesController');

//Ruta para probar la Api
router.get('/prueba', (req, res) => {
    res.json({"Titulo": "Prueba exitosa"});
});

//Metodo para probar la base de datos
router.get('/hotelesL', listaHoteles);

//Metodo para probar la base de datos
router.get('/hotelesL/:nom', detalleHotel);

module.exports = router;