function Station(x, y) {
  this.x = x;
  this.y = y;
  this.dots = [];

  // fill the array of dots of the station with initialized dots
  this.init = function(pass, color) {
    for (var i = 0; i < pass; i++) {
      this.dots[i] = new Dot(this.x, this.y, random(-2, 2), random(-2, 2), 10, color);
    }
  }

  // calls Dot's functions move and render, using the index to select which dot
  this.show = function(index) {
    this.dots[index].move();
    this.dots[index].render();
  }
}
