function keepstylehome(pagestyle){
  var style= document.getElementById('pagestyle').getAttribute("href");
  sessionStorage.setItem("currentstyle", style);
}

$(document).ready(function(){
  if (sessionStorage.getItem("currentstyle")){
    document.getElementById('pagestyle').setAttribute("href", currentstyle);
    sessionStorage.removeItem('currentstyle');
  }
  else{
    document.getElementById('pagestyle').setAttribute("href", 'css/home.css');
  }