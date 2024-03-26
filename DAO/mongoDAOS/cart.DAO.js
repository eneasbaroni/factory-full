import Cart from "../models/carts.model.js"

class CartDAO {
    
    async getAll() {
        try {
            const carts = await Cart.find()
            return carts
        } catch {
            throw new Error('Error al obtener los carritos')
        }
    }

    async get(id) {
        try {
            const cart = await Cart.findById(id)
            return cart
        } catch {
            throw new Error('Error al obtener el carrito')
        }       
                
    }
    
    async create(cart) {        
        try {
            const createdCart = await Cart.create(cart)
            return createdCart
        } catch {
            throw new Error('Error al crear el carrito')
        }        
    }
    
    async delete(id) {
        try {
            const deletedCart = await Cart.findByIdAndDelete(id)
            return deletedCart
        } catch {
            throw new Error('Error al borrar el carrito')
        }                       
    }
    
}

export default CartDAO