import { Router } from 'express'
import productsController from '../controllers/producs.controller.js'
import cartsController from '../controllers/carts.controller.js'
import usersController from '../controllers/users.controller.js'

const router = Router()

router.get('/' , (req, res) => {
    res.send('hola mundo')
})

router.use('/products', productsController)
router.use('/carts', cartsController)
router.use('/users', usersController)

export default router