// Only enables auto-rotate on desktops
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var model = document.getElementById("model");
if (w >= 1200) {
  var att = document.createAttribute("auto-rotate");
  model.setAttributeNode(att);
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
