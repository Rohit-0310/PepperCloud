const mongoose = require("mongoose");

module.exports = () =>{
    return mongoose.connect('mongodb+srv://rohit:rohit@cluster0.fskyx.mongodb.net/PepperCloud');
}