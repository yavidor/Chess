function spot(x,y) {
  this.x = x;
  this.y = y;
  this.piece = null;
  (this.x+this.y)%2==0?this.color="white":this.color="brown";
}
function hasPiece(){
  return this.piece !=null;
}
function getX(){
  return x;
}
function setX(x){
  this.x=x;s
}
