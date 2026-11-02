function setup() {
  createCanvas(400, 400);
}

let pupilmoveup = 175;
let pupilmoveupsecond = 175;
let firstpupilmoveleft = 150;
let secondpupilmoveright = 250;
let bigeyeup = 175;
let bigeyeup2 = 175;
let killswitch1 = 25;
let bigsize1 = 50;
let bigsize2 = 50;
let whiteeyeside = 250;
let firstwhiteeyeside = 150;
let blue1 = 200;
let blue2 = 200;
let bigblue = 200;
let arc1 = 200;
let arc2 = 230;
let arc3 = 90;
let arc4 = 70;
let arc5 = 3;
let l = 5;
let oo = 40;
let p = 50;
let movehair = 40;
let movehair1 = 40;
let movehair2 = 220;
let movehair3 = 250;
let movehair4 = 90;
function draw() {
  let dotx = mouseX;
  let doty = mouseY;
  if (keyIsDown(RIGHT_ARROW)) {
    pupilmoveup = pupilmoveup - 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    pupilmoveup = pupilmoveup + 3;
  }
  if (keyIsDown("r")) {
    pupilmoveupsecond = pupilmoveupsecond - 3;
  }
  if (keyIsDown("e")) {
    pupilmoveupsecond = pupilmoveupsecond + 3;
  }
  if (keyIsDown(UP_ARROW)) {
    firstpupilmoveleft = firstpupilmoveleft + 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    secondpupilmoveright = secondpupilmoveright - 3;
  }
  if (keyIsDown("q")) {
    firstpupilmoveleft = firstpupilmoveleft - 3;
  }
  if (keyIsDown("w")) {
    secondpupilmoveright = secondpupilmoveright + 3;
  }
  if (keyIsDown("t")) {
    killswitch1 = killswitch1 + 300;
  }
  if (keyIsDown("y")) {
    killswitch1 = killswitch1 + 300;
  }
  if (keyIsDown("u")) {
    killswitch1 = killswitch1 + 300;
  }
  if (keyIsDown("i")) {
    bigeyeup = bigeyeup + 3;
  }
  if (keyIsDown("o")) {
    bigeyeup = bigeyeup - 3;
  }
  if (keyIsDown("m")) {
    bigeyeup2 = bigeyeup2 + 3;
  }
  if (keyIsDown("o")) {
    bigeyeup2 = bigeyeup2 - 3;
  }
  if (keyIsDown("p")) {
    bigsize1 = bigsize1 - 3;
  }
  if (keyIsDown("a")) {
    bigsize1 = bigsize1 + 3;
  }
  if (keyIsDown("s")) {
    bigsize2 = bigsize2 - 3;
  }
  if (keyIsDown("d")) {
    bigsize2 = bigsize2 + 3;
  }
  if (keyIsDown("f")) {
    firstwhiteeyeside = firstwhiteeyeside - 3;
  }
  if (keyIsDown("g")) {
    firstwhiteeyeside = firstwhiteeyeside + 3;
  }
  if (keyIsDown("h")) {
    whiteeyeside = whiteeyeside - 3;
  }
  if (keyIsDown("j")) {
    whiteeyeside = whiteeyeside + 3;
  }
  if (keyIsDown("k")) {
    bigblue = bigblue + 3;
  }
  if (keyIsDown("l")) {
    bigblue = bigblue - 3;
  }
  if (keyIsDown("z")) {
    blue1 = blue1 + 3;
  }
  if (keyIsDown("x")) {
    blue1 = blue1 - 3;
  }
  if (keyIsDown("c")) {
    blue2 = blue2 + 3;
  }
  if (keyIsDown("v")) {
    blue2 = blue2 - 3;
  }
  if (keyIsDown("b")) {
    arc1 = arc1 + 3;
  }
  if (keyIsDown("n")) {
    arc1 = arc1 - 3;
  }
  if (keyIsDown("9")) {
    arc2 = arc2 + 3;
  }
  if (keyIsDown("8")) {
    arc2 = arc2 - 3;
  }
  if (keyIsDown("7")) {
    arc3 = arc3 - 3;
  }
  if (keyIsDown("6")) {
    arc3 = arc3 + 3;
  }
  if (keyIsDown("5")) {
    arc4 = arc4 - 3;
  }
  if (keyIsDown("4")) {
    arc4 = arc4 + 3;
  }
  if (keyIsDown("3")) {
    arc5 = arc5 - 3;
  }
  if (keyIsDown("2")) {
    arc5 = arc5 + 3;
  }
  if (keyIsDown("1")) {
    circle(20, 30, 80);
  }

  if (
    pupilmoveup > 0 &&
    pupilmoveup < 75 &&
    firstpupilmoveleft > 0 &&
    firstpupilmoveleft < 75 &&
    blue1 > 0 &&
    blue1 < 75 &&
    blue2 > 0 &&
    blue2 < 75 &&
    bigblue > 0 &&
    bigblue < 75 &&
    whiteeyeside > 0 &&
    whiteeyeside < 75 &&
    firstwhiteeyeside > 0 &&
    firstwhiteeyeside < 75 &&
    bigeyeup > 0 &&
    bigeyeup < 75 &&
    bigeyeup2 > 0 &&
    bigeyeup2 < 75 &&
    secondpupilmoveright > 0 &&
    secondpupilmoveright < 75 &&
    pupilmoveupsecond > 0 &&
    pupilmoveupsecond < 75
  ) {
    background("green");
  } else {
    background("pink");
  }
  fill("gray");
  rect(0, 0, 75);

  fill("lightblue");
  circle(blue1, blue2, bigblue);
  fill("white");
  circle(firstwhiteeyeside, bigeyeup, bigsize1);
  circle(whiteeyeside, bigeyeup2, bigsize2);
  fill("black");
  circle(firstpupilmoveleft, pupilmoveup, killswitch1);
  circle(secondpupilmoveright, pupilmoveupsecond, killswitch1);

  fill("lightblue");
  arc(arc1, arc2, arc3, arc4, killswitch1, arc5);
  fill("tan");
  for (let i = 0; i < l; i++) {
    let x = oo + p * i;
    triangle(movehair, movehair3, movehair2, movehair, x, movehair4);
  }

  if (keyIsDown("9")) {
    movehair = movehair + 3;
  }
  if (keyIsDown("8")) {
    movehair = movehair - 3;
  }
  if (keyIsDown("7")) {
    movehair1 = movehair1 + 3;
  }
  if (keyIsDown("6")) {
    movehair1 = movehair1 - 3;
  }
  if (keyIsDown("5")) {
    movehair2 = movehair2 + 3;
  }
  if (keyIsDown("4")) {
    movehair2 = movehair2 - 3;
  }
  if (keyIsDown("3")) {
    movehair3 = movehair3 + 3;}
  if (keyIsDown("2")) {
    movehair3 = movehair3 - 3;
  }
  if (keyIsDown("1")) {
    movehair4 = movehair4 + 3;
  }
  if (keyIsDown("9")) {
    movehair4 = movehair4 - 3;
  }
}
