/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const mtg = require('mtgsdk');

module.exports = {
	index: function(req, res){
		res.view('homepage');
	},
	search: function(req, res){
		sails.log(req.params.cardname);
    mtg.card.where({ name: req.params.cardname })
		.then(cards => {
		    console.log(cards);
				return res.view('homepage', { cards: cards});
    });
	}
};
