var postRoutes = require("express").Router()


postRoutes.get("/",(req,res)=>{
    res.json("get all posts")
})

postRoutes.get("/:postid",(req,res)=>{

    res.json("get one post")
})

postRoutes.post("/",(req,res)=>{
    res.json("create new post")
})

postRoutes.put("/:postid",(req,res)=>{
    res.json("update post")
})

postRoutes.delete("/:postid",(req,res)=>{
    res.json("delete post")
})

module.exports = postRoutes