// Category API endpoints
//POST /api/inventory: Create a new category.

const CategoryModel = require('../models/category.model')

async function getAllCategory(req,res){
    try{
        let categoryData= await CategoryModel.find({})
        if(categoryData<1){
            return res.status(401).json({
                message:"There is no data in category"
            })
        }
        res.status(201).json({
            message:"Data is available",
            categoryData
        })
    } catch(error){
        console.log(error, "Error from catch block")
    }
    
}

async function addCategory(req,res){
    try {
        // make sure to take out from request body the json keys.
        let {category_name, category_desc}=req.body

        // make sure to insert the values inside model in the same way defined in the schema
        const CategoryData =new CategoryModel({
            category_name :category_name,
            category_desc : category_desc
        });
        let sendcategoryData =await CategoryData.save();
        res.status(200).json({
            message:'category data inserted successfully',
            sendcategoryData
        })
        
    } catch (error) {
        console.log(error);
        res.status(404).json({
            error:error.message
        })
    }
}

const updateCategory = async (req, res) => {
    let { id } = req.params;
    let { category_name } = req.body;
    try {
        const updatedCategory = await CategoryModel.findByIdAndUpdate({ _id: id }, { category_name: category_name }, { new: true })
        if (!updatedCategory) {
            return res.status(400).json({
                message: "Category not updated"
            })
        }
        res.status(200).json({
            message: "Successfully updated the Category",
            updatedCategory
        })
    } catch (error) {
        res.status(400).json({
            message: "Error in Category"
        })
    }
}

const deleteCategory = async (req, res) => {
    let { id } = req.params;
    try {
        const deletedCategory = await CategoryModel.findByIdAndDelete({ _id: id })
        if (!deletedCategory) {
            message: "Category not deleted"
        }
        res.status(200).json({
            message: "Category deleted succesfully",
            deletedCategory
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Could not delete the Category"
        })
    }
}

const getCategorybyId = async (req, res) => {
    let { id } = req.query;
    try {
        const getCategory = await CategoryModel.findById({ _id: id })
        if (!getCategory) {
            return res.status(400).json({
                message: 'no Category with this id'
            })
        }
        res.status(200).json({
            message: 'Category Found',
            getProduct
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports= {getAllCategory,addCategory, updateCategory, deleteCategory, getCategorybyId}