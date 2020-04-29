let grid = [], flag=true;
create2D(grid,8);
const can = document.getElementById("canvas"),ctx = can.getContext('2d');
ctx.fillStyle = "rgb(255,0,0)";
ctx.fillRect(0,0,can.height,can.width);
ctx.fill();
console.log(grid);
for (let i=0;i<grid.length;i++)
  for (let j=0;j<grid.length;j++)
    grid[i][j] = new spot(i+1,j+1);
