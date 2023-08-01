import 'dotenv/config'
import express from 'express'

const app = express()

const port = process.env.PORT || 3000

import connectionDB from './database/connection/connection'
connectionDB()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import routes from './routes/'
app.use(routes)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})