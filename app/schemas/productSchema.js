const Sequelize = require('sequelize');
const {db} = require('../config/db');

const Products = db.define('products', {
    productName: {
        type: Sequelize.STRING
    },
    categoriesName: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    },
    detail: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    isChecked:{
        type: Sequelize.BOOLEAN,
        defaultValue:false
    }
});


Products.sync({force: false}).then((res) => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});


module.exports = Products;
