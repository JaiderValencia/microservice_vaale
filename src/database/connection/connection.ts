import 'dotenv/config'
import { Sequelize } from 'sequelize-typescript'

import { Supplier } from '../models/Supplier'
import { SupplierInvitation } from '../models/SupplierInvitation'

export const connection = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_Host,
    username: process.env.DB_Username,
    password: process.env.DB_Password,
    database: process.env.DB_DatabaseName,
    port: parseInt(process.env.DB_Port || '3306'),
    logging: false,
    models: [
        Supplier,
        SupplierInvitation
    ]
})

async function connectionDB() {
    try {
        await connection.sync()
    } catch (error) {
        console.log(error)
    }
}

export default connectionDB