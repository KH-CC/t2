function Dot(x, y, vx, vy, sz, c) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.sz = sz;
  this.c = c;

  // update its current position
  this.move = function() {
    this.x += this.vx;
    this.y += this.vy;
  }

  // fill with color and draw on the screen
  this.render = function() {
    fill(c);
    ellipse(this.x, this.y, this.sz, this.sz)
  }
}
