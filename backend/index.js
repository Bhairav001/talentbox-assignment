const express= require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/User.route");
const { authenticate } = require("./middlewares/authenticate.middleware");
const cors = require("cors")

const app = express()


require("dotenv").config()

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Talent Box Assignment")
})

app.use("/users", userRouter)
app.use(authenticate)

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error.message)
    }
    console.log(`Server is running on port ${process.env.PORT}`)
})