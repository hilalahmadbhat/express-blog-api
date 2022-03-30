const express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
const port = 3000


var posts = require("./posts")
app.use("/posts",[test1,test2],posts)

function test1(req,res,next){
    console.log("middleware test1")
    next()
}

function test2(req,res,next){
    console.log('middleware test2')
    next()
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})