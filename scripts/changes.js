function change(name) {
 

   if (name == 'belle') {
    $("#pagestyle").attr('href','style/belle.css');
    if($('#sep_nav').length == 0){$("<br id='sep_nav'>").insertAfter("nav")};
    $("<img class='opening_img_belle' id='ballerini' src='imgs/ballerini.png'/>").insertAfter("#col1 .title");
    $("<img class='opening_img_belle' id='amazzone' src='imgs/amazzone.png'/>").insertAfter("#col2 .title");
    $("<img class='opening_img_belle' id='pattinatrice' src='imgs/pattinatrice.png'/>").insertAfter("#col3 .title");
  }

  else{
    $("#container_belle").remove();
    $(".opening_img_belle").remove();
    /*if($('.op').length == 0){
    $("<img class='op' src='https://img1.wsimg.com/isteam/ip/d8d3ee10-86f5-4a41-aa20-fec4c8ea1c2e/Maracatu%20Coronation.png/:/cr=t:3.65%25,l:0.71%25,w:94.34%25,h:94.34%25/rs=w:1280' alt='Coronation ceremony' width='300'>").insertAfter("#col1 .title");
    $("<img class='op' src='https://2104310a1da50059d9c5-d1823d6f516b5299e7df5375e9cf45d2.ssl.cf2.rackcdn.com/nmbx/2016/11/GaryIngle-475x358.jpg' width='300'>").insertAfter("#col2 .title");
    $("<img class='op'src='https://ia804507.us.archive.org/10/items/pub_popular-music-and-society/pub_popular-music-and-society_itemimage.jpg' width='300'>").insertAfter("#col3 .title");*/
  }




  if (name ==='illuminist'){
    $("#pagestyle").attr('href','style/illuminism.css');
    $(".opening_img").remove();

    $("<img class='img-fluid opening_img opening_img_illuminism' src='imgs/didot_cover1.jpeg'>").insertBefore("#col1 .title");
    $("<img class='img-fluid opening_img opening_img_illuminism' src='imgs/didot_cover2.jpeg'>").insertBefore("#col2 .title");
    $("<img class='img-fluid opening_img opening_img_illuminism' src='imgs/didot_cover3.jpeg'>").insertBefore("#col3 .title");


    /* per la home */
    $(".marquee-section").remove();
    $("<img src='imgs/cellohome.png'>").remove();
  }

  else {
    $(".opening_img_illuminism").remove();
    $(".cover_image").remove();
    $(".didot_logo").remove();
  }

  

  if (name =='hobbyhorse'){
    $("#pagestyle").attr('href','style/hobbyhorse.css');
    $("#sep_nav").remove();
    $(".container_articles").attr('class', 'container-fluid container_articles');
    $("<img  id='finalfig1' src='imgs/deco1.png' width='300'>").insertAfter("#col1 p:last-of-type");
    $("<img src='imgs/deco2.png' width='300'>").insertAfter("#col2 p:last-of-type");
    $("<img src='imgs/deco3.png' width='300'>").insertAfter("#col3 p:last-of-type"); 
  }




  else{
    $(".container_articles").attr('class', 'container container_articles');
    $("figcaption").remove();
  }



  if (name == 'tabloid'){
    $(".opening_img").remove();
    $("#pagestyle").attr('href','style/tabloid.css');
    if($('.title_issue').length == 0){$("<div class='title_issue'> <img src='imgs/theresonance.jpg'> </div> <div class='banner_issue'> EXCLUSIVE: DECOLONISING MUSIC</div>").insertAfter("nav")};
    /*$("#col1 .title").prepend("<img src='imgs/pallino.png'/>");*/
    $()
  }

  else {
    $(".banner_issue").remove();
    $(".title_issue").remove();
    $("#pallino").remove();
  }


  if (name ==='future'){

    $("#pagestyle").attr('href','style/future.css');
    $(".opening_img").remove();

    if($("#nav_hr").length == 0){
      $("<hr id='nav_hr'>").insertAfter("nav");
    }
    if($("#sep_nav").length == 0){
      $("<br id='sep_nav'>").insertAfter("#nav_hr");
    }
    /*inserire un if per issue! Se inserisci nome dell'elemento
    * punto lenght come qua sotto verifica se esiste e poi fa. così inserisce
    * le tue immagini solo nel tuo (da ale)*/
    if ($("#francesca").length) {
     if($(".opening_img_future").length === 0){
       $("<img class='img-fluid opening_img_future' src='imgs/dither_it_fra1.jpg'>").insertAfter("#col1 .title");
       $("<img class='img-fluid opening_img_future' src='imgs/dither_it_fra2.jpeg'>").insertAfter("#col2 .title");
       $("<img class='img-fluid opening_img_future' src='imgs/dither_it_fra3.jpeg'>").insertAfter("#col3 .title");}
    }

    if($("#alessandro").length) {
      /* Immagini di apertura */
      $("<img class='img-fluid article_images' src='imgs/article_1_1.png'>").remove();
      $("<img class='img-fluid article_images' src='imgs/article_2_1.jpg'>").remove();
      $("<img class='img-fluid article_images' src='imgs/article_3_1.png'>").remove();
      $("<img class='img-fluid opening_img' src='imgs/dither_it_article_1_1.png'>").insertAfter("#col1 .title");
      $("<img class='img-fluid opening_img' src='imgs/dither_it_article_2_1.png'>").insertAfter("#col2 .title");
      $("<img class='img-fluid opening_img' src='imgs/dither_it_article_3_1.png'>").insertAfter("#col3 .title");
      $("#second_image_second_article").remove();
      $("#third_image_second_article").remove();
      $("#fourth_image_second_article").remove();
      /* Immagini nell'articolo */
      $("<img class='img-fluid article_images' src='imgs/dither_it_article_2_2.png'>").insertAfter(".article_2_2");
      $("<img class='img-fluid article_images' src='imgs/dither_it_article_2_3.png'>").insertAfter(".article_2_3");
      $("<img class='img-fluid article_images' src='imgs/dither_it_article_2_4.png'>").insertAfter(".article_2_4");
    }



    if($("#solar_bar").length == 0)
    {$("<div id='solar_bar'><p> This is a solar-powered website, which means it sometimes goes offline. You have 5 minutes of energy left. <img src='imgs/icons8-sun-30.png'><br></p><p>The page size is 86kb. You can print it ecologically <a href='https://www.greenerprinter.com/00'><img src='imgs/icons8-print-30.png'></a><p>Only 0.14 g of CO2 is produced every time someone visits this web page. This is cleaner than 86  % of web pages tested</p><p>Calculate your web page footprint <a href='https://www.websitecarbon.com/'>here</a>.<p/><p>Server Stats <img src='imgs/icons8-solar-panels-32.png'> <br> Location: Barcelona | Time: 16:58 CEST | Battery status: Charging | Power used: 2.50W | Uptime: 12 weeks, 2 days, 6 hours, 19 minutes</p><hr class='half-hr'/></div>").insertAfter("#sep_nav")};
    $("#cello").attr('src','imgs/dither_it_cello.png');
    $("#harp").attr('src','imgs/dither_it_harp.png');
    $("#gramophone").attr('src','imgs/dither_it_gramophone.png');
    $("#disco").attr('src','imgs/dither_it_disco.png');
    $("#boombox").attr('src','imgs/dither_it_boombox.png');
    $("#walkman").attr('src','imgs/dither_it_walkman.png');

    $("<div class='blackout' id='blackout'><p class='blackout-sentence' id='blackout-sentence'>SERVER IS OUT OF ENERGY</p></div>").insertBefore("head");
    function blackout() {

            document.getElementById("blackout").style.display = "flex";
            document.getElementById("blackout-sentence").style.display = "flex";
            console.log('starting timer');
}

    myTimeout = setTimeout(blackout, 300000);

  }


  else{
    $("#solar_bar").remove();
    $("#nav_hr").remove();
    $(".opening_img_future").remove();
    $(".blackout").remove();
    $(".blackout-sentence").remove();
  }

}



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
}*/