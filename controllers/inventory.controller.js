// Inventory API endpoints
//POST /api/inventory: Create a new category.

const InventoryModel = require('../models/inventory.model')


async function getAllInventory(req, res) {
    try {
        let inventoryData = await InventoryModel.find({})
        if (inventoryData < 1) {
            return res.status(401).json({
                message: "There is no data in category"
            })
        }
        res.status(201).json({
            message: "Data is available",
            inventoryData
        })
    } catch (error) {
        console.log(error, "Error from catch block")
    }

}

async function addInventory(req, res) {
    try {
        // make sure to take out from request body the json keys.
        let { product, stock_qnty, } = req.body

        // make sure to insert the values inside model in the same way defined in the schema
        const CategoryData = new CategoryModel({
            category_name: category_name,
            category_desc: category_desc
        });
        let sendcategoryData = await CategoryData.save();
        res.status(200).json({
            message: 'category data inserted successfully',
            sendcategoryData
        })

    } catch (error) {
        console.log(error, 'POST /api/inventory');
        res.status(404).json({
            error: error.message
        })
    }
}
const updateInventory = async (req, res) => {
    let { id } = req.params;
    let { category_name } = req.body;
    try {
        const updatedInventory = await InventoryModel.findByIdAndUpdate({ _id: id }, { category_name: category_name }, { new: true })
        if (!updatedInventory) {
            return res.status(400).json({
                message: "Inventory not updated"
            })
        }
        res.status(200).json({
            message: "Successfully updated the Inventory",
            updatedInventory
        })
    } catch (error) {
        res.status(400).json({
            message: "Error in Inventory"
        })
    }
}

const deleteInventory = async (req, res) => {
    let { id } = req.params;
    try {
        const deletedInventory = await InventoryModel.findByIdAndDelete({ _id: id })
        if (!deletedInventory) {
            message: "Inventory not deleted"
        }
        res.status(200).json({
            message: "Inventory deleted succesfully",
            deletedInventory
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Could not delete the Inventory"
        })
    }
}

const getInventorybyId = async (req, res) => {
    let { id } = req.query;
    try {
        const getInventory = await InventoryModel.findById({ _id: id })
        if (!getInventory) {
            return res.status(400).json({
                message: 'no Inventory with this id'
            })
        }
        res.status(200).json({
            message: 'Inventory Found',
            getProduct
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllInventory,
    addInventory,
    updateInventory,
    deleteInventory,
    getInventorybyId
}