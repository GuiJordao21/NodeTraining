var express = require('express');
var path = require('path');
//chamada handlebarss
var hbs = require('express-handlebars');
var fortune = require('./lib/fortune.js');

var app = express();

//aqui iniciamos o handlebars para facilitar o html
app.engine('hbs', hbs({extname: 'hbs', defaultLayout:'main'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//fim da chamada do handlebars

//definimos a porta para conexao local
app.set('port', process.env.PORT || 8080);

//chamada de diretorios staticos para uso de imagens e arquivos css
app.use(express.static(__dirname + '/public'));

//aqui habilitamos o acesso as paginas de teste
//no caso dessa pagina, e a pag test=1
app.use(function(req,res,next){
        res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
        next();
});
//fim da abertura de rotas teste



/*

DIRECIONAMENTOS

*/

//direcionamento para a pag principal
app.get('/',function(req,res){
        res.render('home');
});//fim

//direcionamento para a pagina about
app.get('/about', function(req,res){
        //aqui usamos uma func vinda de um arquivo na pasta lib, que sera exibida na page about.hbs, para definir qual a msg de sorte do dia sera exibida.
        res.render('about', {fortune:fortune.getFortune(), pageTestScript: '/qa/tests-about.js'});
});//fim

app.get('/about/contact', function(req,res){
        res.type('text/plain');
        res.send('11 71727343');
});

app.get('/about/directions', function(req,res){
        res.type('text/plain');
        res.send('rua pangare');
});

//custom 404 page
app.use(function(req,res,next){
        res.status(404);
        res.render('404');
});//fim do direcionamento para o erro 404

//custom 500 page
app.use(function(err,req,res,next){
        console.error(err.stack);
        res.status(500);
        res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:'+app.get('port')+'; press Ctrl-C to terminate.')
});
