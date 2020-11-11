const express = require('express');
const router = express.Router();
const User = require('../models/user');

var db = "";
var MongoClient = require("mongodb").connect(
	"mongodb+srv://favouronix:favouronix@favouronix.bysbl.gcp.mongodb.net/Favouronix?retryWrites=true&w=majority",{useUnifiedTopology:  true},
    function (err, client) {
        if (err) throw err;
        console.log("Connected Successfully");
        db = client.db("Favouronix");
        console.log("Connected to Datavase !");
    }
);
router.get("/viewRequests", function (req, res) {
    db.collection("Requests").find().sort( { _id: -1 } ).toArray(function (err, items) {
        if (err) throw err;
        console.log(items);
        res.json(items);
    });
});

router.post('/addRequests', async(req,res) => {
    let reqData=req.body;
    db.collection("Requests").insertOne(reqData,function(err,res){
        if(err) console.log(err)
        console.log("Inserted Successfully");
    })
  
})
router.post('/signup', async(req,res) => {
    let reqData=req.body;
    db.collection("Users").findOne({email:reqData.email,mobile:reqData.mobile},(err,user)=>{
        if(err){
            console.log(err)
        }
        else{
            if(user.email || user.mobile){
                res.status(401).send("Already Exists")
            }
            else{
                db.collection("Users").insertOne(reqData,function(err,res){
                    if(err) console.log(err)
                    console.log("Inserted Successfully");
                })
            }
        }
    })
})

router.post('/login',async(req,res)=>{
    let reqData=req.body;
    let pass=reqData.password;
    db.collection("Users").findOne({email:reqData.email,password:reqData.password},(err,user)=>{
        if(err){
            console.log(err)
        }
        else{
                if(!user){
                    console.log("invalidddd")
                    res.status(401).send(false)
                }
                else{
                    console.log("Email -- "+user.email)
                    //console.log("Password -- "+user.password)
                    res.send(true)
                }
        }
    })
})

module.exports = router;

