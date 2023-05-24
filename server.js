const express = require("express")

const router = require("./router/Testrouter")
const connectDB = require("./database/db")

connectDB()


const app = express()

app.use(express.json())

app.use("/", router)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)    
});
