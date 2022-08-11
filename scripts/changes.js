function keepstyle(pagestyle){

  var style = document.getElementById(pagestyle).getAttribute("href");
  sessionStorage.setItem('currentstyle', style);

}


$(document).ready(function(){
  if (sessionStorage.getItem("currentstyle")){
    var style = sessionStorage.getItem("currentstyle");
    if (style==="style/home.css"){
      document.getElementById("pagestyle").setAttribute("href", "style/issue.css");
    }
    if (style==="style/home_illuminism.css"){
      document.getElementById("pagestyle").setAttribute("href", "style/illuminism.css");
    }

    if (style==="style/home_hobbyhorse.css"){
      document.getElementById("pagestyle").setAttribute("href", "style/hobbyhorse.css");
    }

    if (style==="style/home_belle.css"){
      document.getElementById("pagestyle").setAttribute("href", "style/belle.css");
      $("#first_img_one").replaceWith("<img class=first_img' id='ballerini first_img_one' src='imgs/ballerini.png'>")
      $("#first_img_two").replaceWith("<img class='opening_img_belle' id='amazzone first_img_two' src='imgs/amazzone.png'/>")
      $("#first_img_three").replaceWith("<img class='opening_img_belle' id='pattinatrice first_img_three' src='imgs/pattinatrice.png'/>")
    }

    if (style==="style/home_analog.css"){
      document.getElementById("pagestyle").setAttribute("href", "style/analog.css");
    }

    if (style==="style/home_tabloid.css"){
      document.getElementById("pagestyle").setAttribute("href", "style/tabloid.css");
    }

    if (style==="style/home_future.css"){
      document.getElementById("pagestyle").setAttribute("href", "style/future.css");
      $("<div id='solar_bar'><p> This is a solar-powered website, which means it sometimes goes offline. You have 5 minutes of energy left. <img src='imgs/icons8-sun-30.png'><br></p><p>The page size is 86kb. You can print it ecologically <a href='https://www.greenerprinter.com/00'><img src='imgs/icons8-print-30.png'></a><p>Only 0.14 g of CO2 is produced every time someone visits this web page. This is cleaner than 86  % of web pages tested</p><p>Calculate your web page footprint <a href='https://www.websitecarbon.com/'>here</a>.<p/><p>Server Stats <img src='imgs/icons8-solar-panels-32.png'> <br> Location: Barcelona | Time: 16:58 CEST | Battery status: Charging | Power used: 2.50W | Uptime: 12 weeks, 2 days, 6 hours, 19 minutes</p><hr class='half-hr'/></div>").insertAfter("#navbar")
      $("#first_img_one_ale").replaceWith("<img class='first_img cover_image img-fluid' id='first_img_one_ale' src='imgs/dither_it_article_1_1.png'>")
      $("#first_img_two_ale").replaceWith("<img class='first_img cover_image img-fluid' id='first_img_two_ale' src='imgs/dither_it_article_2_1.png'>")
      $("#second_image_second_article").replaceWith("<img class='img-fluid article_images' id='second_image_second_article' src='imgs/dither_it_article_2_2.png'>")
      $("#third_image_second_article").replaceWith("<img class='img-fluid article_images' id='second_image_second_article' src='imgs/dither_it_article_2_3.png'>")
      $("#fourth_image_second_article").replaceWith("<img class='img-fluid article_images' id='second_image_second_article' src='imgs/dither_it_article_2_4.png'>")
      $("#first_img_three_ale").replaceWith("<img class='first_img cover_image img-fluid' id='first_img_three_ale' src='imgs/dither_it_article_3_1.png'>")
      $("#cello").attr('src','imgs/dither_it_cello.png');
      $("#harp").attr('src','imgs/dither_it_harp.png');
      $("#gramophone").attr('src','imgs/dither_it_gramophone.png');
      $("#disco").attr('src','imgs/dither_it_disco.png');
      $("#boombox").attr('src','imgs/dither_it_boombox.png');
      $("#walkman").attr('src','imgs/dither_it_walkman.png');
      $("#first_img_one").replaceWith("<img class='first_img cover_image img-fluid' id='first_img_one' src='imgs/dither_it_fra1.jpg'>")
      $("#first_img_two").replaceWith("<img class='first_img cover_image img-fluid' id='first_img_two' src='imgs/dither_it_fra2.jpeg'>")
      $("#first_img_three").replaceWith("<img class='first_img cover_image img-fluid' id='first_img_three' src='imgs/dither_it_fra3.jpeg'>")
    }


    sessionStorage.clear();
  }
});




function change(name) {
 

   if (name == 'belle') {
    $("#pagestyle").attr('href','style/belle.css');
    $(".first_img").remove();
    if($('#sep_nav').length == 0){$("<br id='sep_nav'>").insertAfter("nav")};
    $("<img class='opening_img_belle' id='ballerini' src='imgs/ballerini.png'/>").insertAfter("#col1 .title");
    $("<img class='opening_img_belle' id='amazzone' src='imgs/amazzone.png'/>").insertAfter("#col2 .title");
    $("<img class='opening_img_belle' id='pattinatrice' src='imgs/pattinatrice.png'/>").insertAfter("#col3 .title"); 
    $(".container_articles").attr('class', 'container container_articles');
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
    $(".first_img").remove();

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
    if($('.finalfig1').length == 0){$("<img  id='finalfig1' src='imgs/deco1.png' width='300'>").insertAfter("#col1 p:last-child")};
    if($('.finalfig2').length == 0){$("<img  id='finalfig2' src='imgs/deco2.png' width='300'>").insertAfter("#col1 p:last-child")};
    if($('.finalfig3').length == 0){$("<img  id='finalfig3' src='imgs/deco3.png' width='300'>").insertAfter("#col1 p:last-child")};
    if ($("#francesca").length) {
     if($(".first_img").length === 0){
       $("<img class=first_img' id='ballerini' src='imgs/ballerini.png'>").insertBefore("#col1 .subtitle");
       $("<img class='img-fluid opening_img' src='imgs/dither_it_fra2.jpeg'>").insertAfter("#col2 .title");
       $("<img class='img-fluid opening_img' src='imgs/dither_it_fra3.jpeg'>").insertAfter("#col3 .title");}
    }

  }



  else{
    $(".container_articles").attr('class', 'container container_articles');
    $("figcaption").remove();
  }


  if (name == 'tabloid'){
    $(".first_img").remove();
    $("#pagestyle").attr('href','style/tabloid.css');
    if($('.title_issue').length == 0){$("<div class='title_issue'> <img src='imgs/theresonance.jpg'> </div> <div class='banner_issue'> EXCLUSIVE: DECOLONISING MUSIC</div>").insertAfter("nav")};
    /*$("#col1 .title").prepend("<img src='imgs/pallino.png'/>");*/
    if($('#sep_banner').length == 0){$("<br id='sep_banner'>").insertAfter(".banner_issue")};
  }

  else {
    $(".banner_issue").remove();
    $(".title_issue").remove();
    $("#pallino").remove();
  }


  if (name == 'analog'){
    $("#pagestyle").attr('href','style/analog.css');  
    $(".container_articles").attr('class', 'container-fluid container_articles'); 
    if($('#sep_nav').length == 0){$("<br id='sep_nav'>").insertAfter("nav")};
  }


  if (name ==='future'){

    $("#pagestyle").attr('href','style/future.css');
    /* icone */
    $("#cello").attr('src','imgs/dither_it_cello.png');
    $("#harp").attr('src','imgs/dither_it_harp.png');
    $("#gramophone").attr('src','imgs/dither_it_gramophone.png');
    $("#disco").attr('src','imgs/dither_it_disco.png');
    $("#boombox").attr('src','imgs/dither_it_boombox.png');
    $("#walkman").attr('src','imgs/dither_it_walkman.png');

    /* solar bar */
    $("<div id='solar_bar'><p> This is a solar-powered website, which means it sometimes goes offline. You have 5 minutes of energy left. <img src='imgs/icons8-sun-30.png'><br></p><p>The page size is 86kb. You can print it ecologically <a href='https://www.greenerprinter.com/00'><img src='imgs/icons8-print-30.png'></a><p>Only 0.14 g of CO2 is produced every time someone visits this web page. This is cleaner than 86  % of web pages tested</p><p>Calculate your web page footprint <a href='https://www.websitecarbon.com/'>here</a>.<p/><p>Server Stats <img src='imgs/icons8-solar-panels-32.png'> <br> Location: Barcelona | Time: 16:58 CEST | Battery status: Charging | Power used: 2.50W | Uptime: 12 weeks, 2 days, 6 hours, 19 minutes</p></div>").insertAfter("#sep_nav")};

  /* immagini ale */

  $("<img class='img-fluid article_images' src='imgs/article_1_1.png'>").remove();
  $("<img class='img-fluid article_images' src='imgs/article_2_1.jpg'>").remove();
  $("<img class='img-fluid article_images' src='imgs/article_3_1.png'>").remove();
  $("<img class='img-fluid opening_img' src='imgs/dither_it_article_1_1.png'>").insertBefore("#contrassegno");
  $("<img class='img-fluid opening_img' src='imgs/dither_it_article_2_1.png'>").insertBefore("#contrassegno2");
  $("<img class='img-fluid opening_img' src='imgs/dither_it_article_3_1.png'>").insertBefore("#contrassegno3");



  $("#second_image_second_article").replaceWith("<img class='img-fluid article_images' id='second_image_second_article' src='imgs/dither_it_article_2_2.png'>")
    $("#third_image_second_article").replaceWith("<img class='img-fluid article_images' id='second_image_second_article' src='imgs/dither_it_article_2_3.png'>")
    $("#fourth_image_second_article").replaceWith("<img class='img-fluid article_images' id='second_image_second_article' src='imgs/dither_it_article_2_4.png'>")


    /* immagini fra */
  $("#first_img_one").replaceWith("<img class='first_img cover_image img-fluid' id='first_img_one' src='imgs/dither_it_fra1.jpg'>")
  $("#first_img_two").replaceWith("<img class='first_img cover_image img-fluid' id='first_img_two' src='imgs/dither_it_fra2.jpeg'>")
  $("#first_img_three").replaceWith("<img class='first_img cover_image img-fluid' id='first_img_three' src='imgs/dither_it_fra3.jpeg'>")

    if($("#sep_nav").length == 0){
      $("<br id='sep_nav'>").insertAfter("#nav_hr");
    }
    /*inserire un if per issue! Se inserisci nome dell'elemento
    * punto lenght come qua sotto verifica se esiste e poi fa. così inserisce
    * le tue immagini solo nel tuo (da ale)*/
    if ($("#francesca").length) {
     if($(".opening_img_future").length === 0){
       $("#first_img_one").replaceWith("<img class='first_img' id='first_img_one' src='imgs/dither_it_fra1.jpg' height='550'>")
       $("#first_img_two").replaceWith("<img class='first_img' id='first_img_two' src='imgs/dither_it_fra2.jpeg'>")
       $("#first_img_three").replaceWith("<img class='first_img' id='first_img_three' src='imgs/dither_it_fra3.jpeg'>")
    }




    if($("#solar_bar").length == 0)
    {
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

} }