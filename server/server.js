const express = require("express");
require('dotenv').config(); /////
const cors =require("cors");
const app = express();
        
//const router = require("./router/auth-router");  // assuming the correct path to auth-router file
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router"); // service route

const connectDb =require("./utils/db"); //db get

const errorMiddleware = require("./middleware/error-middleware");
const services = require("./controller/service-controller"); // service route

const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoute);  // using the correct path for the router
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute); // service route

app.use(errorMiddleware); // to handle error

const port=3000;
connectDb().then(() => {
    app.listen(port , ()=>{
        console.log("server running on: ${http://localhost:3000/api/auth/}");
    });
});

//  http://localhost:3000/api/auth/

// using cors takel CORS policy error



// ---------------------TERMINAL 1------------------------------------
//  To Run : > cd client
//           > npm run dev

// OPEN mongodbCompass: connect db : mongodbCompass

// THEN TO RUN SERVER AND CONNECT DB 
// --------------------- TERMINAL 2 ------------------------------------
// > CD MERN > node server.js
// DB connected