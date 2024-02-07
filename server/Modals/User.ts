const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    isadmin: {
        type: Number,
    },
    bordingStatus: {
        type: Number,
    },
    categories: {
        type: String,
    },
    occupation: {
        type: String,
    },
})
const User = mongoose.model('user', UserSchema);
module.exports = User;