//creating products custom route;

const express = require('express');
const ProductRouter= express.Router();
const {getAllProducts, addProducts, updateProduct, deleteProduct, getProductDetailbyId}= require('../controllers/product.controllers')

ProductRouter.get('/api/products',getAllProducts);

ProductRouter.post('/api/products',addProducts)

//PUT request
ProductRouter.put('/api/products/:id',updateProduct)

//delete
ProductRouter.delete('/api/products/:id', deleteProduct)

ProductRouter.get('/getProducts',getProductDetailbyId)

module.exports=ProductRouter