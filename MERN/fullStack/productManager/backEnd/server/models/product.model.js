const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "name of product required"]
    },
    description: {
        type: String,
        required: [true, "description of product is required"],
        minlength: [5, "description must be atleast 5 charecters long"]
    },
    price: {
        type: Number,
        min: [1, "price must be atleast 1 dollar"],
        max: [2000, "price must not exceed 2000 dollars"],
        required: [true, "price is required!"]
    }
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;