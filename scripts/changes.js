/* Pagina scripts per cambiare stili */
/from fine900 to inizio900/

/*$(document).ready(function(){
  $("#change").click(function(){
  $("#pagestyle").attr('href','style/inizio900.css');
  $('.title_issue').remove();
  $('.banner_issue').remove();
  $('<br>').insertAfter("nav");
  $('img').remove();
  $("<img id='ballerini' src='C:/Users/Francesca/Desktop/balleriniC.png'/>").insertAfter("#col1 .title");
  $("<img id='ballerini' src='C:/Users/Francesca/Desktop/Vitali/Sito_Vitali/Style/images/amazzone_media.png'>").insertAfter("#col2 .title");
  $("<img id='pattinatrice' src='C:/Users/Francesca/Desktop/Vitali/Sito_Vitali/Style/images/pattinatrice_piccola.png'/>").insertAfter("#col3 .title");
  $('#col2 p:first-of-type').replaceWith( "<div id='container'><div id='left'><span class='key' about='colonization'>Colonization</span></div> <div id='center'>rears its ugly head whenever there is</div> <div id='right'><span class='key' about='globalization'> globalization</span></div></div><br>");
  $('#col2 p').wrapAll( "<div id='col2_txt'>");

  });
  });*/

function change(name) {
  if (name == 'belle'){
    $("#pagestyle").attr('href','style/inizio900.css');
    $('.title_issue').remove();
    $('.banner_issue').remove();
    $('<br>').insertAfter("nav");
    $('img').remove();
    $("<img id='ballerini' src='imgs/ballerini.png'/>").insertAfter("#col1 .title");
    $("<img id='amazzone' src='imgs/amazzone.png'/>").insertAfter("#col2 .title");
    $("<img id='pattinatrice' src='imgs/pattinatrice.png'/>").insertAfter("#col3 .title");
    $('#col2 p:first-of-type').replaceWith( "<div id='container'><div id='left'><span class='key' about='colonization'>Colonization</span></div> <div id='center'>rears its ugly head whenever there is</div> <div id='right'><span class='key' about='globalization'> globalization</span></div></div><br>");
    $('#col2 p').wrapAll( "<div id='col2_txt'>");
  }

  if (name == 'tabloid'){
    $("#pagestyle").attr('href','style/fine900.css');
    $('img').remove();
    $('#sep_nav').remove();
    $("<div class='title_issue'> <img src='imgs/theresonance.jpg'> </div> <div class='banner_issue'> EXCLUSIVE: DECOLONISING MUSIC</div>").insertAfter("#main");
  }

  if (name=='illuminist'){
    $("#pagestyle").attr('href','baroque.css');
    $('img').remove();
  }


};



/*
$.getJSON( "decolonization/decolonization.json", function( data ) {
  	var y = data[1];
    $("#title_issue").html(y["title"]);


     $.getJSON( "decolonization/decolonization.json")
    .done(function( data ) {
    	var y = data[1];
    	$("#title_issue").html(y["title"]);
    }*/

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