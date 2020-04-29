let grid = [], flag=true;
create2D(grid,8);
const can = document.getElementById("canvas"),ctx = can.getContext('2d');
ctx.fillStyle = "rgb(255,0,0)";
ctx.fillRect(0,0,can.height,can.width);
ctx.fill();
console.log(grid);
