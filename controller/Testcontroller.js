const myfun = ((req, res) => {
    console.log("The function is working...")
    res.send("<h1>MyFunction</h1>")
})
module.exports = myfun