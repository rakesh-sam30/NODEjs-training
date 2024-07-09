const mongoose = require('mongoose');
 
async function connectToDb(){
    await mongoose.connect("mongodb://localhost:27017/new");
    console.log("Connected");
}
module.exports=connectToDb;
