/*from fine900 to inizio900*/

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