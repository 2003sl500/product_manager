const { Product } = require("../models/product.model")

module.exports.createProduct = (req, res) => {
    const {title, price, description} = req.body
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.getAllProduct = (req, res) => {
    Product.find({})
        .then(allProduct => res.json(allProduct))
        .catch(err => res.json(err))
}

module.exports.getOneProduct = (req, res) => {
    const {id} = req.params
    Product.findOne({_id : id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
}

module.exports.editProduct = (req, res) => {
    const {id} = req.params
    Product.findByIdAndUpdate({_id: id}, req.body, {new:true})
        .then(editOneProduct => res.json(editOneProduct))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    const {id} = req.params
    Product.findByIdAndDelete({_id : id})
        .then(deleteProduct => res.json(deleteProduct))
        .catch(err => res.json(err))
}