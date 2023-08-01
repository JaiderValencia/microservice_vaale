import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Supplier } from './Supplier'

@Table({
    timestamps: false,
    tableName: 'supplier_invitation'
})

export class SupplierInvitation extends Model {
    @Column({
        type: DataType.BIGINT({ length: 20 }),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number

    @ForeignKey(() => Supplier)
    @Column({
        type: DataType.BIGINT({ length: 20 }),
        allowNull: false,
    })
    supplier_id!: number

    @BelongsTo(() => Supplier)
    supplier!: Supplier

    @Column({
        type: DataType.STRING(256),
        allowNull: true,
    })
    commerce_cell_phone!: string

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })
    entry_date!: Date
}