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
    console.log("controller, id: ", id)
    Product.findOne({_id : id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
}