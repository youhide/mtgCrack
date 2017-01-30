/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const mtg = require('mtgsdk');

module.exports = {
	index: function(req, res){
		var searchInput = '';
		res.view('homepage', {searchInput: searchInput});
	},
	search: function(req, res){
		var searchInput = req.params.cardname ? req.params.cardname : '';
		if(searchInput === '') return res.view('homepage', {searchInput: searchInput});
    mtg.card.where({ name: searchInput })
		.then(cards => {
		    console.log(cards);
				return res.view('homepage', { cards: cards, searchInput: searchInput});
    });
	},
	publicVars: function(req, res) {
		var json = {
			publicVars: sails.config.publicVars
		};
		res.json(200, json);
	}
};
