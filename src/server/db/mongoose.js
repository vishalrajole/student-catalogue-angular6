var mongoose = require("mongoose");

const db = 'mongodb://localhost:27017/Students'; // process.env.MONGODB_URI OR mongodb://<dbuser>:<dbpassword>@ds145563.mlab.com:45563/students;

mongoose.Promise = global.Promise;
mongoose
    .connect(db, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Connected to Database");
    })
    .catch(err => {
        console.log("Not Connected to Database ERROR! ", err);
    });

module.exports = { mongoose };
