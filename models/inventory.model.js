// Product (Reference to Product Schema)
// Quantity
// Date added
const mongoose = require('mongoose');
const { Schema } = mongoose;


const inventorySchema = new Schema({
    product: {
        //reference from product schema
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    stock_qnty: {
        type: Number,
        default: 20,
        required: true,
    },
    date_added: {
        type: String,
        required: true,
    }
});

//create model from schema
const InventoryModel = mongoose.model('Inventory', inventorySchema)

module.exports = InventoryModel;
