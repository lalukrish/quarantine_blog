const mongoose = require("mongoose");
const Post = mongoose.model("Post")

exports.getPost('/allpost',(req,res)=>{
    Post.find().populate("postedBy","_id name").then(posts=>{
        res.json({post})
    }).catch(err=>{
        console.log(err)
    })
})

exports.postCreatePost('/createpost',(req,res)=>{
    const {title,body,post}=req.body
    if(!title || !body || !photo){
        return res.status(422).json({error:"please fill all the fields"})
    }
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
        console.log(result)
    }).catch(err=>{
        console.log(err)})

})
