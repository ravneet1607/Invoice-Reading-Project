const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

//Environment Variable
    dotenv.config();

// Db connect 
    mongoose.connect(process.env.DB_Connect,{
        useUnifiedTopology : true, useNewUrlParser :true },() =>
        console.log("connected to DB...")
    );

//Import Routes
    const newInvoice =require("./routes/newInvoice");
    const newEmail = require("./routes/newEmail");

//Middlewares
    app.use(express.json());

    app.use(function (req, res, next) {
  
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
    
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
      
      // Pass to next layer of middleware
      next();
    });

//Routes Middlewares
      app.use("/api/saveinvoice", newInvoice);
      app.use("/api/saveemail", newEmail);

//Port Listening
app.listen(4000, () => console.log("Server is Up and running at port 4000!!"));
