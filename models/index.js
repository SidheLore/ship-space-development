const Warehouse = require('./Warehouse');
const Category = require('./Category');
const Product = require('./Product');

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Warehouse.hasMany(Category, {
    foreignKey: 'warehouse_id'
});

Warehouse.hasMany(Product, {
    foreignKey: 'warehouse_id'
});

Category.belongsTo(Warehouse, {
    foreignKey: 'warehouse_id'
});

module.exports = {
    Warehouse,
    Category,
    Product
};