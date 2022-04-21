/*from fine900 to inizio900*/

$(document).ready(function(){
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
  });
/*change style and take care of particularities for each style*/
function changestyle(name) {

  /*for the bauhaus style, add decorations for the headers of the articles*/
  if (name == "ourbauhaus.css"){
    $("div.header").append('<b class="vertical_bar1"></b><b class="bottom_bar2"></b><b class="top_bar3"></b><b class="circle1"></b><b class="square"></b><b class="newbar"></b>');
  }
  /*otherwise remove it*/
  else{
    $("div.header b:empty").remove();
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