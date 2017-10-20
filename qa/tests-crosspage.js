var Browser = require('zombie'),
            assert = require('chai');

var browser

suite('Cross-page Tests', function(){
      setup(function(){
        browser = new Browser();
      });

      test('requesting a group rate quote from the hood river tour page'+'should populate the referrer field', function(done){
              var = referrer = ='http://localhost:8080/tours/hood-river';
              browser.visit(referrer, function(){
                      browser.clickLink('.requestGroupRate', function(){
                              assert(browser.field('referrer').value === referrer);
                              done();
                      });
              });
      });

      test('requesting a group rate from the oregon coast tour page should populate  the referrer field', function(done){
            var referrer = 'http://localhost:8080/tours/oregon-coast';
            browser.visit(referrer, function(){
                  browser.clickLink('.requestGroupRate', function(){
                    assert(browser.field('referrer').value === referrer);

                    done();
                  });
            });
      });

      test('visiting the "request group rate" page directly should result in an empty referrer field', function(){
            browser.visit('http://localhost:8080/tours/request-group-rate', funciton(){
                  assert(browser.field('referrer').value === '');
                  done();
            });
      });

});
