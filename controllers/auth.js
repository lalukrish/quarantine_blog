const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require('bcryptjs')
const {JWT_SECRET} = require ("../keys")

exports.postSignup = ("/signup",(req,res,next)=>{
    const {name,email,password} = req.body
    if(!email || ! email || ! password) {
        return res.status(422).json({ error:" please fill all the fields "})    
    }
    User.findOne({ email : email }).then(savedUser =>{
        if(savedUser){
            return res.status(422).json({ error :"user already exist with this email"})
        }
        bcrypt.hast(password,12).then(hashedPassword=>{
            const user = new User({
                email,
                password:hashedPassword,
                name
            });
            user.save().then(user=>{
                res.json({message:"saved succesfully"})
                console.log(user)
            })
        }).catch(err=>{
            console.log(err)
        })
    }).catch(err=>{
        console.log(err)
    })
})