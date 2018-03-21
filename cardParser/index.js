// http://mtgjson.com/

const fs = require('fs');
const allCards = require('./AllCards.json');

fs.writeFileSync('./sitemap.txt', '');

Object.keys(allCards).forEach(function(data){
  fs.appendFileSync('./sitemap.txt', "https://mtgcrack.herokuapp.com/search/"+data+"\n");
  console.log(data);
})
