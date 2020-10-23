const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// rutas
router.get('/api/users', userController.users);
router.post('/api/add', userController.add);
router.get('/api/delete/:id', userController.delete);
router.get('/api/update/:id', userController.edit);
router.post('/api/update/:id', userController.saveEdit);


module.exports = router;
