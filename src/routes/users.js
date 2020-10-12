const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// rutas
router.get('/', userController.list);
router.post('/add', userController.add);
router.get('/delete/:id', userController.delete);

module.exports = router;
