const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [3, "Username must be at least 3 characters"],
        maxlength: [20, "Username cannot exceed 20 characters"],
        unique: true,
        trim: true,
        lowercase: true
    },

    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"],
        maxlength: [50, "Name cannot exceed 50 characters"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email"
        ]
    },

    contact: {
        type: String,
        required: [true, "Contact number is required"],
        unique: true,
        match: [
            /^(\+91-?)?[6-9]\d{9}$/,
            "Contact number must be a valid Indian number"
        ]
    },

    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Age must be at least 18"],
        max: [100, "Age cannot exceed 100"]
    }
});


function validateUser(user) {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .max(20)
            .trim()
            .required()
            .messages({
                "string.empty": "Username is required",
                "string.min": "Username must be at least 3 characters",
                "string.max": "Username cannot exceed 20 characters"
            }),

        name: Joi.string()
            .min(3)
            .max(50)
            .trim()
            .required()
            .messages({
                "string.empty": "Name is required",
                "string.min": "Name must be at least 3 characters",
                "string.max": "Name cannot exceed 50 characters"
            }),

        email: Joi.string()
            .trim()
            .lowercase()
            .email() //to make sure email format m h email
            .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net)$/)
            .required()
            .messages({
                "string.empty": "Email is required",
                "string.email": "Please enter a valid email",
                "string.pattern.base": "Email must end with .com or .net"
            }),

        contact: Joi.string()
            .pattern(/^(\+91-?|\+91)?[6-9]\d{9}$/)
            .required()
            .messages({
                "string.empty": "Contact number is required",
                "string.pattern.base":
                    "Contact number must be a valid Indian number (e.g. 9876543210, +919876543210, +91-9876543210)"
            }),

        age: Joi.number()
            .min(18)
            .max(100)
            .required()
            .messages({
                "number.base": "Age must be a number",
                "number.min": "Age must be at least 18",
                "number.max": "Age cannot exceed 100"
            })
    });

    return schema.validate(user);
}
 
//"User" : model ka name
//MongoDB mai collection bane gi users k name sai
const userModel = mongoose.model("User", userSchema);
module.exports = {validateUser,userModel};