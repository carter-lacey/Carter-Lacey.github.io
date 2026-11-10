let racerXs = [10, 20, 60, 20, 10];
let racrYs = [30, 40, 50, 20, 30];
let startY = 40;
let yStep = 70;
let finishX = 560

function setup() {
  createCanvas(600, startY + yStep * racerXs.length);
}
if (keyIsPressed(LEFT_ARROW)) { finishX = finishX - 20 }
function draw() {
  background(240);
  line(finishX, 0, finishX, height);
  for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;
    if (racerXs[i] < finishX) {
      racerXs[i] += random(1, 3);
    }
    if (i == 1 && racerXs[i] < 150) {
      fill("pink")
    } else {
      fill("blue")
  
    }
    circle(racerXs[i], y, 24);
  }

  if (keyIsDown(UP_ARROW)) {
    racerXs.pop()
  }
  if (keyIsDown(DOWN_ARROW)) { racerXs.push() }

}
