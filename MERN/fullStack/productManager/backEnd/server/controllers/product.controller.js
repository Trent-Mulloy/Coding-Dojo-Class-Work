const Product = require("../models/product.model");

module.exports = {

    findRandom: (req, res) => {
        Product.find({})
        .then(
            //allJokes has count cuz array
            //return allJokes[random]
        )
        .catch()
    },

    testResponse: (req, res) =>{
        res.json({message: "test message!"})
    },

    findAll: (req,res) => {
        Product.find({})
            .then(results => res.json(results))
            .catch(err => res.status(400).json({message: "no worky", err}))
    },

    findOne: (req,res) => {
        Product.findOne({_id: req.params._id})
            .then(results => res.json(results))
            .catch(err => res.status(400).json({message: "no worky", err}))
    },

    createProduct: (req,res) =>{
        Product.create(req.body)
            .then(results => res.json(results))
            .catch(err => res.status(400).json({message: "no worky", err}))
    },

    deleteOne: (req,res) => {
        Product.deleteOne({_id: req.params._id}, {runValidators: true})
            .then(results => res.json(results))
            .catch(err => res.status(400).json({message: "no worky", err}))
    },

    updateOne: (req,res) =>{
        Product.updateOne({_id: req.params._id}, req.body)
            .then(results => res.json(results))
            .catch(err => res.status(400).json({message: "no worky", err}))
    },
}