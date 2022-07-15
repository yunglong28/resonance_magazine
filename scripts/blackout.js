
function blackout() {
  document.getElementById("blackout").style.display = "flex";
  document.getElementById("blackout-sentence").style.display = "flex";
}

myTimeout = setTimeout(blackout, 30);/*300000*/