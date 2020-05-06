function create2D(arr) {
  for (let i = 0; i < arr.length; i++)
  arr[i] = new Array(arr.length);
  return arr;
}
function drawMoves(piece){
  for(let i=0;i<8;i++){
    for (let j=0;j<8;j++){
      if(grid[piece.x-1][piece.y-1].piece.moves.includes(grid[i][j])){
        ctx.fillStyle="rgba(0,0,0,0.75)";
        ctx.fillRect(i * (can.width / grid.length), j * (can.height / grid.length), (can.width / grid.length) , (can.height / grid.length));
      }
    }
  }
}
function clickedd(event) {
  draw();

  // console.log(grid[Math.floor(event.offsetX / (can.width / grid.length))][Math.floor(event.offsetY / (can.height / grid.length))]);
  if(grid[Math.floor(event.offsetX / (can.width / grid.length))][Math.floor(event.offsetY / (can.height / grid.length))].piece!=null){
    grid[Math.floor(event.offsetX / (can.width / grid.length))][Math.floor(event.offsetY / (can.height / grid.length))].piece.findMoves();
    drawMoves(grid[Math.floor(event.offsetX / (can.width / grid.length))][Math.floor(event.offsetY / (can.height / grid.length))].piece);


  }
}
