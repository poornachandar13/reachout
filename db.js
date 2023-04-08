const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://poornademo:poorna1234@cluster0.o8w1aua.mongodb.net/test' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose