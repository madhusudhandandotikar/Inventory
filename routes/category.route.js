const express = require('express');
const CategoryRouter= express.Router();
const {getAllCategory, addCategory, updateCategory, deleteCategory, getCategorybyId}= require('../controllers/category.controllers');



CategoryRouter.get('/api/Categories',getAllCategory);
CategoryRouter.post('/api/Categories',addCategory)
CategoryRouter.put('/api/Categories/:id', updateCategory)
CategoryRouter.delete('/api/Categories/:id', deleteCategory)
CategoryRouter.get('/api/singleCategory', getCategorybyId)


module.exports= CategoryRouter