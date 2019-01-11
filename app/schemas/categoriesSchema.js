const Sequelize = require('sequelize');
const {db} = require('../config/db');

const Categories = db.define('categories', {
    categoriesName: {
        type: Sequelize.STRING
    },
    detail: {
        type: Sequelize.STRING
    },
    isChecked:{
        type: Sequelize.BOOLEAN,
        defaultValue:false
    }
});


Categories.sync({force: false}).then((res) => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});


module.exports = Categories;
