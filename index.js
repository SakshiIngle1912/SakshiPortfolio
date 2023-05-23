const express = require("express")
const connectDB = require("./config/db")
const mongoose = require("mongoose")
const cors = require("cors")
// const cookieParser=require("cookie-parser")
require("dotenv").config({ path: "./.env" })
connectDB()
const app = express()
// app.use(cookieParser())
app.use(express.json())
app.use(express.static("public"))
app.use(cors({
    origin: "http://localhost:5173",
    // credentials: true
}))

app.use("/", require("./routes"))


mongoose.connection.once("open", e => {
    console.log("MONGO CONNECTED");


    app.listen(process.env.PORT || 5000, err => {
        if (err) {
            return console.log("unable to start", err);
        }
        console.log(`http://localhost:${process.env.PORT || 5000}`);
    })
})
mongoose.connection.on("error", err => console.log(`MONGO ERROR ${err}`))