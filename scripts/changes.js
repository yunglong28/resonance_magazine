function change(name) {
  /*alert(currentstyle)*/
  if (name == 'belle') {
    $("#pagestyle").attr('href','style/inizio900.css');
    $(".title_issue").remove();
    $(".banner_issue").replaceWith("<br>");
    $(".container_articles img").remove();
    $("<img id='ballerini' src='imgs/ballerini.png'/>").insertAfter("#col1 .title");
    $("<img id='amazzone' src='imgs/amazzone.png'/>").insertAfter("#col2 .title");
    $("<img id='pattinatrice' src='imgs/pattinatrice.png'/>").insertAfter("#col3 .title");
    $("#col2 p:first-of-type").replaceWith( "<div id='container'><div id='left'><span class='key' about='colonization'>Colonization</span></div> <div id='center'>rears its ugly head whenever there is</div> <div id='right'><span class='key' about='globalization'> globalization</span></div></div><br>");
    $("#col2 p").wrapAll( "<div id='col2_txt'>");
  }

  else{
    $("#sep_nav").remove();
  }

  if (name == 'tabloid'){
    $("#pagestyle").attr('href','style/fine900.css');
    $(".container_articles img").remove();
    if($('.title_issue').length == 0){$("<div class='title_issue'> <img src='imgs/theresonance.jpg'> </div> <div class='banner_issue'> EXCLUSIVE: DECOLONISING MUSIC</div>").insertAfter("nav")};
    $("#col1 .title").prepend("<img src='imgs/pallino.png'/>");
  }

  else {
    $(".banner_issue").remove();
  }

  if (name=='illuminist'){
    $("#pagestyle").attr('href','baroque.css');
    $("img").remove();

  }

  if (name=='hobbyhorse'){
    $("#pagestyle").attr('href','style/hobbyhorse.css');
    $("img").remove();
    $("<br>").insertAfter(".navbar");
    $(".container_articles").attr('class', 'container-fluid container_articles');
    $("<img src='imgs/folies.jpeg'/>").insertBefore("#title_and_subtitle_1"); 
    $("<img src='imgs/chocolat.jpeg'/>").insertBefore("#title_and_subtitle_2");
    $("<img src='imgs/palais.jpeg'/>").insertBefore("#title_and_subtitle_3");
    $("<img  id='finalfig1' src='imgs/deco1.png' width='300'>").insertAfter("#col1 p:last-of-type");
    $("<img src='imgs/deco2.png' width='300'>").insertAfter("#col2 p:last-of-type");
    $("<img src='imgs/deco3.png' width='300'>").insertAfter("#col3 p:last-of-type");
    $("blockquote").prepend("<img id='block1' src='imgs/birds3.png' width='250'>");
    /*$(".ArtBody p:first-of-type").each(function(){
      var first_char = $(this).text().charAt(0);
      alert(first_char);
      $(this).text().charAt(0).remove();
    });*/

  }

   /*if (name=='hobbyhorse'){*/


};



/*
QUELLO CHE PROVAVO A FARE PRIMA
function change(name, currentstyle) {
  alert(currentstyle)
  if (name == 'belle' && currentstyle != 'belle') {
    $("#pagestyle").attr('href','style/inizio900.css');
    $(".title_issue").remove();
    $(".banner_issue").replaceWith("<br>");
    $(".container_articles img").remove();
    $("<img id='ballerini' src='imgs/ballerini.png'/>").insertAfter("#col1 .title");
    $("<img id='amazzone' src='imgs/amazzone.png'/>").insertAfter("#col2 .title");
    $("<img id='pattinatrice' src='imgs/pattinatrice.png'/>").insertAfter("#col3 .title");
    $("#col2 p:first-of-type").replaceWith( "<div id='container'><div id='left'><span class='key' about='colonization'>Colonization</span></div> <div id='center'>rears its ugly head whenever there is</div> <div id='right'><span class='key' about='globalization'> globalization</span></div></div><br>");
    $("#col2 p").wrapAll( "<div id='col2_txt'>");
    $("#belle").setAttr("onclick","change('belle', 'belle')");
  }

  if (name == 'tabloid' && currentstyle != 'tabloid'){
    $("#pagestyle").attr('href','style/fine900.css');
    $(".container_articles img").remove();
    $("#sep_nav").remove();
    $("<div class='title_issue'> <img src='imgs/theresonance.jpg'> </div> <div class='banner_issue'> EXCLUSIVE: DECOLONISING MUSIC</div>").insertAfter("nav");
    $("#col1 .title").prepend("<img src='imgs/pallino.png'/>");
    $("#tabloid").removeAttr("onclick");
    $("#tabloid").setAttr("onclick","change('tabloid', 'tabloid')");
  }

  if (name=='illuminist'){
    $("#pagestyle").attr('href','baroque.css');
    $("img").remove();

  }

};/*


 /* DI ALE*/
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
/*Fine Ale*/