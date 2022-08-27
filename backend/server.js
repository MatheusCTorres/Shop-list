require("dotenv").config()

const shopRoutes = require("./routes/shops")

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
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
        app.listen(process.env.PORT, () => {
            console.log("connect to db && connecting to port " + process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error.message)
    })