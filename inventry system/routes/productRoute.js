const express = require('express');
const productRouter = express.Router();

const productController = require('../controllers/productController');

productRouter.post('/createproducts', productController.createProduct);
productRouter.put('/updateproducts/:id', productController.updateProduct);

// Change router to productRouter here:
module.exports = productRouter;