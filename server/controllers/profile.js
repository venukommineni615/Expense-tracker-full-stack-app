
const User = require('../models/profile')

const {generateJWT, verifyJWT}=require('../middlewares/auth')
exports.getUser = (req,res)=>{
    const username = req.body.username
    User.findOne({where:{
        username:username
    }})
    .then(user=>{
        res.json(user)
    })
    .catch(err=>{
        res.status(401).json(err)
    })
}

exports.addUser = (req,res)=>{

    const {email,photoUrl,password} = req.body
    const photoURL=photoUrl
    User.findOne({where:{email:email}})
    .then(existingUser=>{
            if(existingUser){
                return res.status(403).json({message:'User already exists'})
            }else{
                User.create({email:email,photoURL:photoURL,password:password})
                .then(()=>{
                    const idToken = generateJWT(email)
                    res.status(200).json({message:"created a user successfully", idToken:idToken})
                })
            }
    })
}

exports.editUser = (req,res)=>{

    const {email,photoUrl} = req.body
    const photoURL=photoUrl
    User.findOne({where:{email:email}})
    .then(user=>{
        user.email=email
        user.photoURL=photoURL,
        user.save().then(()=>{
            res.status(200).json({message:"updated user successfully"})
        })
    })
    .catch((err)=>{res.status(403).json(err)})
}

exports.loginUser = (req,res)=>{
    const {email, password} = req.body
    User.findOne({where:{email:email}}).then((user)=>{
        console.log("user",user)
        if(user && user.password==password){
            const idToken = generateJWT(email)
            res.status(200).json({message:"Logged in successfully", idToken:idToken})
        }else{
            res.status(401).json({message:'Invalid email or password'})
        }
    })
     

}