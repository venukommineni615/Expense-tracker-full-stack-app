const sequelize=require('../utils/database')
const Sequelize = require('sequelize')

const Expense=sequelize.define('expenses',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,

    },
    expense:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports = Expense