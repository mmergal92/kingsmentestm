const mongoose = require('mongoose');
// SCHEMA
const userSchema = new mongoose.Schema({
    username: {type: String,
        unique: true},
    password: {
        type: String,
    },
    messages: {
        type: Array
    },
})

const User = mongoose.model('User', userSchema);
module.exports = User;  