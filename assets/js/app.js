$(document).ready(function(){
  
  // Write your Javascript!

  //simple-pagination
  $('#pagination').pagination({
      items: 100,
      itemsOnPage: 7,
      prevText: '<',
      nextText: '>'
  });

  //bootstrap-select
  $('.selectpicker').selectpicker({
    size: 4
  });  
  
});