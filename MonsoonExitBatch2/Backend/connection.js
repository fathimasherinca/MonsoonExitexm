const mongoose = require("mongoose");
//Write missing code 
mongoose.connect("mongodb+srv://adhilajamalajk:adhilamongo@cluster0.gd9ihr1.mongodb.net/Final?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
