class DataRepository {
    constructor(dao)    {
        this.dao = dao
    }

    getItems() {
        return this.dao.getAll()
    }

    getItem(id) {
        return this.dao.get(id)
    }

    createItem(item) {
        return this.dao.create(item)
    }

    deleteItem(id) {
        return this.dao.delete(id)
    }

}

export default DataRepository

