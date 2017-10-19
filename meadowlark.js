var express = require('express');
var path = require('path');
//chamada handlebarss
var hbs=require('express-handlebars');

var app=express();

var fortunes=[
        "sorte do dia 1",
        "sorte do dia 2",
        "sorte do dia 3",
        "sorte do dia 4",
        "sorte do dia 5"
];

//aqui iniciamos o handlebars para facilitar o html
app.engine('hbs', hbs({extname: 'hbs', defaultLayout:'main'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));;

//direcionamento para a pag principal
app.get('/',function(req,res){
        res.render('home');
});//fim

//direcionamento para a pagina about
app.get('/about', function(req,res){
        //aqui usamos uma variavel que sera exibida na page about.hbs
        //para definir qual a msg de sorte do dia sera exibida.
        var randomFortune =
                fortunes[Math.floor(Math.random()*fortunes.length)];
        res.render('about', {fortunes: randomFortune});
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
