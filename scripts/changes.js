$(document).ready(function(){
  $("#change").click(function(){
  $("#pagestyle").attr('href','style/prova.css');
  $('img').remove();
  });
  });

$(document).ready(function(){
  $("#three").click(function(){
  $(".home").remove();
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