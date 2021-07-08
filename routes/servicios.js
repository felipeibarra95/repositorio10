var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Hola! Soy la página de Servicios');
});

module.exports = router;