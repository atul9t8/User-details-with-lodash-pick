const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const userRoute = require("./routers/userDetailsRouter")

require('dotenv').config()
mongoose.connect(process.env.DB)

app.use(
    cors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204

    })
)

app.use('/user', userRoute)


port = process.env.PORT || 8088

app.listen(port, () => console.log("Listening")) 