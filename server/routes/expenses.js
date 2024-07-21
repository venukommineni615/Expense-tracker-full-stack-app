const express = require('express');

const expenseRoute = require('../controllers/expenses')

const router=express.Router()

const {generateJWT, verifyJWT} = require('../middlewares/auth')

router.get('/',verifyJWT, expenseRoute.getExpenses)

router.delete('/delete/:id',verifyJWT, expenseRoute.deleteExpense)

router.post('/add',verifyJWT,expenseRoute.addExpense)

router.put('/update/:id',verifyJWT,expenseRoute.editExpense)

module.exports=router