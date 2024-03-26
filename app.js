import express from 'express'
import router from './router/index.js'
import mongoConnect from './db/index.js'
import dotenv from 'dotenv'
dotenv.config();

const app = express()

//conectar a mongo solo si el ambiente es de prod
const env = process.env.NODE_ENV
if (env === 'prod') mongoConnect()


//middlewares para recibir json y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

//levantar el servidor
app.listen(8080, () => {
    console.log('servidor levantado en el puerto 8080')
})


