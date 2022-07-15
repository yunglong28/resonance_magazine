function change(name) {
  /*alert(currentstyle)*/
  if (name == 'belle') {
    $("#pagestyle").attr('href','style/inizio900.css');
    $(".container_articles img").remove();
    $("<img class='opening_img' id='ballerini' src='imgs/ballerini.png'/>").insertAfter("#col1 .title");
    $("<img class='opening_img' id='amazzone' src='imgs/amazzone.png'/>").insertAfter("#col2 .title");
    $("<img class='opening_img' id='pattinatrice' src='imgs/pattinatrice.png'/>").insertAfter("#col3 .title");
    /*$("#col2 p:first-of-type").replaceWith( "<div id='container'><div id='left'><span class='key' about='colonization'>Colonization</span></div> <div id='center'>rears its ugly head whenever there is</div> <div id='right'><span class='key' about='globalization'> globalization</span></div></div><br>");*/
    /*$("#col2 p").wrapAll( "<div id='col2_txt'>");*/
  }

  /*else{
    $(".opening_img").remove();
    if($('.op').length == 0){
    $("<img class='op' src='https://img1.wsimg.com/isteam/ip/d8d3ee10-86f5-4a41-aa20-fec4c8ea1c2e/Maracatu%20Coronation.png/:/cr=t:3.65%25,l:0.71%25,w:94.34%25,h:94.34%25/rs=w:1280' alt='Coronation ceremony' width='300'>").insertAfter("#col1 .title");
    $("<img class='op' src='https://2104310a1da50059d9c5-d1823d6f516b5299e7df5375e9cf45d2.ssl.cf2.rackcdn.com/nmbx/2016/11/GaryIngle-475x358.jpg' width='300'>").insertAfter("#col2 .title");
    $("<img class='op'src='https://ia804507.us.archive.org/10/items/pub_popular-music-and-society/pub_popular-music-and-society_itemimage.jpg' width='300'>").insertAfter("#col3 .title");
  };

  }*/

  if (name == 'tabloid'){
    $(".opening_img").remove();
    $("#pagestyle").attr('href','style/fine900.css');
    if($('.title_issue').length == 0){$("<div class='title_issue'> <img src='imgs/theresonance.jpg'> </div> <div class='banner_issue'> EXCLUSIVE: DECOLONISING MUSIC</div>").insertAfter("nav")};
    /*$("#col1 .title").prepend("<img src='imgs/pallino.png'/>");*/
  }

  /*else {
    $(".banner_issue").remove();
    $(".title_issue").remove();
  }*/

  if (name ==='illuminist'){
    $("#pagestyle").attr('href','style/illuminism.css');
    $(".opening_img").remove();
  }

  if (name ==='future'){
    $("#pagestyle").attr('href','style/future.css');
  }


  if (name=='hobbyhorse'){
    $("#pagestyle").attr('href','style/hobbyhorse.css');
    $(".container_articles").attr('class', 'container-fluid container_articles');
    $("<img  id='finalfig1' src='imgs/deco1.png' width='300'>").insertAfter("#col1 p:last-of-type");
    $("<img src='imgs/deco2.png' width='300'>").insertAfter("#col2 p:last-of-type");
    $("<img src='imgs/deco3.png' width='300'>").insertAfter("#col3 p:last-of-type");
    $(".quote").prepend("<img id='block1' src='imgs/birds3.png' width='250'>");
    //if ($(".first_char").html() == 'E'){
        //$(".first_char").replaceWith('<img src="imgs/letterE.png"/>');
    //};

    /*$(".ArtBody p:first-of-type").each(function(){
      var first_char = $(this).text().charAt(0);
      alert(first_char);
      $(this).text().charAt(0).remove();
    });*/
  }



  else{
    $(".container_articles").attr('class', 'container container_articles');
    $("figcaption").remove();
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




 */



 /* DI ALE*/
$(document).ready(function(){
  $("#change").click(function(){
  $("#pagestyle").attr('href','illuminism.css');
  $('img').remove();
  $('#solar_bar').remove();
  });
  });


/* In -> Lowtech style*/
$(document).ready(function(){
  $("#changetoLow").click(function (position, text){
    $("#pagestyle").attr('href','future.css');
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
  $("#pagestyle").attr('href','illuminism.css');
  $('#solar_bar').remove();
  /*da scrivere come rimuovere tutte le immagini e mettere le altre*/
  });
  });
/*Fine Ale*/



function blackout() {
  document.getElementById("blackout").style.display = "flex";
  document.getElementById("blackout-sentence").style.display = "flex";
}

myTimeout = setTimeout(blackout, 300000);
