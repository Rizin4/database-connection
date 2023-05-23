const express = require("express")
// const myfun = require("../controller/Testcontroller")

const schemafunction = require("../controller/Testcontroller")
const router = express.Router()


// router.route('/').get(myfun)
router.route('/user').post(schemafunction)

module.exports = router