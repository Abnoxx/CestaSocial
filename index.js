require('dotenv').config()

//variáveis
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require('express-session');
const app = express();
const path = require('path');
const port = process.env.PORT;
const bodyParser = require('body-parser');

//controller
const homeController = require('./controller/homeController');
const cadastroController = require('./controller/cadastroController');
const loginController = require('./controller/loginController');
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

app.listen(port,()=>{
    console.log("Server running on: https://localhost:" + port);
});

//registrar
app.get('/', (req, res) => {
    res.redirect('/usuario/register'); 
});

app.get('/usuario/register', (req, res) => {
    cadastroController.getCadastro(req,res,app);
});
app.post('/usuario/register', (req, res) => {
    cadastroController.newCadastro(req,res);
});

//login
app.get('/usuario/login', (req, res) => {
    loginController.logar(req,res,app);
});

app.post('/usuario/login', (req, res) => {
 
    res.redirect('/usuario/login');
});

//home
app.get('/home', (req, res) => {
    homeController.getHome(req,res);
});