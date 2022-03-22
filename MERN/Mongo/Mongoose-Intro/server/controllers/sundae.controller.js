
const Sundae = require("../models/sundae.model");

module.exports.testResponse = (req, res) =>{
    res.json({message: "test message!"})
}

module.exports.findAll = (req,res) => {
    Sundae.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "no worky", err}))
}

module.exports.create = (req,res) =>{
    Sundae.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "no worky", err}))
}

module.exports.findOne = (req,res) =>{
    Sundae.findOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "no worky", err}))
}