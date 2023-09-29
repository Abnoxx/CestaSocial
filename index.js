require('dotenv').config()
//variáveis
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require('express-session');
const app = express();
const path = require('path');
const port = process.env.DB_PORT;
const bodyParser = require('body-parser');

//controller
const homeController = require('./controller/homeController');
const doarController = require('./controller/doarController');
// model
const pessoa = require('./models/pessoaModel');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', './layouts/default/index');
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(session({ 
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

//listen
app.listen(port,()=>{
    console.log("Server running on: https://localhost:" + port);
});

// gets & posts
app.get('/', (req, res) => {
    res.redirect('/home'); 
});

app.get('/home',(req,res)=>{
    homeController.getHome(req,res);
})

app.get('/doar', (req, res) => {
    doarController.getDoar(req,res);
});



