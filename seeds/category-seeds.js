const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Coffee',
        warehouse_id: 1
    },
    {
        category_name: 'Tea',
        warehouse_id: 1
    },
    {
        category_name: 'Milk',
        warehouse_id: 1
    },
    {
        category_name: 'Equipment',
        warehouse_id: 1
    },
    {
        category_name: 'Merchandise',
        warehouse_id: 1
    } 
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;