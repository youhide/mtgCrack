io.sails.transports = [ 'websocket', 'polling' ];

$.ajax({
  url: '/public/vars',
  type: 'GET',
  success: function(globals){
    app_url = globals.publicVars.url;
    app_version = globals.publicVars.version;
  }
});

// Use .get() to contact the server and join room
io.socket.get('/socket/join', (body, response) => {
  console.log('Socket: Server responded with status code ' + response.statusCode + ' and data: ', body);
});

// Post data to server with sockets

$('#searchForm').submit((event) => {
  var inputVal = $('#searchInput').val();
  var postVal = {searchValue: inputVal};
  io.socket.post('/socket/getname', postVal, (resData, jwRes) => {
    // console.log('jwRes = '+jwRes.statusCode);
    // console.log('resData = '+resData.cards);
    document.title = resData.title;
    window.history.pushState('', '', '/search/'+inputVal);
    $('#cardsList').empty();
    if (typeof resData.cards === 'object' && resData.cards) {
      resData.cards.forEach( ( card ) => {
        $('#cardsList').append('<div class="col-md-3 col-sm-6 cardcol-'+card.id+'">');
        $('.cardcol-'+card.id).append('<div class="box cardbox-'+card.id+'">');
        if (card.imageUrl) {
          $('.cardbox-'+card.id).append('<img class="card-img img-responsive center-block" src="'+card.imageUrl+'" alt="Card image cap">');
        } else {
          $('.cardbox-'+card.id).append('<img class="card-img img-responsive center-block" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" alt="Card image cap">');
        }
        $('.cardbox-'+card.id).append('<div class="cardInfo-block cardInfo-'+card.id+'">');
        $('.cardInfo-'+card.id).append('<h4 class="card-title">'+card.name+'</h4>');
        $('.cardInfo-'+card.id).append('<p class="card-text">Rarity: '+card.rarity+'</p>');
        $('.cardInfo-'+card.id).append('<p class="card-text">Set: '+card.setName+'</p>');
        $('.cardInfo-'+card.id).append('<p class="card-text">Type: '+card.type+'</p>');
        $('.cardInfo-'+card.id).append('<p class="card-text">');
        for (var i in card.legalities) {
          $('.cardInfo-'+card.id).append(card.legalities[i].format+': '+card.legalities[i].legality+'. ');
        }
        $('.cardInfo-'+card.id).append('<p class="card-text">');
        if (card.text) {
          $('.cardInfo-'+card.id).append('<p class="card-text"><small class="text-muted">Text: '+card.text+'</small></p>');
        } else {
          $('.cardInfo-'+card.id).append('<p class="card-text"><small class="text-muted">Text: None</small></p>');
        }
        $('#cardsList').append('</div>');
        $('#cardsList').append('</div>');
      });
    }
  });
  event.preventDefault();
});
$('#searchButton').click(() => {
  $('#searchForm').submit();
});

// $(document).ready(function(){
//   $('#searchForm').submit(function(event){
//     var theName = $('#searchInput').val();
//     document.location = app_url+"search/"+theName;
//     event.preventDefault();
//   });
//   $('#searchButton').click(function(){
//     $('#searchForm').submit();
//   });
// });
