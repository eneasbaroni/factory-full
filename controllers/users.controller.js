import {userRepository} from '../Repository/index.js'
import { Router } from 'express'

const usersController = Router()

usersController.get('/', async (req, res) => {
    try {
        const users = await userRepository.getItems()
        res.send(users)        
    } catch (error) {
        res.send(error)
    }    
})

usersController.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await userRepository.getItem(id)
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})

usersController.post('/', async (req, res) => {
    try {
        const user = req.body
        const createdUser = await userRepository.createItem(user)
        res.send(createdUser)
    } catch (error) {
        res.send(error)
    }
})

usersController.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deletedUser = await userRepository.deleteItem(id)
        res.send(deletedUser)
    } catch (error) {
        res.send(error)
    }
})


export default usersController