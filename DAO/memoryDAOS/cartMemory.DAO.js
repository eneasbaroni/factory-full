const carts = []

export default class CartMemoryDAO {
    getAll() {
        return carts
    }
    get(id) {
        const cart = carts.find(cart => cart.id === id)
        return cart
    }
    create(cart) {
        cart.id = carts.length
        carts.push(cart)
    }
    delete(id) {
        const data = carts.filter(cart => cart.id !== id)
        carts = data
        return carts
    }

}


        