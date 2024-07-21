const Expense=require('../models/expenses')

exports.addExpense=(req,res,next)=>{
    const {expense,description,category} = req.body
    console.log("body in expense: " + req.body)
    const email = req.email
    Expense.create({email,expense,description,category})
    .then((response)=>{
        console.log(response)
        res.json(response)
    })
}

exports.getExpenses = (req,res)=>{
    Expense.findAll({where: {email: req.email}})
    .then((expenses)=>{
        if(expenses.length > 0){
            console.log("expenses",expenses)
            res.json(expenses)

        }else{
            res.status(200).json({message: 'Expense not found'})
        }
    })
}

exports.editExpense=(req,res,next)=>{
    const {expense,description,category} = req.body
    console.log("body",req.body)
    const id=req.params.id
    
    Expense.findOne({where:{id:id}})
    .then((result)=>{
        console.log('result',result)
        result.expense=expense
        result.description=description
        result.category=category
        result.save().then((response)=>{
            console.log('response',response)
            res.json(response)

        })
    })
}

exports.deleteExpense=(req,res,next)=>{
    const id = req.params.id
    
    Expense.destroy({where:{id:id}})
        
        .then(()=>{
            res.status(200).json({message:"Deleted the expense successfully"})
        })
        .catch((err)=>{
           
            res.status(500).json({message:"Error deleting the expense"})
        })
    }
