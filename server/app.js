const express = require('express');

const cors = require('cors');

const app=express()

const sequelize=require('./utils/database')

const expenseRoutes = require('./routes/expenses')

const profileRoutes = require('./routes/profile')

app.use(cors())

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use('/expense', expenseRoutes)

app.use('/profile', profileRoutes)

sequelize.sync()

app.listen(5000)