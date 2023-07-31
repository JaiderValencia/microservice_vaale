import 'dotenv/config'
import express from 'express'

const app = express()

const port = process.env.PORT || 3000

import routes from './routes/'
app.use(routes)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})