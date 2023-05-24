const User = require("../models/UserSchema")

const userupdate = async (req, res) => {

    const { Name, Email, Password } = req.body

    const id = req.params.id

    const users = await User.findByIdAndUpdate(id, { Name, Email, Password })

    res.json({
        Name: users.Name,
        Email: users.Email,
        Password: users.Password
    })
}
module.exports = userupdate