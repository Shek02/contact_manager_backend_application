const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please add the user name"]
    },
    email: {
        type: String,
        required: [true, "please add che user name"],
        unique:[true, " email address allready exsist"]
    },
    password: {
        type: String,
        required: [true, "please add the passworde"],
    },
    
},{ timestamps: true });

module.exports = mongoose.model("User", userSchema)