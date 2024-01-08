const mongoose= require('mongoose');
const {Schema} = mongoose;


const productSchema =new Schema({
    product_name: {
        type:String,
        required:true,
    },
    product_desc:{
        type:String,
        required:true,
    },
    category:{
        //Reference from category schema id
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    stock_qnty:{
        type:Number,
        default:20,
        required:true,
    }
    
});

//create model from schema
const ProductModel= mongoose.model('Product',productSchema)

module.exports= ProductModel;
