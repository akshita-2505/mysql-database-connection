var express = require('express');
var router = express.Router();
const user=require('../controller/productController')

router.get('/products',user.getUser);
router.post('/products',user.addUser);

router.get('/products/:productsId',user.getUserById);
router.put('/products/:productsId',user.userUpdateById);
router.delete('/products/:productsId',user.deleteUser);

module.exports = router;
