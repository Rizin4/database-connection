const User = require("../models/UserSchema")
const jwt = require("jsonwebtoken")

const generatefun = async (req, res) => {

    const { Name, Email, Password } = req.body

    const userDetails = await User.create({

        Name,
        Email,
        Password
    })
    res.json({

        Id: userDetails._id,
        Name: userDetails.Name,
        Email: userDetails.Email,
        Password: userDetails.Password,
        Token: generateToken(userDetails._id)
    })
}
const generateToken = (id) => {

    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}

module.exports = generatefun

