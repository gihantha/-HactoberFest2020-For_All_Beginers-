const { products } = require('../models')
const db = require('../models')

//create main model

const Product = db.products
const Review = db.reviews

//main work

//1. Create Product

const addProduct = async (req, res)=> {

    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }
    
    console.log('Product added', req.body)
    const product = await Product.create(info)
    res.status(200).send(product);
}

// 2. get all products

const getAllProducts = async (req, res) => {

    let products = await Product.findAll({})
    res.status(200).send(products)
}

// 3. Get single product

const getOneProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.findOne({
        where: {id : id}
    })
    res.status(200).send(product)
}

// 4. Update single product

const updateProduct = async (req, res) => {
    
    let id = req.params.id

    const [no, data] = await Product.update(req.body, {where: {id : id}, returning: true} )

    let newProduct = await Product.findOne({
        where: {id : id}
    })


    res.status(200).send(newProduct)
    
}

 // 5. delete product by id

const deleteProduct = async (req, res) => {
    let id = req.params.id
    await Product.destroy({ where: { id : id }})
    res.status(200).send('product is deleted')
}

// 6. get published product
const getPublishedProduct = async (req, res) => {
    const products = await Product.findAll({ where : { published: true}})
    res.status(200).send(products)
}
module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct, 
    getPublishedProduct
}
