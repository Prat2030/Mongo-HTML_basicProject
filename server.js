const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: true
}));


// Connect to MongoDB
mongoose.connect("mongodb+srv://Prat23:-KNbhjB.p4!cm2E@cluster0.q9uuo.mongodb.net/Blog", {
    useNewUrlParser: true
}, {
    useUnifiedTopology: true
}, );

//create a data schema
const titles = {
    name: String,
    email: String,
    phonenumber: String,
};

const Name = mongoose.model("name", titles);
const Email = mongoose.model("email", titles);
const Phonenumber = mongoose.model("phonenumber", titles);
  
// here if its in capitol then mongoose converts 
// into smallCase and also adds s in the end like Title => titles

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

// app.post()
app.post("/", async function(req, res) {
    // let newTitle = new Title({
    //     name: req.body.name,
    //     email: req.body.email,
    //     phonenumber: req.body.phonenumber
    // });
    // newTitle.save();
    const myData1 = new Name({
        name:req.body.name,
    })
    const myData2 = new Email({
        email:req.body.email,
    })
    const myData3 = new Phonenumber({
        phonenumber:req.body.phonenumber,
    })
    
    var response1 = await myData1.save();
    var response2 = await myData2.save();
    var response3 = await myData3.save();
    console.log("response: " + response1);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log('listening on port 3000');
})