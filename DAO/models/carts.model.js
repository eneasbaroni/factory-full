import mongoose from "mongoose";

const cartCollections = 'cart'

const cartSchema = new mongoose.Schema({
    products: {
        type:  [
            {
                product: {
                    type: Array
                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 1
                }
            }
        ],
    }    
})

const Cart = mongoose.model(cartCollections, cartSchema)

export default Cart