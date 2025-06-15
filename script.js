$("#body").css("background", "#222");
function changeColor() {
  const r = Math.round(Math.random() * 156)+100;
  const g = Math.round(Math.random() * 156)+100;
  const b = Math.round(Math.random() * 156)+100;
  var color = `rgb(${r}, ${g}, ${b})`;
  $("#body").css("background", color);
  $(".color").css("color", color);
  $("#rgb").text(color);
  $("#hex").text(rgbToHex(r, g, b));
}
$(".header").css("background", "#DDDDDD33")
function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}