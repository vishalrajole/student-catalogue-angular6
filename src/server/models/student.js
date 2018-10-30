const mongoose = require("mongoose");
const validator = require("validator");

const StudentSchema = new mongoose.Schema({
    rollno: {
        required: true,
        type: String,
        unique: true

    },
    name: {
        required: true,
        type: String
    },
    degree: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    }
});


var Student = mongoose.model("Student", StudentSchema);

module.exports = {
    Student
};
