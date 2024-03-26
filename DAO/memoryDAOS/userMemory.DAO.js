const users = []

class UserMemoryDAO {
    getAll() {
        return users
    }
    get(id) {
        const user = users.find(user => user.id === id)
        return user
    }
    create(user) {
        user.id = users.length
        users.push(user)
    }
    delete(id) {
        const data = users.filter(user => user.id !== id)
        users = data
        return users        
    }
}

export default UserMemoryDAO