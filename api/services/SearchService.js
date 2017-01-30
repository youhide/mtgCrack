const mtg = require('mtgsdk');

module.exports = {

  findBy: function(cardname){
    var theCards = {};
    var shootIt = mtg.card.all({ name: cardname })
    .on('data', card => {
      theCards[cards.name] = card;
      sails.log('shooted: '+theCards);
    });
    sails.log('shooted: '+theCards);
    return shootIt;
  }

};
