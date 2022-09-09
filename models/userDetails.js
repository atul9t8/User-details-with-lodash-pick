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
        type: Array,
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
        type: Array,
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
        type: Array,
        required:false
    },
    previousTreatment:{
        type: String,
        required:false
    },
    mainMentalHealthProblems:{
        type: Array,
        required: false
    },
    healthInsurance:{
        type: String,
        require: false
    },
    generalHealthCondition:{
        type: Array,
        require: false 
    },
})


module.exports =  mongoose.model("User", userSchema)