var express = require('express');
var router = express.Router();
const user=require('../controller/categoriesController')

router.get('/categories',user.getUser);
router.post('/categories',user.addUser);

router.get('/categories/:categoriesId',user.getUserById);
router.put('/categories/:categoriesId',user.userUpdateById);
router.delete('/categories/:categoriesId',user.deleteUser);

module.exports = router;
