require('sequelize').config()

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.USER, process.env.PASSWORD,process.env.DATABASE,{host:process.env.HOST, dialect:mysql})


module.exports = sequelize