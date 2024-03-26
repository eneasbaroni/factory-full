import {Router} from 'express'
import {productRepository} from '../Repository/index.js'

const productsController = Router()

productsController.get('/', async (req, res) => {
    try {
        const products = await productRepository.getItems()
        res.send(products)
    } catch (error) {
        res.send(error)
    }
})

productsController.get('/:id', async (req, res) => {
    try {
        const pid = req.params.id
        const product = await productRepository.getItem(pid)
        res.send(product)
    } catch (error) {
        res.send(error)
    }
})

productsController.post('/', async (req, res) => {
    try {
        const product = req.body  
        const createdProduct = await productRepository.createItem(product)
        res.send(createdProduct)
    } catch (error) {
        res.send(error)
    }
})

productsController.delete('/:id', async (req, res) => {
    try {
        const pid = req.params.id
        const deletedProduct = await productRepository.deleteItem(pid)
        res.send(deletedProduct)
    } catch (error) {
        res.send(error)
    }
})



export default productsController
