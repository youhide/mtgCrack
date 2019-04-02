/**
 * SocketController
 *
 * @description :: Server-side logic for managing sockets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const mtg = require('mtgsdk');

module.exports = {
  join: function(req, res){
    if (!req.isSocket) {return res.badRequest();}
    sails.sockets.join(req, 'socketroom');
    return res.ok({
      message: 'OK'
    });
  },
  getName: function(req, res){
    if (!req.isSocket) {return res.badRequest();}
    var searchInput = req.body.searchValue ? req.body.searchValue : '';
    // sails.log('input = '+searchInput);
    if(searchInput === '') {return res.send({title: 'mtgCrack Search', searchInput: searchInput});}
    mtg.card.where({ name: searchInput }).then(cards => {
		    //sails.log(cards);
      return res.send({title: 'mtgCrack Search '+searchInput, cards: cards, searchInput: searchInput});
    });
  }
};
