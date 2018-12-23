// http://mtgjson.com/

const fs = require('fs');
const allCards = require('./AllCards.json');

fs.writeFileSync('./assets/sitemap.txt', '');

Object.keys(allCards).forEach(function(data){
  data = encodeURIComponent(data.trim())
  fs.appendFileSync('./assets/sitemap.txt', "https://mtgcrack.herokuapp.com/search/"+data+"\n");
  console.log(data);
})
