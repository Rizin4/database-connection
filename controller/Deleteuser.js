const User = require("../models/UserSchema")

const userdelete = async (req, res) => {

    const _id = req.params.id

    const users = await User.findByIdAndRemove(_id)
    if (users) {

        res.json("User deleted")
    }
}
module.exports = userdelete