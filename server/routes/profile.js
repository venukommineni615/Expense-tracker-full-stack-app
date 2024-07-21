const app = require('express');

const profileRoute = require('../controllers/profile')

const router=app.Router()

const {generateJWT, verifyJWT} = require('../middlewares/auth')

router.get('/',verifyJWT,profileRoute.getUser)

router.post('/signup',profileRoute.addUser)

router.post('/signin',profileRoute.loginUser)

router.put('/update/:email',verifyJWT,profileRoute.editUser)


module.exports = router