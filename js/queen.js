function Queen(x,y,color){
  this.x=x;
  this.y=y;
  this.color=color;
  this.piece="Queen";
  this.text="Q";
  this.moves=[];
this.findMoves=
function() {
  for (let i=1;i<8;i++){
    if(this.x-1+i<8&&this.y-1+i<8&&this.x-1+i>-1&&this.y-1+i>-1){
      if(grid[this.x-1+i][this.y-1+i].piece==null)
      this.moves.push(grid[this.x-1+i][this.y-1+i]);
      else {
        break;
      }
    }
  }
  for (let i=1;i<8;i++){
    if(this.x-1-i>-1&&this.y-1-i>-1&&this.x-1-i<8&&this.y-1-i<8){
      if(grid[this.x-1-i][this.y-1-i].piece==null)
      this.moves.push(grid[this.x-1-i][this.y-1-i]);
      else {
        break;
      }
    }
  }
  for (let i=1;i<8;i++){
    if(this.x-1+i>-1&&this.y-1-i>-1&&this.x-1+i<8&&this.y-1-i<8){
      if(grid[this.x-1+i][this.y-1-i].piece==null)
      this.moves.push(grid[this.x-1+i][this.y-1-i]);
      else {
        break;
      }
    }
  }
  for (let i=1;i<8;i++){
    if(this.x-1-i>-1&&this.y-1+i>-1&&this.x-1-i<8&&this.y-1+i<8){
      if(grid[this.x-1-i][this.y-1+i].piece==null)
      this.moves.push(grid[this.x-1-i][this.y-1+i]);
      else {
        break;
      }
    }
    for(let i=this.x;i<8;i++)
      if(grid[i][this.y-1].piece==null)
      this.moves.push(grid[i][this.y-1]);
      else
      break;
      for(let i=this.x-2;i>=0;i--)
      if(grid[i][this.y-1].piece==null)
      this.moves.push(grid[i][this.y-1]);
      else
      break;
      for(let i=this.y;i<8;i++)
        if(grid[this.x-1][i].piece==null)
        this.moves.push(grid[this.x-1][i]);
        else
        break;
        for(let i=this.y-2;i>=0;i--)
        if(grid[this.x-1][i].piece==null)
        this.moves.push(grid[this.x-1][i]);
        else
        break;

  }
}
}
