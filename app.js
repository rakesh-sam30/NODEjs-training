const express = require("express");

const connectToDb = require("./database/databaseConnection");
const Blog = require("./model/blogmodel");
const app = express();
connectToDb()
// code that is used everyday in node
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// till here
app.set("view engine", "ejs");
app.get("/createblog", (req, res) => {
    res.render("index");
});
app.post("/createblog", async (req,res)=>{
    const {title,subtitle,description}=req.body;

    const blog=await Blog.create({
        title,
        subtitle,
        description
    });
    console.log(req.body);
    res.send(blog)
});
app.listen(3000,()=>{
    console.log("connection sucessfully");
});