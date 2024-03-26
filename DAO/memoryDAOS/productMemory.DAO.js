const products = [
    {
        id: 0,
        name: 'producto prueba 00'
    },
    {
        id: 1,
        name: 'producto prueba 01'
    },
    {
        id: 2,
        name: 'producto prueba 02'
    }
]

class ProductMemoryDAO {
    
    getAll() {
        return products
    }

    get(id) {
        //filtrar por id
        const product = products.find(product => product.id === id)
        return product        
    }
    
    create(product) {
        products.push(product)
    }
    
    delete(id) {
        const productsUpdate = products.filter(product => product.id !== id)
        products = productsUpdate
        return products               
    }
    
}

export default ProductMemoryDAO