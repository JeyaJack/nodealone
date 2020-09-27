const express = require("express");
const cors= require("cors");

const port=process.env.port || 3020;
const app =express();

let allowlist = ['http://localhost:3000', 'http://example2.com']
let corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}



app.get("/api/tweethandles", cors(corsOptionsDelegate) ,(req, res)=>{
const tweetHandles =[
    {id:1, handleName:"jeyajack"},
    {id:2,handleName:"jill"},
    {id:3,handleName:"guna"}

]
    
    res.send (tweetHandles)
})

app.listen(port, console.log(`lisening at ${port}`))