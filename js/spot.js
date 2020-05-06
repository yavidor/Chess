function spot(x,y) {
  this.x = x;
  this.y = y;
  this.piece = null;
  (this.x+this.y)%2==0?this.color="white":this.color="brown";
  this.hasPiece = function(){
    return this.piece!=null;
  }
  this.getX =function (){
    return x;
  }
  this.setX= function(x){
    this.x=x;
  }}
