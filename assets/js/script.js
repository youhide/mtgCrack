addToHomescreen();

$.ajax({
  url: '/public/vars',
  type: 'GET',
  success: function(globals){
    app_url = globals.publicVars.url;
    app_version = globals.publicVars.version;
  }
});

$(document).ready(function(){
  $('#searchForm').submit(function(event){
    var theName = $('#searchInput').val();
    document.location = app_url+"search/"+theName;
    event.preventDefault();
  });
  $('#searchButton').click(function(){
    $('#searchForm').submit();
  });
});
