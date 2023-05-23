const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    mobile: {
        type: String,
        required: [true, "mobile number is required"]
    },
    companyName: {
        type: String,
        // required: [true, "Company name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    comment: {
        type: String,
        required: [true, "comment is required"]
    }
}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)