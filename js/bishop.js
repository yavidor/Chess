function Bishop(x,y,color){
  this.x=x;
  this.y=y;
  this.color=color;
  this.piece="Bishop";
  this.text="B";
  this.moves=[];
  this.findMoves=function(){
    this.moves=[];
    for (let i=1;i<8;i++){
      if(this.x-1+i<8&&this.y-1+i<8&&this.x-1+i>-1&&this.y-1+i>-1){
        if(grid[this.x-1+i][this.y-1+i].piece==null){
          this.moves.push(grid[this.x-1+i][this.y-1+i]);
        }
        else{
          if(grid[this.x-1+i][this.y-1+i].piece.color!=this.color){
            this.moves.push(grid[this.x-1+i][this.y-1+i]);
          }
          break;

        }
      }
    }
    for (let i=1;i<8;i++){
      if(this.x-1-i>-1&&this.y-1-i>-1&&this.x-1-i<8&&this.y-1-i<8){
        if(grid[this.x-1-i][this.y-1-i].piece==null)
        this.moves.push(grid[this.x-1-i][this.y-1-i]);
        else {
          if(grid[this.x-1-i][this.y-1-i].piece.color!=this.color){
            this.moves.push(grid[this.x-1-i][this.y-1-i]);
          }
          break;
        }
      }
    }
    for (let i=1;i<8;i++){
      if(this.x-1+i>-1&&this.y-1-i>-1&&this.x-1+i<8&&this.y-1-i<8){
        if(grid[this.x-1+i][this.y-1-i].piece==null)
        this.moves.push(grid[this.x-1+i][this.y-1-i]);
        else {
          if(grid[this.x-1+i][this.y-1-i].piece.color!=this.color){
            this.moves.push(grid[this.x-1+i][this.y-1-i]);
          }
          break;
        }
      }
    }
    for (let i=1;i<8;i++){
      if(this.x-1-i>-1&&this.y-1+i>-1&&this.x-1-i<8&&this.y-1+i<8){
        if(grid[this.x-1-i][this.y-1+i].piece==null){
          this.moves.push(grid[this.x-1-i][this.y-1+i]);
        }
        else {
          if(grid[this.x-1-i][this.y-1+i].piece.color!=this.color){
            this.moves.push(grid[this.x-1-i][this.y-1+i]);
          }
          break;
        }
      }
    }
  }
}
