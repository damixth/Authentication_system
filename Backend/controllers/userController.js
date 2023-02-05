const User = require('../models/userDetails')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '3d' })
}

const loginUser = async (req, res) => {
    const {email , password} = req.body

    try {
        const user = await User.login(email, password)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({ email , token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// register a user
const registerUser = async (req, res) => {
    const {fullname, email , password} = req.body

    try {
        const user = await User.signup(email, password, fullname)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({ email , token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const fetchUserDetails = async (req, res) => {
    const user_id = req.user._id;

    const userInfo = await User.find({ user_id }).sort({ createdAt: -1 })

    res.status(200).json(userInfo)
} 

module.exports = {
    loginUser,
    registerUser,
    fetchUserDetails
}