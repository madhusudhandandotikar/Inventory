const express = require('express');
const InventoryRouter= express.Router();
const {getAllInventory,addInventory, updateInventory, deleteInventory,getInventorybyId}= require('../controllers/inventory.controller');



InventoryRouter.get('/api/inventory',getAllInventory);
InventoryRouter.post('/api/inventory',addInventory)
InventoryRouter.put('/api/inventory/:id', updateInventory)
InventoryRouter.delete('/api/inventory/:id', deleteInventory)
InventoryRouter.get('/api/singleInventory', getInventorybyId)


module.exports= InventoryRouter