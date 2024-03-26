import CartDAO from '../DAO/mongoDAOS/cart.DAO.js'
import CartMemoryDAO from '../DAO/memoryDAOS/cartMemory.DAO.js'

import dotenv from 'dotenv'
dotenv.config();

const env = process.env.NODE_ENV

let cartFactory

if (env === 'dev') {
    cartFactory = CartMemoryDAO
} else {
    cartFactory = CartDAO
}

export default cartFactory
