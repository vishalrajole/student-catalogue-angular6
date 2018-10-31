const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')

const _ = require("lodash");
const { mongoose } = require("./db/mongoose");
const { Student } = require("./models/student");

const app = express();
app.use(bodyParser.json());
app.use(cors()); //TODO NOT a good way to open for all. Should have whitelisted origins

app.post("/login", (req, res) => {
    var body = _.pick(req.body, ["username", "password"]);
    if (body.username === 'test' && body.password === 'password') {
        res.status(200).send();
    } else {
        res.status(404).send("Not found");
    }

})
//limit( 5 ), skip( 5 )
app.get("/students", (req, res) => {
    const skipCount = req.query.skipCount;
    if (skipCount) {
        Student.find({
        }, { _id: 0 }).skip(parseInt(skipCount)).limit(5).then(students => {
            res.send({ students });
        }, error => {
            res.status(400).send(error);
        }
        );
    } else {
        Student.find({
        }, { _id: 0 }).limit(5).then(students => {
            res.send({ students });
        }, error => {
            res.status(400).send(error);
        }
        );
    }

});

app.get("/students/:rollno", (req, res) => {
    var rollno = req.params.rollno;
    Student.findOne({
        rollno: rollno
    }, { _id: 0 }).then(student => {
        if (!student) {
            res.status(404).send();
        }
        res.send({ student });
    }).catch(error => {
        res.status(404).send("Not found");
    });
});

app.get("/students/search/:term", (req, res) => {
    var term = req.params.term;
    // if serach term is not provided, return all data
    Student.find({
        "name": { "$regex": term, "$options": "i" }
    }, { _id: 0 }).then(students => {
        if (!students) {
            res.status(404).send();
        }
        res.send({ students });
    }).catch(error => {
        res.status(404).send("Not found");
    });
});
app.post("/students", (req, res) => {
    var student = new Student({
        rollno: req.body.rollno,
        name: req.body.name,
        degree: req.body.degree,
        city: req.body.city
    });
    student.save().then(doc => {
        res.send(doc);
    }, error => {
        res.status(400).send(error);
    }
    );
});

app.patch("/students/:rollno", (req, res) => {
    var rollno = req.params.rollno;
    var body = _.pick(req.body, ["name", "degree", "city"]);

    Student.findOneAndUpdate(
        {
            rollno: rollno
        },
        { $set: body },
        { new: true }
    ).then(student => {
        if (!student) {
            return res.status(404).send("Not found");
        }
        res.send({ student });
    }, error => {
        res.status(400).send(error);
    }
    );
});

app.listen(8000, () => {
    console.log('Server started!');
});


