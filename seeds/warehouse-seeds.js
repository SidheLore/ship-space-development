const { Warehouse } = require('../models')

const warehouseData = [
    {
        warehouse_name: 'Coffee Warehouse',
        description: 'A coffee roasters warehouse, containing coffee, tea, and related equipment.'
    }
];

const seedWarehouses = () => Warehouse.bulkCreate(warehouseData);

module.exports = seedWarehouses;