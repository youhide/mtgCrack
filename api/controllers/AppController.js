/**
 * AppController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const mtg = require('mtgsdk');

module.exports = {

  index: function (req, res) {
    var searchInput = '';
    res.view('pages/homepage', { title: 'mtgCrack Home', searchInput: searchInput });
  },
  search: function (req, res) {
    var searchInput = req.params.cardname ? req.params.cardname : '';
    if (searchInput === '') { return res.view('pages/homepage', { title: 'mtgCrack Search', searchInput: searchInput }); }
    mtg.card.where({ name: searchInput }).then(cards => {
      // sails.log(cards);
      return res.view('pages/homepage', { title: 'mtgCrack Search ' + searchInput, cards: cards, searchInput: searchInput });
    });
  }

};
