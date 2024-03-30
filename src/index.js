// building a server

const express=require("express");
const app=express();


// middleware 
app.use(express.static("public"))

app.listen(5000);