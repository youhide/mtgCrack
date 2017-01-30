var superagent = require('superagent');

describe('AppController', function() {

  describe('index', function(){
    it('should respond to GET',function(){
      superagent
        .get(sails.config.publicVars.url)
        .end(function(res){
          expect(res.status).to.equal(200);
      });
    });
  });

  describe('search', function(){
    it('should respond to GET',function(){
      superagent
        .get(sails.config.publicVars.url+'search/lotus')
        .end(function(res){
          expect(res.status).to.equal(200);
      });
    });
  });

});
