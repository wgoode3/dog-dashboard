console.log("inside of dog.js");

const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is actually required!"],
        minlength: [2, "Name must be 2 characters or longer"]
    },
    breed: String,
    color: String,
    age: Number
}, {timestamps:true});

const Dog = mongoose.model('Dog', DogSchema);