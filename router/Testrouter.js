const express = require("express")
const getItems = require("../Controller/Getdata")
// const myfun = require("../controller/Testcontroller")
const schemafunction = require("../controller/Testcontroller")
const userupdate = require("../controller/Updateuser")
const userdelete = require("../controller/Deleteuser")
const generatefun = require("../controller/Tokengenerate")
const router = express.Router()

router.route('/userget/:id').get(getItems)
router.route('/userupdate/:id').get(userupdate)
router.route('/userdelete/:id').delete(userdelete)
router.route('/tokengen').post(generatefun)

// router.route('/').get(myfun)
router.route('/user').post(schemafunction)

module.exports = router