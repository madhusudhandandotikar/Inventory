const mongoose= require('mongoose');
const {Schema} = mongoose;


const categorySchema =new Schema({
    category_name: {
        type:String,
        required:true,
    },
    category_desc:{
        type:String,
        required:true,
    },   
});

//create model from schema
const CategoryModel= mongoose.model('Category', categorySchema)

module.exports= CategoryModel;
