import ProductMemoryDAO from '../DAO/memoryDAOS/productMemory.DAO.js';
import ProductDAO from '../DAO/mongoDAOS/product.DAO.js';
import dotenv from 'dotenv'

dotenv.config();

const env = process.env.NODE_ENV

let productFactory;

if(env === 'dev') {
    productFactory = ProductMemoryDAO
} else {

    productFactory = ProductDAO
}

export default productFactory