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
const Home = require('./controller/Home');
const Register = require('./controller/Register');
const Auth = require('./controller/Auth');
const Solicitar = require('./controller/Solicitar');
const Admin = require('./controller/Admin');


const solicitacaos = require('./models/Solicitar');

//configurações
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

//registrar
app.get('/', (req, res) => {
    res.redirect('/usuario/register'); 
});

app.get('/usuario/register', (req, res) => {
    Register.getCadastro(req,res,app);
});
app.post('/usuario/register', (req, res) => {
    Register.cadastrar(req,res);
});

app.get('/usuario/login', (req, res) => {
    Auth.getLogin(req,res,app);
});

app.post('/usuario/login', (req, res) => {
    Auth.logar(req,res);
});

app.get('/home', (req, res) => {
    Home.getHome(req,res, app);
});

app.get('/usuario/solicitar', (req, res) => {
    Solicitar.getSolicitar(req,res,app);
});
app.post('/usuario/solicitar', (req, res) => {
     Solicitar.solicitar(req,res);
});

app.post('/solicitacoes/listagem', function (req,res){
    solicitacaos.findAll().then(function(solicitacoes){
        app.set('layout', './layouts/default/listagem');
        res.render('layouts/default/listagem', {solicitacoes:solicitacoes});
    });
});

app.get('/admin/login', (req, res) => {
    Admin.getAdminLogin(req,res,app);
});
app.post('/admin/login', (req, res) => {
    Admin.adminLogin(req,res);
});


app.listen(port,()=>{
    console.log("Server running on: https://localhost:" + port);
});