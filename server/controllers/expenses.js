const Expense=require('../models/expenses')

exports.addExpense=(req,res,next)=>{
    const {expense,description,category} = req.body.item
    Expense.create({expense,description,category})
    .then((response)=>{
        console.log(response)
        res.json(response)
    })
}

exports.editExpense=(req,res,next)=>{
    const {expense,description,category} = req.body.item
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

}