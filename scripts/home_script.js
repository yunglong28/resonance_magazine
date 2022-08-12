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

  if (name === 'illuminist') {
      $("#pagestyle").attr('href','style/home_illuminism.css');
      $("#mag_img").replaceWith("<img id='mag_img' src='imgs/kendrick__illuminism.png' height='550' filter='sepia'>")
      $("#yet_img").replaceWith("<img id='yet_img' src='imgs/didot_transparent.png' height='550'>")
      $("#marquee_1").remove()
      $("#marquee_2").remove()
  }

    if (name === 'future') {
        $("#pagestyle").attr('href','style/home_future.css');
        $("#mag_img").replaceWith("<img id='mag_img' src='imgs/dither_it_mag.jpeg' height='550'>")
        $("#yet_img").replaceWith("<img id='yet_img' src='imgs/dither_it_records.jpg' height='550'>")

        /* ICONE */
        $("#cello").attr('src','imgs/dither_it_cello.png');
        $("#harp").attr('src','imgs/dither_it_harp.png');
        $("#gramophone").attr('src','imgs/dither_it_gramophone.png');
        $("#disco").attr('src','imgs/dither_it_disco.png');
        $("#boombox").attr('src','imgs/dither_it_boombox.png');
        $("#walkman").attr('src','imgs/dither_it_walkman.png');

    }

}

 