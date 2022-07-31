const Warehouse = require('./Warehouse');
const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');

User.hasMany(Product, {
	foreignKey : 'user_id'
});

Product.belongsTo(User, {
	foreignKey : 'user_id'
});

//Comment.belongsTo(User, {
//	foreignKey : 'user_id'
//});

//Comment.belongsTo(Product, {
//	foreignKey : 'product_id'
//});

//User.hasMany(Comment, {
//	foreignKey : 'user_id'
//});

//Product.hasMany(Comment, {
//	foreignKey : 'comment_id'
//});

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
    Product,
    User
};
