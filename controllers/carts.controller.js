import {cartRepository} from '../Repository/index.js'
import { Router } from 'express'

const cartsController = Router()

cartsController.get('/', async (req, res) => {
    try {
        const carts = await cartRepository.getItems()
        res.send(carts)        
    } catch (error) {
        res.send(error)
    }
})

cartsController.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const cart = await cartRepository.getItem(id)
        res.send(cart)
    } catch (error) {
        res.send(error)
    }
})

cartsController.post('/', async (req, res) => {
    try {
        const cart = req.body
        const createdCart = await cartRepository.createItem(cart)
        res.send(createdCart)
    } catch (error) {
        res.send(error)
    }
})

cartsController.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deletedCart = await cartRepository.deleteItem(id)
        res.send(deletedCart)
    } catch (error) {
        res.send(error)
    }
})


export default cartsController