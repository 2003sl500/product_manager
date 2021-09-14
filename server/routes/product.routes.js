const ProductController = require('../controllers/product.controller')
module.exports = (app) => {
    app.post('/api/product', ProductController.createProduct)
    app.get('/api/product', ProductController.getAllProduct)
    app.get('/api/product/:id', ProductController.getOneProduct)
    app.put('/api/product/:id', ProductController.editProduct)
    app.delete('/api/product/:id', ProductController.deleteProduct)
}