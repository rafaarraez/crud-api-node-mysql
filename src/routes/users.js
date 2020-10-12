const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// rutas
router.get('/', userController.users);
router.post('/add', userController.add);
router.get('/delete/:id', userController.delete);
router.get('/update/:id', userController.edit);
router.post('/update/:id', userController.saveEdit);


module.exports = router;
