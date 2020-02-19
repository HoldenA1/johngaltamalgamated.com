// Only enables auto-rotate on desktops
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var model = document.getElementById("model");
if (w >= 1200) {
  var att = document.createAttribute("auto-rotate");
  model.setAttributeNode(att);
}
