let grid = new Array(8), flag=true, p1P = [], p2P = [], activePiece=null;
grid=create2D(grid);
const can = document.getElementById("canvas"),ctx = can.getContext('2d');
function setup(){
  ctx.fillStyle = "rgb(255,255,255)";
  ctx.fillRect(0,0,can.height,can.width);
  console.log(grid);
  for (let x=0;x<grid.length;x++) for (let y=0;y<grid.length;y++)
  grid[x][y] = new spot(x+1,y+1);
  ctx.fillStyle="rgb(0,0,0)";
  grid[0][0].piece = new Rook(1,1,"Black");
  grid[1][0].piece = new Knight(2,1,"Black");
  grid[2][0].piece = new Bishop(3,1,"Black");
  grid[3][0].piece = new Queen(4,1,"Black");
  grid[4][0].piece = new King(5,1,"Black");
  grid[5][0].piece = new Bishop(6,1,"Black");
  grid[6][0].piece = new Knight(7,1,"Black");
  grid[7][0].piece = new Rook(8,1,"Black");
  for (let i=0;i<grid.length;i++)
  grid[i][1].piece = new Pawn(i+1,2,"Black");
  grid[0][7].piece = new Rook(1,8,"White");
  grid[1][7].piece = new Knight(2,8,"White");
  grid[2][7].piece = new Bishop(3,8,"White");
  grid[3][7].piece = new Queen(4,8,"White");
  grid[4][7].piece = new King(5,8,"White");
  grid[5][7].piece = new Bishop(6,8,"White");
  grid[6][7].piece = new Knight(7,8,"White");
  grid[7][7].piece = new Rook(8,8,"White");
  for (let i=0;i<grid.length;i++)
  grid[i][6].piece = new Pawn(i+1,7,"White");
}
setup();
function draw(){
  console.log("White caught: " + p1P);
  console.log("Black caught: " + p2P);
  for(let x=0;x<grid.length;x++){
  for (let y=0;y<grid.length;y++){
    ctx.fillStyle=grid[x][y].color;
    ctx.fillRect(x * (can.width / grid.length), y * (can.height / grid.length), (can.width / grid.length) , (can.height / grid.length));
    if(grid[x][y].piece!=null)
    {
      if(grid[x][y].piece.color=="Black")
      ctx.fillStyle="Black";
      else {
        ctx.fillStyle="Gray";
      }
      ctx.font="20px sans-serif"
      ctx.fillText(grid[x][y].piece.text,x *(can.width / grid.length), grid[x][y].y*(can.height / grid.length));
    }
  }
}
}
draw();
