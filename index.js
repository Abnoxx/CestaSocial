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
cadastroController = require('./controller/cadastroController');
homeController = require('./controller/homeController');
loginController = require('./controller/loginController');
// model
const pessoa = require('./models/pessoaModel');
const usuario = express.Router();

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
    res.redirect('/inicio'); 
});

app.get('/inicio',(req,res)=>{
    app.set('layout','./layouts/default/inicio');
    cadastroController.getCadastroUsuario(req,res);
})
app.get('/register',(req,res)=>{
    app.set('layout','./layouts/default/register');
    cadastroController.getCadastroUsuario(req,res);
})
app.post('/register', (req, res) => {
    res.redirect('/login');
});

app.get('/login',(req,res)=>{
    app.set('layout','./layouts/default/login');
})
app.post('/login', (req, res) => {
    cadastroController.cadastrar(req,res);
});

app.get('/home',(req,res)=>{
    app.set('layout','./layouts/default/home');
    
})
app.post('/home', (req, res) => {
    
});

app.get('/', (req, res) => {
    app.set('layout','./layouts/default/');
});

app.get('/deletar/:id',(req,res)=>{
    
})



