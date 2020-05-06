function King(x,y,color){
  this.x=x;
  this.y=y;
  this.color=color;
  this.piece="King";
  this.text="Ki";
  this.moves=[];
  this.findMoves =
  function() {
    if(this.x-2>-1){
      if(grid[this.x-2][this.y-1].piece==null)
      this.moves.push(grid[this.x-2][this.y-1]);
      if(this.y-2>-1)
      if(grid[this.x-2][this.y-2].piece==null)
      this.moves.push(grid[this.x-2][this.y-2]);
      if(this.y<8)
      if(grid[this.x-2][this.y].piece==null)
      this.moves.push(grid[this.x-2][this.y]);
    }
    if(this.x<8){
      if(grid[this.x][this.y-1].piece==null)
      this.moves.push(grid[this.x][this.y-1]);
      if(this.y-2>-1)
      if(grid[this.x][this.y-2].piece==null)
      this.moves.push(grid[this.x][this.y-2]);
      if(this.y<8)
      if(grid[this.x][this.y].piece==null)
      this.moves.push(grid[this.x][this.y]);
    }
    if(this.y-2>-1)
    if(grid[this.x-1][this.y-2].piece==null)
    this.moves.push(grid[this.x-1][this.y-2]);
    if(this.y<8)
    if(grid[this.x-1][this.y].piece==null)
    this.moves.push(grid[this.x-1][this.y]);

  }
}
