var chai = require('chai');

var should = chai.should();
var expect = chai.expect;

var generate = require('../generator.js');

describe('Scrambled Number Generator', function () {



  describe('Scrambler Function', function () {
    it('generate should be a function', function () {
      generate.should.be.a('function');
    });

    it('should take a parameter that is a number', function () {
      generate().should.be.false;
      generate([]).should.be.false;
      generate('').should.be.false;
      generate(4).length.should.equal(4);
    });


    it('generate should return an array', function () {
      generate(4).should.be.an('array');
    });





  });
});