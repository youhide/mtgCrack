$(document).ready(function(){
  $('#searchForm').submit(function(event){
    var theName = $('#searchInput').val();
    document.location = "http://localhost:1337/search/"+theName;
    event.preventDefault();
  });
  $('#searchButton').click(function(){
    $('#searchForm').submit();
  });
});
