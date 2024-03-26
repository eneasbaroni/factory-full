import User from "../models/users.model.js"

class UserDAO {
    
    async getAll() {
        try {
            const users = await User.find()
            return users
        } catch {
            throw new Error('Error al obtener los usuarios')
        }
    }

    async get(id) {
        try {
            const user = await User.findById(id)
            return user
        } catch {
            throw new Error('Error al obtener el usuario')
        }       
                
    }
    
    async create(user) {        
        try {
            const createdUser = await User.create(user)
            return createdUser
        } catch {
            throw new Error('Error al crear el usuario')
        }        
    }
    
    async delete(id) {
        try {
            const deletedUser = await User.findByIdAndDelete(id)
            return deletedUser
        } catch {
            throw new Error('Error al borrar el usuario')
        }                       
    }
    
}   

export default UserDAO

    