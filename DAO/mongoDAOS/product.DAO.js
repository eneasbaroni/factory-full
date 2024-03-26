import Products from "../models/products.model.js"

class ProductDAO {
    
    async getAll() {
        try {
            const products = await Products.find()
            return products
        } catch {
            throw new Error('Error al obtener los productos')
        }
    }

    async get(id) {
        try {
            const product = await Products.findById(id)
            return product
        } catch {
            throw new Error('Error al obtener el producto')
        }       
                
    }
    
    async create(product) {        
        try {
            const createdProduct = await Products.create(product)
            return createdProduct
        } catch {
            throw new Error('Error al crear el producto')
        }        
    }
    
    async delete(id) {
        try {
            const deletedProduct = await Products.findByIdAndDelete(id)
            return deletedProduct
        } catch {
            throw new Error('Error al borrar el producto')
        }                       
    }
    
}

export default ProductDAO