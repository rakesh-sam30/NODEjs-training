const mongoose = require('mongoose');
 
async function connectToDb(){
    await mongoose.connect("mongodb+srv://080bct070:w4goSoDJQNvzxuNA@cluster0.g4dp2g7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected");
}
module.exports=connectToDb;
