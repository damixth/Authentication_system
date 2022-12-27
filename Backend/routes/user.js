const express = require('express')

const router = express.Router()

const { loginUser, registerUser } = require('../controllers/userController')

// register route
router.post("/register", registerUser)

//login route
router.post("/login", loginUser)

// router.post("/profile",async(req,res)=>{
//     const [token] = req.body

//     try {
//         const user=jwt.verify(token,JWT_SECRET)
//         const userEmail = user.email
//         User.findOne({ email: userEmail }).then((data) => {
//             res.send({  status:"ok", data:data })
//         })
//         .catch((error) => {
//             res.send({ status:"error", data:error })
//         })

//     } catch (error) {
//         res.send({status:"Something went wrong!"})
//     }
// });

module.exports = router
