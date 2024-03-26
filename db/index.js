import mongoose from "mongoose";
import dbConfigs from '../configs/dbConfig.js'

const URL = `mongodb+srv://${dbConfigs.dbUser}:${dbConfigs.dbPassword}@${dbConfigs.dbHost}/${dbConfigs.dbName}?retryWrites=true&w=majority`
const mongoConnect = async () => {
    try {
        await mongoose.connect(URL)
        console.log("MongoDB connected")
    } catch (error) {
        console.log('error', error.message)
    }
}

export default mongoConnect