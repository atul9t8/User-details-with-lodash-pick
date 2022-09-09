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
app.use((req, res, next) => {
    //allow access from every, elminate CORS
    res.setHeader('Access-Control-Allow-Origin','*');
    res.removeHeader('x-powered-by');
    //set the allowed HTTP methods to be requested
    res.setHeader('Access-Control-Allow-Methods', req.method);
    //headers clients can use in their requests
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    //allow request to continue and be handled by routes
    next();
  });

app.use('/user', userRoute)


port = process.env.PORT || 8088

app.listen(port, () => console.log("Listening")) 