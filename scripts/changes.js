function change(name) {

  if (name == 'home') {
    $("#pagestyle").attr('href','style/issue.css');
    $("#sep_nav").remove();

    if ($("#francesca").length) {
     if($(".first_img").length === 0){
       $("<img class='first_img' id='first_img_one' src='https://img1.wsimg.com/isteam/ip/d8d3ee10-86f5-4a41-aa20-fec4c8ea1c2e/Maracatu%20Coronation.png/:/cr=t:3.65%25,l:0.71%25,w:94.34%25,h:94.34%25/rs=w:1280' alt='Coronation ceremony' width='300'>").insertAfter("#col1 .title");
       $("<img class='first_img' id='first_img_two' src='https://2104310a1da50059d9c5-d1823d6f516b5299e7df5375e9cf45d2.ssl.cf2.rackcdn.com/nmbx/2016/11/GaryIngle-475x358.jpg' width='300'>").insertAfter("#col2 .title");
       $("<img class='first_img' id='first_img_three' src='imgs/popular_music_and_society.jpg' width='300'>").insertAfter("#col3 .title");}
    }

    if ($("#alessandro").length) {
     if($(".first_img").length === 0){
       $("<img class='first_img' id='first_img_one' src='imgs/article_1_1.png' width='300'/>").insertAfter("#col1 .title");
       $(" <img class='first_img'  id='first_img_two' src='imgs/article_2_1.jpg' width='300'>").insertAfter("#col2 .title");
       $("<img class='first_img' id='first_img_three' src='imgs/article_3_1.png' id='dither6' width='300'>").insertAfter("#col3 .title");}
    }

     if ($("#lorenza").length) {
     if($(".first_img").length === 0){
       $(" <figure id='first_img_one'><img id='fig_article' class='first_img' src='https://media.pitchfork.com/photos/5f071957ca5f171c3b77135b/2:1/w_2560%2Cc_limit/SOPHIE%252520new%252520music%252520live%252520set.jpg' width='300'> <figcaption><span class='person' about='Sophie' data-label='Sophie' data-wikidata-id='Q18161827'>SOPHIE</span>, photo by <span class='person' about='Renata Raksha'>Renata Raksha</span></figcaption></figure>").insertAfter("#col1 .title");
       $("<figure id='first_img_two'><img class='first_img' src='https://media.newyorker.com/photos/5f7e295b9ee31e60d7874e93/master/w_2560%2Cc_limit/201019_r37204.jpg'  width='300'> <figcaption>Virtuosity doesn’t resonate for <span class='person' about='AdrianneLenker' data-label='Adrianne Lenker' data-wikidata-id='Q64875564'>Lenker</span> as much as vulnerability does. In her work with <span class='band' about='BigThief' data-label='Big Thief' data-wikidata-id='Q28228836'>Big Thief</span> and on her solo records, she has always been most interested in making emotional connections. Photograph by Collier Schorr for <span class='magazine' about='TheNewYorker' data-wikidata-id='Q217305' data-label='The New Yorker'> The New Yorker</span></figcaption></figure>").insertAfter("#col2 .title");
       $("<figure id='first_img_three'><img class='first_img' id='fig_article' src='https://diy-magazine.s3.amazonaws.com/d/diy/Artists/A/Anna-Calvi/DIY-77/Anna-Calvi-by-Eva-Pentel-for-DIY-Mag-Aug-2018-52.jpg' width='300'><figcaption></span></figcaption></figure>").insertAfter("#col3 .title");}
    }

     $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazine.png'>")
     $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellohome.png'>")
     $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harphome.png'>")
     $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonehome.png'>")
     $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobohome.png'>")
     $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxhome.png'>")
     $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodhome.png'>")

  }


   if (name == 'belle') {
    $("#pagestyle").attr('href','style/belle.css');
    $(".first_img").remove();
    $(".container_articles").attr('class', 'container container_articles');
    if($('#sep_nav').length == 0){$("<br id='sep_nav'>").insertAfter("nav")};
    if ($('.opening_img_belle').length == 0){
      $("<img class='opening_img_belle' id='ballerini' src='imgs/ballerini.png'/>").insertAfter("#col1 .title");
      $("<img class='opening_img_belle' id='amazzone' src='imgs/amazzone.png'/>").insertAfter("#col2 .title");
      $("<img class='opening_img_belle' id='pattinatrice' src='imgs/pattinatrice.png'/>").insertAfter("#col3 .title");
    }
    $(".container_articles").attr('class', 'container container_articles');
    $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazinebelle.png'>")
    $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellobelle.png'>")
    $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harpbelle.png'>")
    $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonebelle.png'>")
    $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobobelle.png'>")
    $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxbelle.png'>")
    $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodbelle.png'>")
  }

  else{
    $(".opening_img_belle").remove();
  }


  if (name ==='illuminist'){
    $("#pagestyle").attr('href','style/illuminism.css');
    $(".first_img").remove();
    $("<img class='img-fluid opening_img opening_img_illuminism' src='imgs/didot_cover1.jpeg'>").insertBefore("#col1 .title");
    $("<img class='img-fluid opening_img opening_img_illuminism' src='imgs/didot_cover2.jpeg'>").insertBefore("#col2 .title");
    $("<img class='img-fluid opening_img opening_img_illuminism' src='imgs/didot_cover3.jpeg'>").insertBefore("#col3 .title");
    $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazine.png'>")
    $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellohome.png'>")
    $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harphome.png'>")
    $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonehome.png'>")
    $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobohome.png'>")
    $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxhome.png'>")
    $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodhome.png'>")
  }

  else {
    $(".opening_img_illuminism").remove();
    $(".cover_image").remove();
    $(".didot_logo").remove();
  }


  if (name =='hobbyhorse'){
    $("#pagestyle").attr('href','style/hobbyhorse.css');
    /*$("#sep_nav").remove();*/
    $(".container_articles").attr('class', 'container-fluid container_articles');

    $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazinetabloid.png'>")
    $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellotabloid.png'>")
    $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harptabloid.png'>")
    $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonetabloid.png'>")
    $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobotabloid.png'>")
    $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxtabloid.png'>")
    $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodtabloid.png'>")

    if($('.finalfig1').length == 0){$("<img  id='finalfig1' src='imgs/deco1.png' width='300'>").insertAfter("#col1 p:last-child")};
    if($('.finalfig2').length == 0){$("<img  id='finalfig2' src='imgs/deco2.png' width='300'>").insertAfter("#col2 p:last-child")};
    if($('.finalfig3').length == 0){$("<img  id='finalfig3' src='imgs/deco3.png' width='300'>").insertAfter("#col3 p:last-child")};

    if ($("#francesca").length) {
     if($(".first_img").length === 0){
       $("<img class='first_img' id='first_img_one' src='https://img1.wsimg.com/isteam/ip/d8d3ee10-86f5-4a41-aa20-fec4c8ea1c2e/Maracatu%20Coronation.png/:/cr=t:3.65%25,l:0.71%25,w:94.34%25,h:94.34%25/rs=w:1280' alt='Coronation ceremony' width='300'>").insertBefore("#col1 .subtitle");
       $("<img class='first_img' id='first_img_two' src='https://2104310a1da50059d9c5-d1823d6f516b5299e7df5375e9cf45d2.ssl.cf2.rackcdn.com/nmbx/2016/11/GaryIngle-475x358.jpg' width='300'>").insertAfter("#col2 .title");
       $("<img class='first_img' id='first_img_three' src='imgs/popular_music_and_society.jpg' width='300'>").insertAfter("#col3 .title");}
    }

    if ($("#alessandro").length) {
     if($(".first_img").length === 0){
       $("<img class='img-fluid first_img cover_image' id='first_img_one' src='imgs/article_1_1.png'/>").insertBefore("#col1 .subtitle");
       $(" <img class='img-fluid first_img cover_image'  id='first_img_two' src='imgs/article_2_1.jpg'>").insertAfter("#col2 .title");
       $("<img class='img-fluid first_img cover_image' id='first_img_three' src='imgs/article_3_1.png' id='dither6'>").insertAfter("#col3 .title");}
    }

     if ($("#lorenza").length) {
     if($(".first_img").length === 0){
       $(" <figure id='first_img_one'><img id='fig_article' class='first_img' src='https://media.pitchfork.com/photos/5f071957ca5f171c3b77135b/2:1/w_2560%2Cc_limit/SOPHIE%252520new%252520music%252520live%252520set.jpg' width='300'> <figcaption><span class='person' about='Sophie' data-label='Sophie' data-wikidata-id='Q18161827'>SOPHIE</span>, photo by <span class='person' about='Renata Raksha'>Renata Raksha</span></figcaption></figure>").insertBefore("#col1 .subtitle");
       $("<figure id='first_img_two'><img class='first_img' src='https://media.newyorker.com/photos/5f7e295b9ee31e60d7874e93/master/w_2560%2Cc_limit/201019_r37204.jpg'  width='300'> <figcaption>Virtuosity doesn’t resonate for <span class='person' about='AdrianneLenker' data-label='Adrianne Lenker' data-wikidata-id='Q64875564'>Lenker</span> as much as vulnerability does. In her work with <span class='band' about='BigThief' data-label='Big Thief' data-wikidata-id='Q28228836'>Big Thief</span> and on her solo records, she has always been most interested in making emotional connections. Photograph by Collier Schorr for <span class='magazine' about='TheNewYorker' data-wikidata-id='Q217305' data-label='The New Yorker'> The New Yorker</span></figcaption></figure>").insertAfter("#col2 .title");
       $("<figure id='first_img_three'><img class='first_img' id='fig_article' src='https://diy-magazine.s3.amazonaws.com/d/diy/Artists/A/Anna-Calvi/DIY-77/Anna-Calvi-by-Eva-Pentel-for-DIY-Mag-Aug-2018-52.jpg' width='300'><figcaption></span></figcaption></figure>").insertAfter("#col3 .title");}
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
    if($('#sep_banner').length == 0){$("<br id='sep_banner'>").insertAfter(".banner_issue")};
     $("#home_icon").replaceWith("<img class='icons' id='home_icon' src='imgs/magazinetabloid.png'>")
    $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellotabloid.png'>")
    $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harptabloid.png'>")
    $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonetabloid.png'>")
    $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobotabloid.png'>")
    $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxtabloid.png'>")
    $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodtabloid.png'>")
  }

  else {
    $(".banner_issue").remove();
    $(".title_issue").remove();
    $("#sep_banner").remove()
  }


  if (name == 'analog'){
    $("#pagestyle").attr('href','style/analog.css');
    $(".container_articles").attr('class', 'container-fluid container_articles');
    $("#title_and_subtitle_1").prepend("<img class='analog_img' src='imgs/sub1.png' width='300'>");
    $("#title_and_subtitle_2").prepend("<img  class=' analog_img micro' id='finalfig1' src='imgs/micro.png' width='300'>");
    $("#title_and_subtitle_3").prepend("<img  class='analog_img' id='fig3' src='imgs/spartito.png' width='300'>");
    $(".adv3").prepend("<img  id'finalfig1' src='imgs/adv3.png' width='300'>");
    $(".adv1").prepend(" <img id='adv1'src='imgs/adv1.png' width='300'>");
      $(".adv2").prepend(" <img id='adv2'src='imgs/adv2.png' width='300'>");
      $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/celloanalog.png'>")
      $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harpanalog.png'>")
      $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/vynilanalog.png'>")
      $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/stroboanalog.png'>")
      $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxanalog.png'>")
      $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodanalog.png'>")
      $(".start_line").remove()



    if ($("#francesca").length) {
      $(".first_img").remove()
       $("<img class='first_img' id='first_img_one' src='https://img1.wsimg.com/isteam/ip/d8d3ee10-86f5-4a41-aa20-fec4c8ea1c2e/Maracatu%20Coronation.png/:/cr=t:3.65%25,l:0.71%25,w:94.34%25,h:94.34%25/rs=w:1280' alt='Coronation ceremony' width='300'>").insertBefore("#title_and_subtitle_1");
       $("<img class='first_img' id='first_img_two' src='https://2104310a1da50059d9c5-d1823d6f516b5299e7df5375e9cf45d2.ssl.cf2.rackcdn.com/nmbx/2016/11/GaryIngle-475x358.jpg' width='300'>").insertBefore("#title_and_subtitle_2");
       $("<img class='first_img' id='first_img_three' src='imgs/popular_music_and_society.jpg' width='300'>").insertBefore("#title_and_subtitle_3");
     }

     if ($("#alessandro").length) {
      $(".first_img").remove()
       $("<img class='img-fluid first_img cover_image' id='first_img_one' src='imgs/article_1_1.png'/>").insertBefore("#title_and_subtitle_1");
       $(" <img class='img-fluid first_img cover_image'  id='first_img_two' src='imgs/article_2_1.jpg'>").insertBefore("#title_and_subtitle_2");
       $("<img class='img-fluid first_img cover_image' id='first_img_three' src='imgs/article_3_1.png' id='dither6'>").insertBefore("#title_and_subtitle_3");
    }


    if ($("#lorenza").length) {
        $(".first_img").remove()
           $("<figure id='first_img_one'><img id='fig_article' class='first_img' src='https://media.pitchfork.com/photos/5f071957ca5f171c3b77135b/2:1/w_2560%2Cc_limit/SOPHIE%252520new%252520music%252520live%252520set.jpg' width='300'> <figcaption><span class='person' about='Sophie' data-label='Sophie' data-wikidata-id='Q18161827'>SOPHIE</span>, photo by <span class='person' about='Renata Raksha'>Renata Raksha</span></figcaption></figure>").insertBefore("#title_and_subtitle_1");
           $("<figure id='first_img_two'><img class='first_img' src='https://media.newyorker.com/photos/5f7e295b9ee31e60d7874e93/master/w_2560%2Cc_limit/201019_r37204.jpg'  width='300'> <figcaption>Virtuosity doesn’t resonate for <span class='person' about='AdrianneLenker' data-label='Adrianne Lenker' data-wikidata-id='Q64875564'>Lenker</span> as much as vulnerability does. In her work with <span class='band' about='BigThief' data-label='Big Thief' data-wikidata-id='Q28228836'>Big Thief</span> and on her solo records, she has always been most interested in making emotional connections. Photograph by Collier Schorr for <span class='magazine' about='TheNewYorker' data-wikidata-id='Q217305' data-label='The New Yorker'> The New Yorker</span></figcaption></figure>").insertBefore("#title_and_subtitle_2");
           $("<figure id='first_img_three'><img class='first_img' id='fig_article' src='https://diy-magazine.s3.amazonaws.com/d/diy/Artists/A/Anna-Calvi/DIY-77/Anna-Calvi-by-Eva-Pentel-for-DIY-Mag-Aug-2018-52.jpg' width='300'><figcaption></span></figcaption></figure>").insertBefore("#title_and_subtitle_3");
         }



    }

    else{
      $('.analog_img').remove();
      $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellohome.png'>")
      $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harphome.png'>")
      $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonehome.png'>")
      $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobohome.png'>")
      $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxhome.png'>")
      $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodhome.png'>")
    }


    if (name ==='future') {

        $("#pagestyle").attr('href', 'style/future.css');
        $("#cello").attr('src', 'imgs/dither_it_cello.png');
        $("#harp").attr('src', 'imgs/dither_it_harp.png');
        $("#gramophone").attr('src', 'imgs/dither_it_gramophone.png');
        $("#disco").attr('src', 'imgs/dither_it_disco.png');
        $("#boombox").attr('src', 'imgs/dither_it_boombox.png');
        $("#walkman").attr('src', 'imgs/dither_it_walkman.png');


        if ($("#solarbar".length === 0) && (name === 'future')) {
            $("<div id='solar_bar'><p> This is a solar-powered website, which means it sometimes goes offline. You have 5 minutes of energy left. <img src='imgs/icons8-sun-30.png'><br></p><p>The page size is 86kb. You can print it ecologically <a href='https://www.greenerprinter.com/00'><img src='imgs/icons8-print-30.png'></a><p>Only 0.14 g of CO2 is produced every time someone visits this web page. This is cleaner than 86  % of web pages tested</p><p>Calculate your web page footprint <a href='https://www.websitecarbon.com/'>here</a>.<p/><p>Server Stats <img src='imgs/icons8-solar-panels-32.png'> <br> Location: Barcelona | Time: 16:58 CEST | Battery status: Charging | Power used: 2.50W | Uptime: 12 weeks, 2 days, 6 hours, 19 minutes</p></div>").insertAfter("#sep_nav")
        }

        if($("#alessandro").length === 1)
        {


            if ($("#dither_1_ale".length === 0) && (name === 'future')) {
                $("<img class='img-fluid opening_img dithered_images' id='dither_1_ale' src='imgs/dither_it_article_1_1.png'>").insertBefore("#contrassegno")
            }

            if ($("#dither_2_ale".length === 0) && (name === 'future')) {
                $("<img class='img-fluid opening_img dithered_images' id='dither_2_ale' src='imgs/dither_it_article_2_1.png'>").insertBefore("#contrassegno2")
            }

            if ($("#dither_3_ale".length === 0) && (name === 'future')) {
                $("<img class='img-fluid opening_img dithered_images' id='dither_3_ale' src='imgs/dither_it_article_3_1.png'>").insertBefore("#contrassegno3")
            }

            $("#second_image_second_article").replaceWith("<img class='img-fluid article_images' id='second_image_second_article' src='imgs/dither_it_article_2_2.png'>")
            $("#third_image_second_article").replaceWith("<img class='img-fluid article_images' id='second_image_second_article' src='imgs/dither_it_article_2_3.png'>")
            $("#fourth_image_second_article").replaceWith("<img class='img-fluid article_images' id='second_image_second_article' src='imgs/dither_it_article_2_4.png'>")

        }

        if($("#francesca").length === 1) {
            
            $("#first_img_one").replaceWith("<img class='first_img cover_image img-fluid dithered_images' id='first_img_one' src='imgs/dither_it_fra1.jpg'>")
            $("#first_img_two").replaceWith("<img class='first_img cover_image img-fluid' id='first_img_two' src='imgs/dither_it_fra2.jpeg'>")
            $("#first_img_three").replaceWith("<img class='first_img cover_image img-fluid' id='first_img_three' src='imgs/dither_it_fra3.jpeg'>")
        }

        if($("#lorenza").length === 1) {
            $("#fig_article").replaceWith("<img id='fig_article1' src='imgs/dither_it_lorenza1.jpeg' class='dithered_images' width='300'>")
            $("#fig2").replaceWith("<img id='fig2' src='imgs/dither_it_lorenza2.jpeg' class='dithered_images' width='300'>")
            $("#fig_article3").replaceWith("<img id='fig_article' src='imgs/dither_it_lorenza3.jpeg' class='dithered_images' width='300'>")
            $("#fig3_2").replaceWith("<img id='fig3_2' src='imgs/dither_it_lorenza4.jpeg' class='dithered_images' width='300'>")
            $("#fig3_3").replaceWith("<img id='fig3_3' src='imgs/dither_it_lorenza5.jpeg' class='dithered_images' width='300'>")

        }
    }


    else{
        $("#solar_bar").remove();
        $("#nav_hr").remove();
        $(".opening_img_future").remove();
        $(".blackout").remove();
        $(".blackout-sentence").remove();
        $(".dithered_images").remove();

    }


}


function keepstyle(pagestyle){
  var style = document.getElementById(pagestyle).getAttribute("href");
  sessionStorage.setItem('currentstyle', style);

}


$(document).ready(function(){
  if (sessionStorage.getItem("currentstyle")){
    var style = sessionStorage.getItem("currentstyle");
    
    if (style==="style/home.css"){
      document.getElementById("pagestyle").setAttribute("href", "style/issue.css");
      $(".container_articles").attr('class', 'container-fluid container_articles');
    }


    if (style==="style/home_illuminism.css"){
      change('illuminist');
    }

    if (style==="style/home_hobbyhorse.css"){
       change('hobbyhorse');
    }

    if (style==="style/home_belle.css"){
      change('belle');
    }

    if (style==="style/home_analog.css"){
      change('analog');
    }

    if (style==="style/home_tabloid.css"){
      change('tabloid');
    }

    if (style==="style/home_future.css"){
      change('future');
      /*document.getElementById("pagestyle").setAttribute("href", "style/future.css");
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
      $("#fig_article1").replaceWith("<img id='fig_article1' src='imgs/dither_it_lorenza1.jpeg' width='300'>")
      $("#fig2").replaceWith("<img id='fig2' src='imgs/dither_it_lorenza2.jpeg' width='300'>")
      $("#fig_article").replaceWith("<img id='fig_article' src='imgs/dither_it_lorenza3.jpeg' width='300'>")
      $("#fig3_2").replaceWith("<img id='fig3_2' src='imgs/dither_it_lorenza4.jpeg' width='300'>")
      $("#fig3_3").replaceWith("<img id='fig3_3' src='imgs/dither_it_lorenza5.jpeg' width='300'>")*/
    }

 /*passaggio issue-issue*/

     if (style==="style/belle.css"){
      change('belle');
     }

     if (style==="style/tabloid.css"){
      change('tabloid');
     }

     if (style==="style/analog.css"){
      change('analog');
     }

     if (style==="style/illuminism.css"){
      change('illuminist');
     }

     if (style==="style/hobbyhorse.css"){
      change('hobbyhorse');
     }

     if (style==="style/future.css"){
      change('future');
     }

    sessionStorage.clear();
  }


});



