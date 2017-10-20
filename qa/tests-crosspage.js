var Browser = require('zombie'),
            assert = require('chai');

var browser

suite('Cross-page Tests', function(){
      setup(function(){
        //criando uma instancia do objeto browser para cada teste
        browser = new Browser();
      });

      test('requesting a group rate quote from the hood river tour page'+'should populate the referrer field', function(done){
              var referrer = 'http://localhost:8080/tours/hood-river';
              //esse metodo carrega a pagina e quando termina, uma funcao de callback e invocada, dai o browser
              browser.visit(referrer, function(){
                      //esse metodo procura um link com...
                      browser.clickLink(/*... essa classe*/'.requestGroupRate', function(){

                          //aqui vemos se o endereco em q o usuario esta bate co o da pagina solicitada

                              assert(browser.field('referrer').value/*Esse metodo retorna um objeto do DOM, por isso tem uma propriedade valor*/ === referrer);
                              done();
                      });
              });
      });

      test('requesting a group rate from the oregon coast tour page should populate  the referrer field', function(done){
            var referrer = 'http://localhost:8080/tours/oregon-coast';
            //esse metodo carrega a pagina e quando termina, uma funcao de callback e invocada, dai o browser
            browser.visit(referrer, function(){
                  //esse metodo procura um link com...
                  browser.clickLink(/*... essa classe*/'.requestGroupRate', function(){

                    //aqui vemos se o endereco em q o usuario esta bate co o da pagina solicitada

                    assert(browser.field('referrer').value/*Esse metodo retorna um objeto do DOM, por isso tem uma propriedade valor*/ === referrer);

                    done();
                  });
            });
      });

      test('visiting the "request group rate" page directly should result in an empty referrer field', function(){
        //esse metodo carrega a pagina e quando termina, uma funcao de callback e invocada, dai o browser
            browser.visit('http://localhost:8080/tours/request-group-rate', funciton(){
                  assert(browser.field('referrer').value === '');
                  done();
            });
      });

});
