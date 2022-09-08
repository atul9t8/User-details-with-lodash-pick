const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const userRoute = require("./routers/userDetailsRouter")

require('dotenv').config()
mongoose.connect(process.env.DB)

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
)

app.use('/user', userRoute)


port = process.env.PORT || 8088

app.listen(port, () => console.log("Listening")) 