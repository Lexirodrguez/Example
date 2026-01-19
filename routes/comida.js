const express =  require ('express');
const router = express.Router();
const comidaController = require('../controllers/comidaController');

// CRUD PARA LAS COMIDAS
router.get('/', comidaController.getAllComidas);
router.get('/:id', comidaController.getComidaById);
router.post('/', comidaController.createComida);
router.put('/:id', comidaController.updateComida);
router.delete('/:id', comidaController.deleteComida);

module.exports = router;