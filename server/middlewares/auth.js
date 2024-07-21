const jwt = require('jsonwebtoken')

require('dotenv').config()

const generateJWT = (user)=>{
    const payload={email :user}
   
    return jwt.sign(payload,process.env.SECRETKEY,{expiresIn:'10h'})
}

const verifyJWT=(req,res,next)=>{
    const auth=req.headers.authorization
    console.log('auth',auth)
    if (auth){
        const token = auth.split(' ')[1]
        jwt.verify(token,process.env.SECRETKEY,(err,user)=>{
           
        if(err){
            
            res.status(403).json({message:"Session expired Please login again"})
        }
        else if(user){
         req.email=user.email
      
         next()
        }else{
            res.status(403).json({message:"Please login again"})
        }
        })
        
    }else{
        res.statis(401).json({message:"Please login "})
    }

}

module.exports = {generateJWT,verifyJWT}