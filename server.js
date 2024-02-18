const express = require('express');
const conactDb = require('./config/dbConaction');
const dotenv = require("dotenv").config();

conactDb()
const app = express();
const port = process.env.PORT ;

const errorHandler = require("./middleware/errorHandlar");

app.use(express.json());


// view engain--------------------------------------
app.set('view engine', 'ejs');

// home page--------------------------------------
app.get('/',(req,res)=>{
    console.log('queta e home');
    res.render('index')
})

// Routes contactss -----------------------------
const contatRoute = require("./routes/contactRoutes")
const userRoute = require("./routes/userRoute")
app.use("/contact",contatRoute)
app.use("/user",userRoute)
app.use(errorHandler);



// Routes users -----------------------------



app.listen(port || 3000)