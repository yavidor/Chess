function Knight(x,y,color){
  this.x=x;
  this.y=y;
  this.color=color;
  this.piece="Knight";
  this.text="K";
  this.moves=[];
  this.findMoves=function(){
    if (this.x+2<=8){
      if(this.y+1<=8)
      if(grid[this.x+1][this.y].piece==null)
      this.moves.push(grid[this.x+1][this.y]);
      if(this.y-1>0)
      if(grid[this.x+1][this.y-2].piece==null)
      this.moves.push(grid[this.x+1][this.y-2]);

    }
    if (this.x-2>0){
      if(this.y+1<=8)
      if(grid[this.x-3][this.y].piece==null)
      this.moves.push(grid[this.x-3][this.y]);
      if(this.y-1>0)
      if(grid[this.x-3][this.y-2].piece==null)
      this.moves.push(grid[this.x-3][this.y-2]);

    }
    if (this.y+2<=8){
      if(this.x+1<=8)
      if(grid[this.x][this.y+1].piece==null)
      this.moves.push(grid[this.x][this.y+1]);
      if(this.x-1>0)
      if(grid[this.x-2][this.y+1].piece==null)
      this.moves.push(grid[this.x-2][this.y+1]);

    }
    if (this.y-2>0){
      if(this.x+1<=8)
      if(grid[this.x][this.y-3].piece==null)
      this.moves.push(grid[this.x][this.y-3]);
      if(this.x-1>0)
      if(grid[this.x-2][this.y-3].piece==null)
      this.moves.push(grid[this.x-2][this.y-3]);

    }
  }}
