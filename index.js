require('dotenv').config()

//variáveis
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
const path = require('path');
const port = process.env.PORT;
const bodyParser = require('body-parser');

//middlewares
const middleware = require('./middlewares/middlewares');

//controller
const Home = require('./controller/Home');
const Register = require('./controller/Register');
const Auth = require('./controller/Auth');
const Solicitar = require('./controller/Solicitar');
const Admin = require('./controller/Admin');
const Concluir = require('./controller/Concluir');
const Listagem = require('./controller/Listagem');

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
app.get('/', middleware.VerificaRotasEspeciais, (req, res) => {
    res.redirect('/usuario/register'); 
});

app.get('/usuario/register', middleware.VerificaRotasEspeciais, (req, res) => {
    Register.getCadastro(req,res,app);
});
app.post('/usuario/register', (req, res) => {
    Register.cadastrar(req,res);
});
//login
app.get('/usuario/login', (req, res) => {
    Auth.getLogin(req,res,app);
});

app.post('/usuario/login', (req, res) => {
    Auth.logar(req,res);
});
//inicio
app.get('/home', (req, res) => {
    Home.getHome(req,res, app);
});
//solicitação
app.get('/usuario/solicitar', (req, res) => {
    Solicitar.getSolicitar(req,res,app);
});
app.post('/usuario/solicitar', (req, res) => {
     Solicitar.solicitar(req,res);
});
app.get('/usuario/solicitacao/info', (req, res) => {

});


//listagem
app.get('/admin/solicitacoes/listagem', (req, res) => {
    Listagem.getListagem(req,res,app);
});
app.post('/admin/solicitacoes/listagem', (req, res) => {
    Listagem.getListagem(req,res,app);
});

app.get('/admin/login', (req, res) => {
    Admin.getAdminLogin(req,res,app);
});
app.post('/admin/login', (req, res) => {
    Admin.adminLogin(req,res);
});
app.get('/admin/solicitacoes/infos/:id', (req, res) => {
    Listagem.getInfos(req,res,app);
});


app.get('/concluir/:id', Concluir.concluir);

app.listen(port,()=>{
    console.log("Server running on: https://localhost:" + port);
});