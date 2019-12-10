var subQdata;
let url;
let dataObj;
let stations = [];
let currentStation = 0;
let index, bright;
let posStation = [];
let Nsin;
var img;

// preload data
function preload() {
  img = loadImage('background.png');
  url = 'http://openapi.seoul.go.kr:8088/45786a556e6b6768363467634e5979/json/CardSubwayStatsNew/44/53/20191204';
  dataObj = loadJSON(url, onSubQ);
}

// find the stations location on the map and initiate the dots
// every station as an array of dots inside, check the relative file
function setup() {
  createCanvas(windowWidth, windowHeight);
  setStationLocations();
  initDots();
}

// just draw the dots at the last station clicked
function draw() {
  background(img);
  for (var i = 0; i < stations[currentStation].dots.length; i++) {
    stations[currentStation].show(i);
  }
}

// save the data to a local variable
function onSubQ() {
  subQdata = dataObj.CardSubwayStatsNew;
}

// restore the dots to their initial position
// and set a new color to the station everytime this is called
function initDots() {
  for (var i = 0; i < subQdata.row.length; i++) {
    Nsin = map(subQdata.row[i].RIDE_PASGR_NUM, 0, 100000, 10, 800);
    let col = color(random(255), random(255), random(255));
    stations[i].init(floor(Nsin), col);
  }
}

// activated when the mouse is pressed, it checks which station is the
// closest to the click and change the value of currentStation, which is
// use in draw to select the selection where the animation is played
function mousePressed() {
  initDots();
  let minDist = 500;
  for (var i = 0; i < stations.length; i++) {
    let d = floor(dist(mouseX, mouseY, stations[i].x, stations[i].y));
    if (d < minDist) {
      minDist = d;
      currentStation = i;
    }
  }
}

// harcoded station locations based on window sizes
function setStationLocations() {
  stations[0] = new Station(62 * windowWidth/575, windowHeight * 2 / 7);
  stations[1] = new Station(156 * windowWidth/575, windowHeight * 2 / 7);
  stations[2] = new Station(255 * windowWidth/575, windowHeight * 2 / 7);
  stations[3] = new Station(366 * windowWidth/575, windowHeight * 2 / 7);
  stations[4] = new Station(478 * windowWidth/575, windowHeight * 2 / 7);
  stations[5] = new Station(442 * windowWidth/575, windowHeight * 6 / 9);
  stations[6] = new Station(339 * windowWidth/575, windowHeight * 6 / 9);
  stations[7] = new Station(233 * windowWidth/575, windowHeight * 6 / 9);
  stations[8] = new Station(134 * windowWidth/575, windowHeight * 6 / 9);
  stations[9] = new Station(44 * windowWidth/575, windowHeight * 6 / 9);
}
