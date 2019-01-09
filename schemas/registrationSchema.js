const Sequelize = require('sequelize');
const {db} = require('./../config/database.js');

const registrationSchema =db.define('registration',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: Sequelize.VARCHAR,
    },
    email: {
        type: Sequelize.VARCHAR
    },
    phone_number: {
        type: Sequelize.NUMBER,
    },
});

registrationSchema.sync({force:false}).then((res)=>{
    console.log("registration table created");
}).catch((err)=>{
    console.log(err);
});

module.exports = registrationSchema;