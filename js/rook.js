function Rook(x,y,color) {
  this.x=x;
  this.y=y;
  this.color=color;
  this.piece="Rook";
  this.text="R";
  this.moves = [];
  this.findMoves=function(){
    this.moves=[];
    for(let i=this.x;i<8;i++) {
      if(grid[i][this.y-1].piece==null)
      this.moves.push(grid[i][this.y-1]);
      else{
        if(grid[i][this.y-1].piece.color!=this.color){
          this.moves.push(grid[i][this.y-1]);
        }
        break;
      }
    }
    for(let i=this.x-2;i>=0;i--){
      if(grid[i][this.y-1].piece==null)
      this.moves.push(grid[i][this.y-1]);
      else{
        if(grid[i][this.y-1].piece.color!=this.color){
          this.moves.push(grid[i][this.y-1]);
        }
        break;
      }
    }
    for(let i=this.y;i<8;i++) {
      if(grid[this.x-1][i].piece==null){
        this.moves.push(grid[this.x-1][i]);
      }
      else{
        if(grid[this.x-1][i].piece.color!=this.color){
          this.moves.push(grid[this.x-1][i]);
        }
        break;
      }
    }
    for(let i=this.y-2;i>=0;i--){
      if(grid[this.x-1][i].piece==null){
        this.moves.push(grid[this.x-1][i]);
      }
      else{
        if(grid[this.x-1][i].piece.color!=this.color){
          this.moves.push(grid[this.x-1][i]);
        }
        break;
      }
    }
  }
}
