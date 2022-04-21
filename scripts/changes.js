/* Pagina scripts per cambiare stili */


$(document).ready(function(){
  $("#change").click(function(){
  $("#pagestyle").attr('href','baroque.css');
  $('img').remove();
  $('#solar_bar').remove();
  });
  });


/* In -> Lowtech style*/
$(document).ready(function(){
  $("#changetoLow").click(function (position, text){
    $("#pagestyle").attr('href','futuristic_typo.css');
    $('#solar_bar').insertAdjacentHTML(position, text);
    /*da scrivere come rimuovere tutte le immagini e mettere le altre*/
  });
});

$(document).ready(function(){
  $("#three").click(function(){
  $(".home").remove();
  });
  });


/*Funzione Lowtech to anotherstyle*/
$(document).ready(function(){
  $("#changeLow").click(function(){
  $("#pagestyle").attr('href','baroque.css');
  $('#solar_bar').remove();
  /*da scrivere come rimuovere tutte le immagini e mettere le altre*/
  });
  });





/*
$.getJSON( "decolonization/decolonization.json", function( data ) {
  	var y = data[1];
    $("#title_issue").html(y["title"]);


     $.getJSON( "decolonization/decolonization.json")
    .done(function( data ) {
    	var y = data[1];
    	$("#title_issue").html(y["title"]);
    }*/