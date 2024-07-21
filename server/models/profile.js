const sequelize = require('../utils/database')

const Sequelize =  require('sequelize')

const User = sequelize.define('users',{
    
    username:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    photoURL:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        primaryKey:true,
        unique:true,
    }
})

module.exports = User