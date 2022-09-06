const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    forWhom: {
        type: String,
        required: false
    },
    age:{
        type : String,
        required: false
    },
    gender:{
        type: String,
        required: false
    },
    raceOrEthnicity:{
        type: String,
        required: false
    },
    householdIncome:{
        type: String,
        required: false
    },
    usOrNot:{
        type: String,
        required: false
    },
    countryOrState:{
        type: String,
        required: false
    },    
    postalCode :{
        type: String,
        required:false
    },
    populationType:{
        type: [String],
        required:false
    },
    caringType:{
        type: String,
        required:false
    },
    LGBTQSexualOrientation:{
        type: String,
        required:false
    },
    traumaExperience:{
        type: [],
        required:false
    },
    previousTreatment:{
        type: String,
        required:false
    },
    mainMentalHealthProblems:{
        type: [String],
        required: false
    },
    healthInsurance:{
        type: String,
        require: false
    },
    generalHealthCondition:{
        type: [String],
        require: false 
    },
})


module.exports =  mongoose.model("User", userSchema)