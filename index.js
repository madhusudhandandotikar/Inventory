// model: database related stuff(schemas), views: static files from server to client, controllers: (action or data as response to client) main business logic function most important, routes: we write all the api routes here.

const express = require('express');
const mongoose= require('mongoose');
const morgan= require('morgan')
require('dotenv').config();

const app = express();
const Port= process.env.Port;

//connect with mongoose, by making it Async
const dbConnect= require('./connection')
dbConnect();
app.use(express.json())
app.use(morgan())
//importing custome routes
const ProductRouter= require('./routes/product.route');
const CategoryRouter = require('./routes/category.route');
const InventoryRouter= require('./routes/inventory.route')

//loading my routes
//on postman it will have /product/info :get
//main gateway route
app.use('/products',ProductRouter)
app.use('/category',CategoryRouter)
app.use('/inventory',InventoryRouter)
app.listen(Port, ()=>{
    console.log(`Server running on port ${Port}`);
})
