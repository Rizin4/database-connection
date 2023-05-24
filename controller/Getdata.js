const User = require("../models/UserSchema")

const getItems = async (req, res) => {
    const _id = req.params.id;

    const getUsers = await User.findById({ _id })
    console.log(getUsers)
    res.send(getUsers)

}

module.exports = getItems