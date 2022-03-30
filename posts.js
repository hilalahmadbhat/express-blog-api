var postRoutes = require("express").Router()
const { response } = require("express");
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/blog');
}

const postSchema = new mongoose.Schema({
    title: String,
    description: String
});

const Post = mongoose.model('Post', postSchema);

postRoutes.get("/",(req,res) => {
    var {page} = req.query
    // res.json(page)
    if(page=="" || page==null){
        page = 1
    }
    Post.find({},(err,data)=>{
        res.json(data)
    }).skip((page-1)*7).limit(7)
})

postRoutes.get("/:postid",(req,res)=>{
    const {postid} = req.params
    Post.findById(postid,(err,data)=>{
        res.json(data)
    })
    
})

// postRoutes.post("/",(req,res)=>{
//     res.json("create new post")
// })

// postRoutes.put("/:postid",(req,res)=>{
//     //res.json("update post")
//     const {id} = req.params
//     Post.findByIdAndUpdate()
// })

// postRoutes.delete("/:postid",(req,res)=>{
//     res.json("delete post")
// })

module.exports = postRoutes