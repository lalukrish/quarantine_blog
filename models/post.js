const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        require:true
    },
    postedBy:{
        type:ObjectId,
        ref:"user"
    }
    
})

mongoose.model("Post",postSchema)