import mongoose from "mongoose";

//Definimos la coleccion
const productCollection = 'product'

//Definimos el esquema
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    }
})

const Products = mongoose.model(productCollection, productSchema)

export default Products

/* const newProducts {
    "title": "prueba 1",
    "description": "prueba 1",
    "code": "pb01",
    "price": 1000,
    "stock": 10,
    "category": "productos",
    "thumbnail": "producto"
} */