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
  console.log(flag);
  if(flag){
    // console.log(grid[Math.floor(event.offsetX / (can.width / grid.length))][Math.floor(event.offsetY / (can.height / grid.length))]);
    if(grid[Math.floor(event.offsetX / (can.width / grid.length))][Math.floor(event.offsetY / (can.height / grid.length))].piece!=null) {
      grid[Math.floor(event.offsetX / (can.width / grid.length))][Math.floor(event.offsetY / (can.height / grid.length))].piece.findMoves();
      drawMoves(grid[Math.floor(event.offsetX / (can.width / grid.length))][Math.floor(event.offsetY / (can.height / grid.length))].piece);
      activePiece=grid[Math.floor(event.offsetX / (can.width / grid.length))][Math.floor(event.offsetY / (can.height / grid.length))];
      if(activePiece.piece.moves.length<1)
      flag=false;
    }
    else {
      flag=false;
    }
  }
  else {
    if(activePiece.piece.moves.includes(grid[Math.floor(event.offsetX/(can.width/grid.length))][Math.floor(event.offsetY/(can.height/grid.length))])) {
      if(grid[Math.floor(event.offsetX/(can.width/grid.length))][Math.floor(event.offsetY/(can.height/grid.length))].piece!=null){
        if(activePiece.piece.color=="Black"){
          p2P.push(grid[Math.floor(event.offsetX/(can.width/grid.length))][Math.floor(event.offsetY/(can.height/grid.length))].piece.piece);
        }
        else{
          p1P.push(grid[Math.floor(event.offsetX/(can.width/grid.length))][Math.floor(event.offsetY/(can.height/grid.length))].piece.piece);
        }

        if(grid[Math.floor(event.offsetX/(can.width/grid.length))][Math.floor(event.offsetY/(can.height/grid.length))].piece.piece=="King")
        console.log("Game Over");
      }
      grid[Math.floor(event.offsetX/(can.width/grid.length))][Math.floor(event.offsetY/(can.height/grid.length))].piece=activePiece.piece;
      activePiece.piece=null;
      grid[Math.floor(event.offsetX/(can.width/grid.length))][Math.floor(event.offsetY/(can.height/grid.length))].piece.x=Math.floor(event.offsetX/(can.width/grid.length))+1;
      grid[Math.floor(event.offsetX/(can.width/grid.length))][Math.floor(event.offsetY/(can.height/grid.length))].piece.y=Math.floor(event.offsetY/(can.height/grid.length))+1;
      draw();
    }
    else {
      console.log("invalid")
    }
  }
  flag==true?flag=false:flag=true;
}
function kingDanger(){
  for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid.length;j++){
      if(grid[i][j].hasPiece()){
      grid[i][j].piece.findMoves();
      for(let k=0;k<grid[i][j].piece.moves.length;k++){
        if(grid[i][j].piece.moves[k].hasPiece()){
      if(grid[i][j].piece.moves[k].piece.color != grid[i][j].piece.color &&  grid[i][j].piece.moves[k].piece.piece == "King"){
console.log(grid[i][j].piece);
        }
      }
}
      }
    }
  }
}
