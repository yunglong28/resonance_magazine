function change(name) {

   if (name == 'home') {
     $("#pagestyle").attr('href','style/documentation_alt.css');
   }

   if (name == 'illuminist') {
     $("#pagestyle").attr('href','style/documentation_illuminism.css');
   }

   if (name == 'hobbyhorse') {
     $("#pagestyle").attr('href','style/documentation_hobbyhorse.css');
   }


    if (name == 'belle') {
     $("#pagestyle").attr('href','style/documentation_belle.css');
   }

    if (name == 'disco') {
     $("#pagestyle").attr('href','style/documentation_analog.css');
   }

   if (name == 'tabloid') {
     $("#pagestyle").attr('href','style/documentation_tabloid.css');
   }

   if (name == 'future') {
     $("#pagestyle").attr('href','style/documentation_future.css');
   }

};

function keepstyle(pagestyle){
  var style = document.getElementById(pagestyle).getAttribute("href");
  sessionStorage.setItem('currentstyle', style);

}


$(document).ready(function(){
  if (sessionStorage.getItem("currentstyle")){
    var style = sessionStorage.getItem("currentstyle");
    
    if (style==="style/home.css"||style==="style/issue.css"){
      change('home')
    }

    if (style==="style/home_illuminism.css"||style==="style/illuminism.css"){
      change('illuminist')
    }

    if (style==="style/home_hobbyhorse.css"||style==="style/hobbyhorse.css"){
      change('hobbyhorse')
    }


    if (style==="style/hom_belle.css"||style==="style/belle.css"){
      change('belle')
    }

    if (style==="style/home_analog.css"||style==="style/analog.css"){
     	change('disco')
    }


    if (style==="style/home_tabloid.css"||style==="style/tabloid.css"){
     	change('tabloid')
    }

    if (style==="style/home_future.css"||style==="style/future.css"){
     	change('future')
    }


}
});

