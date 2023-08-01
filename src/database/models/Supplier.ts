import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { SupplierInvitation } from './SupplierInvitation'

@Table({
    timestamps: false,
    tableName: 'supplier',
})
export class Supplier extends Model {
    @Column({
        type: DataType.BIGINT({ length: 20 }),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING(256),
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING(45),
        allowNull: false,
    })
    code!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    })
    is_active!: boolean;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    entry_date!: Date;

    @HasMany(() => SupplierInvitation)
    invitations!: SupplierInvitation[]
}
