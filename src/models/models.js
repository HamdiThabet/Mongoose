const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personSchema = Schema({
    name: String,
    age: Number,
    favouriteFoods: [String]
});

//const Person = mongoose.model('Person', personSchema);

module.exports = mongoose.model('Person', personSchema);