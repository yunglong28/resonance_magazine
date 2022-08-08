function keepstylehome(pagestyle){
  var style= document.getElementById(pagestyle).getAttribute("href");
  sessionStorage.setItem("currentstyle", style);
}

$(document).ready(function(){
  if (sessionStorage.getItem("currentstyle")){
    var style = sessionStorage.getItem("currentstyle");
    document.getElementById("pagestyle").setAttribute("href", style);
    sessionStorage.clear();
  }
  else{
    document.getElementById('pagestyle').setAttribute("href", 'style/home.css');
  }
});

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

}

 