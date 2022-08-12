function keepstylehome(pagestyle){
  var style= document.getElementById(pagestyle).getAttribute("href");
  sessionStorage.setItem("currentstyle", style);
}/*


$(document).ready(function(){
  if (sessionStorage.getItem("currentstyle")){
    var style = sessionStorage.getItem("currentstyle");
    /*document.getElementById("pagestyle").setAttribute("href", style);
    sessionStorage.clear();
  }
  else{
    alert("hola")
    /*document.getElementById('pagestyle').setAttribute("href", 'style/home.css');
  }
});


$(document).ready(function(){
  if (sessionStorage.getItem("currentstyle")){
    var style = sessionStorage.getItem("currentstyle");
    document.getElementById("pagestyle").setAttribute("href", style);
    sessionStorage.clear();
  }
  else{
    document.getElementById('pagestyle').setAttribute("href", 'style/home.css');
  }
});*/


function change(name) {

  if (name == 'hobbyhorse') {
   $("#pagestyle").attr('href','style/home_hobbyhorse.css');
   $("#mag_img").replaceWith("<img id='mag_img' src='imgs/ars.png' width='600' >")
   $("#yet_img").replaceWith("<img id='yet_img' src='imgs/flowers.png' height='370'>")
   $("#birdz").prepend('<img id="block1" src="imgs/birds3.png" width="250">')
   $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/cellotabloid.png'>")
  $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harptabloid.png'>")
     $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/gramophonetabloid.png'>")
        $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/strobotabloid.png'>")
           $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxtabloid.png'>")
              $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodtabloid.png'>")

 }

   if (name == 'belle') {
    $("#pagestyle").attr('href','style/home_belle.css');
    $("#mag_img").replaceWith("<img id='mag_img' src='imgs/amazzone.png' height='550'>")
    $("#yet_img").replaceWith("<img id='yet_img' src='imgs/pattinatrice.png' height='550'>")
  }

  if (name == 'tabloid') {
    $("#pagestyle").attr('href','style/home_tabloid.css');
    $("#mag_img").replaceWith("<img id='mag_img' src='imgs/may.png' height='550'>")
    $("#yet_img").replaceWith("<img id='yet_img' src='imgs/queen_elizabeth.png' height='550'>")
  }

  if (name == 'disco') {
   $("#pagestyle").attr('href','style/home_analog.css');
   $("#mag_img").remove()
   $(".colimg").append('<p> <img class="star_img"  src="imgs/star.png" ></p> <p> <img  class="tastiera_img" src="imgs/tastiera.png" > </p>')
   $("#yet_img").replaceWith("<img id='yet_img' src='imgs/records.jpg' height='450'>")
   $("#cello").replaceWith("<img class='icons' id='cello' src='imgs/celloanalog.png'>")
  $("#harp").replaceWith("<img class='icons' id='harp' src='imgs/harpanalog.png'>")
     $("#gramophone").replaceWith("<img class='icons' id='gramophone' src='imgs/vynilanalog.png'>")
        $("#disco").replaceWith("<img class='icons' id='disco' src='imgs/stroboanalog.png'>")
           $("#boombox").replaceWith("<img class='icons' id='boombox' src='imgs/boomboxanalog.png'>")
              $("#walkman").replaceWith("<img class='icons' id='walkman' src='imgs/ipodanalog.png'>")



 }

}
