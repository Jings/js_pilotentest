var canvas          = document.getElementById("canvas");
var ctx             = canvas.getContext('2d');
canvas.style.width  = canvas.width + "px";
canvas.style.height = canvas.height + "px";

ctx.fillStyle = "rgb(255,0,0)";
ctx.fillRect(15, 35, 65, 65);
ctx.fillRect(210, 15, 65, 50);
ctx.fillRect(18, 250, 35, 65);
ctx.fillRect(245, 260, 105, 20);
ctx.fillStyle = "rgb(0,0,255)";
ctx.fillRect((canvas.height / 2) - (40 / 2), (canvas.width / 2) - (40 / 2), 40, 40);