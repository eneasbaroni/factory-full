import mongoose from "mongoose";
import Cart from "./carts.model.js";

const userCollections = 'user'

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
    },
    age: Number,
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cart',
        /* required: true  */                
    }    
})

userSchema.pre('save', async function (next) {
    const user = this; // Reference the current user object
  
    // Check if a cart already exists (prevents duplicates)
    if (user.cart) {
      return next();
    }
  
    try {
      // Create a new cart
      const newCart = await Cart.create({});
  
      // Assign the newly created cart to the user
      user.cart = newCart._id;
    } catch (error) {
      return next(error); // Pass any errors to the error handler
    }
  
    next(); // Proceed with saving the user
});

userSchema.pre('find', function(){
    this.populate('cart')
})

const User = mongoose.model(userCollections, userSchema)

export default User

const newUser = {
    "first_name": "Eneas",
    "last_name": "Baroni",
    "email": "Pq9rO@example.com",
    "age": 25,
    "password": "12345",
    "role": "admin"
}