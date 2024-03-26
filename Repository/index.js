import productFactory from '../Factory/product.factory.js'
import cartFactory from '../Factory/cart.factory.js'
import userFactory from '../Factory/user.factory.js'

import DataRepository from './data.repository.js'

const productRepository = new DataRepository(new productFactory())
const cartRepository = new DataRepository(new cartFactory())
const userRepository = new DataRepository(new userFactory())


export {
    productRepository,
    cartRepository,
    userRepository}

