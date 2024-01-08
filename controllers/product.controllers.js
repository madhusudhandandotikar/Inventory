const ProductModel = require('../models/product.model')

async function getAllProducts(req, res) {
    try {
        let productData = await ProductModel.find({})
        if (productData < 1) {
            return res.status(401).json({
                message: "There is no data in product"
            })
        }
        res.status(201).json({
            message: "Data is available",
            productData
        })
    } catch (error) {
        console.log(error, "Error from catch block")
    }

}

async function addProducts(req, res) {
    try {
        // logic is to get the product data from request body coming  in the request
        let { product_name, product_desc, price, category, stock } = req.body;
        console.log(req.body)
        const productdata = new ProductModel({
            product_name: product_name,
            product_desc: product_desc,
            price: price,
            category: category,
            stock_qnty: stock
        })
        // it is save all the data to database;
        let sentdata = await productdata.save();
        res.status(200).json({
            message: "data inserted successfully",
            sentdata
        })
    } catch (error) {
        console.log(error, "POST /api/products");
        res.status(404).json({
            error: error.message
        })
    }
}

const updateProduct = async (req, res) => {
    let { id } = req.params;
    let { price } = req.body;

    try {
        const updateProduct = await ProductModel.findByIdAndUpdate({ _id: id }, { price: price }, { new: true })

        if (!updateProduct) {
            return res.status(400).json({
                message: "product not updated"
            })
        }
        res.status(200).json({
            message: "Successfully added the products",
            updateProduct
        })
    } catch (error) {
        res.status(400).json({
            message: "Error in products"
        })
    }
}

const deleteProduct=async(req,res)=>{
    let {id} = req.params;
    try{
        const deletedProduct= await ProductModel.findByIdAndDelete({_id:id})
        if(!deleteproduct){
            message:"Product not deleted"
        }
        res.status(200).json({
            message:"Product deleted succesfully",
            deleteproduct
        })
    }catch(error){
        console.log(error);
        return res.status(400).json({
            message:"Could not delete the product."
        })
    }
}

const getProductDetailbyId= async(req,res)=>{
    let {id}=req.query;
    try{
        const getProduct= await ProductModel.findById({_id:id})
        if(!getProduct){
            return res.status(400).json({
                message:'no product with this id'
            })
        }
        res.status(200).json({
            message:'got the product',
            getProduct
        })
    }catch(error){
        console.log(error);
    }
}

module.exports = { getAllProducts, addProducts, updateProduct, deleteProduct, getProductDetailbyId }