const User = require("../models/userDetails");
const express = require("express");
const _ = require('lodash')

const userInfo = async (req, res)=>{
    const user = new User(_.pick(req.body, ['forWhom', 'age', 'gender','raceOrEthnicity', 'householdIncome', 'usOrNot', 'countryOrState', 'postalCode', 'populationType', 'caringType', 'LGBTQSexualOrientation','traumaExperience', 'previousTreatment', 'mainMentalHealthProblems', 'healthInsurance', 'generalHealthCondition']))
    await user.save()
    res.send("user Saved")
}

module.exports = { userInfo }