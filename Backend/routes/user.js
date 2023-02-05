const express = require('express')

const router = express.Router()

const { loginUser, registerUser, fetchUserDetails } = require('../controllers/userController')
const requireAuth = require('../middleware/requireAuth')

// register route
router.post("/register", registerUser)

//login route
router.post("/login", loginUser)

// require Auth for all routes
router.use(requireAuth)

// profile route
router.get("/profile", fetchUserDetails);

module.exports = router
