const express = require("express");

const connectToDb = require("./database/databaseConnection");
const Blog = require("./model/blogmodel");
const app = express();
const {multer,storage}= require('./middleware/multerConfig');
const upload= multer({storage: storage})
connectToDb()
// code that is used everyday in node
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// till here
app.set("view engine", "ejs");
app.get("/createblog", async (req, res) => {
    const blogs= await Blog.find()
    res.render("homepage",{blogs});
});
app.post("/createblog",upload.single('image') ,async (req,res)=>{
    const fileName=req.file.filename;
    const {title,subtitle,description}=req.body;
    console.log(title,subtitle,description);

    const blog=await Blog.create({
        title,
        subtitle,
        description,
        image:fileName
    });
    console.log(req.body);
    res.send("Blog Sucessfully posted")
});

    app.use(express.static("./views"))
app.listen(3000,()=>{
    console.log("connection sucessfully");
});