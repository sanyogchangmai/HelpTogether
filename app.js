require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const Request = require("./models/request");
const Doner = require("./models/doner");
const { config } = require("dotenv");


const app = express();
app.use(express.static('public'));


// ! Connecting to DB !
const URI = process.env.DB_URL;
mongoose.connect(URI,{ useNewUrlParser: true })
.then((result) => console.log("Connected to DB"))
.catch((err) => console.log(err))

// ! Setting up ejs view engine
app.set("view engine","ejs");

app.use(express.urlencoded({ extended: true }));


// ! To show all requests, also the home route
app.get("/",function(req,res){
    Request.find().sort({ createdAt: -1 })
     .then((result) => {
         res.render("index",{Requestdata: result})
     })
     .catch((err) => {
         console.log(err);
     })
})

// ! Route to go to request page
app.get("/request",function(req,res){
    res.render("request");
})

// ! To save the request and redirect it to index and show it there !
app.post("/",function(req,res){
    const request = new Request({
        name: req.body.firstName,
        sirname: req.body.lastName,
        district: req.body.district,
        mobile: req.body.number,
        messege: req.body.messege,
        agreement: req.body.agreement,
    });
    request.save()
     .then((result) => {
         res.redirect("/");
     })
     .catch((err) => {
         console.log(err);
     });
})

// ! To view particular request !
app.get("/post/:id",function(req,res){
    const id = req.params.id;
    Request.findById(id)
     .then((result) => {
         res.render("details",{postdata: result});
     })
     .catch((err) => {
         console.log(err);
     }); 
})


// ! Route to go to register page
app.get("/register",function(req,res){
    res.render("register");
})

// ! Route to save the data and redirect to find page
app.post("/find",function(req,res){
    const doner = new Doner({
        name: req.body.firstName,
        sirname: req.body.lastName,
        district: req.body.district,
        blood: req.body.blood,
        mobile: req.body.number,
        sex: req.body.gender,
        positive: req.body.positiveDate,
        negative: req.body.negativeDate,
        agreement: req.body.agreement,
    });
    doner.save()
     .then((result) => {
         res.redirect("/find");
     })
     .catch((err) => {
         console.log(err);
     });
})

//  ! Route to find doner and show data of doners who registered
app.get("/find",function(req,res){
    Doner.find().sort({ createdAt: -1 })
     .then((result) => {
         res.render("find",{Donerdata: result})
     })
     .catch((err) => {
         console.log(err);
     })
})
// FEWERFGWRFGRWF
app.post("/find",function(req,res){
    const bloodGroup = req.body.blood;
    console.log(bloodGroup);
    
    // Doner.find({ blood: bloodGroup})
    // .then((result) => {
    //     res.render("find",{Donerdata: result})
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
})


app.get("/about",function(req,res){
    res.render("about");
})

app.get("/fallback",function(req,res){
    res.render("fallback");
})

app.listen(process.env.PORT || 5000,function(){
    console.log("Server is running at port 5000");
})