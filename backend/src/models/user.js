// Define user model

const mongoose = require('mongoose');
const validator = require('validator') // to validate email
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true, //to make validation consistent
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        validate(value) {
            if(value.toLowerCase().includes("password")) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    userType: {
        type: String,
        enum: ['artist', 'venue'],
        required: true
    }
    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]
});

// userSchema.methods.generateAuthToken = async function () {
//     const user = this;
//     const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
//     user.tokens = user.tokens.concat({ token });
//     await user.save();
//     return token;
// }

const User = mongoose.model('User', userSchema);

module.exports = User;