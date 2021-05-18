const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String,
}, {timestamps: true});

module.exports = mongoose.model('user', userschema);

// {
//     date: '',
//     dish: '',
//     chef: '',
//     ingredientsArray: [],
//     image: '',
//     descripton: '',
// }