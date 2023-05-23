// const myfun = ((req, res) => {
//     console.log("The function is working...")
//     res.send("<h1>MyFunction</h1>")
// })
// module.exports = myfun
const user = require("../models/UserSchema")

const schemafunction = async (req, res) => {
    const { Name, Email, Password } = req.body
    const userDetails = await user.create({
        Name,
        Email,
        Password
    })
    console.log("user data")
    res.json(userDetails)
}
module.exports = schemafunction