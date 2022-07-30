const { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Warehouse extends Model {}

Warehouse.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        warehouse_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

module.exports = Warehouse;