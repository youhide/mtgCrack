var superagent = require('superagent');

describe('PublicController', function() {

  describe('publicVars', function(){
    it('should respond to GET',function(){
      superagent
        .get(sails.config.publicVars.url+'public/vars')
        .end(function(res){
          expect(res.status).to.equal(200);
      });
    });
  });

});
