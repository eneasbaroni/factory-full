import dotenv from 'dotenv';
dotenv.config();

const dbConfigs = {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASS,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
}

export default dbConfigs