const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: [true, "prease require the name"],
    },
    email: {
        type: String,
        required: [true, "prease require the emil"],
    },
    phone: {
        type: String,
        required: [true, "prease require the phone number"],
    }
},
{ timestamps: true })

    module.exports = mongoose.model("Contact" , contactSchema)