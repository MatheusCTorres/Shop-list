require("dotenv").config()

const shopRoutes = require("./routes/shops")

const cors = require("cors");
const express = require("express")
const mongoose = require("mongoose")

const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes 
app.use("/api/shops", shopRoutes)

// connect to db  
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT || 3001, () => {
            console.log("connected to db");
        })
    })
    .catch((error) => {
        console.log(error)
    })
