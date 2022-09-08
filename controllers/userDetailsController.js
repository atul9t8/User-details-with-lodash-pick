const User = require("../models/userDetails");
const express = require("express");
const _ = require('lodash')
const cors = require('cors')
app.use(
    cors({
        origin: "http://localhost:3001",
        credentials: true
    })
)

const userInfo = async (req, res)=>{
    const user = new User(_.pick(req.body, ['forWhom', 'age', 'gender','raceOrEthnicity', 'householdIncome', 'usOrNot', 'countryOrState', 'postalCode', 'populationType', 'caringType', 'LGBTQSexualOrientation','traumaExperience', 'previousTreatment', 'mainMentalHealthProblems', 'healthInsurance', 'generalHealthCondition']))
    // try{
        // const user = new User({
        //     forWhom : req.body.forWhom,
        // })
        await user.save()
        res.send("user Saved")
    // }
    // catch(err){
        // res.send(err)
    // }
}

module.exports = { userInfo }