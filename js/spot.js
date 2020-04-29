function spot(i,j) {
  this.i = i;
  this.j = j;
  this.piece = "none";
  this.i+this.j%2==0?this.color="white":this.color="brown";
}
