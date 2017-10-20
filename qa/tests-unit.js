var fortune = require('../lib/fortune.js');
var expect = require('chai');

suite ('Fortune cookie tests', function(){
      test('getFortune() should return a fortune', function(){
          expect(tipeof fortune.getFortune() === 'string');
      });
});
