function setup() {
   createCanvas(400, 400);
   angleMode(DEGREES);
 }

 function draw() {
   translate(160,0);
   // background(0);
   // translate(200, 200);
   // rotate(-90);
   //
   // let hr = hour();
   // let mn = minute();
   // let sc = second();
   // let secondAngle = map(sc, 0, 60, 0, 360);
   // let minuteAngle = map(mn, 0, 60, 0, 360);
   // let hourAngle = map(hr % 12, 0, 12, 0, 360);
   //
   // strokeWeight(4);
   //
   // push();
   // rotate(secondAngle);
   // stroke(255, 100, 150);
   // line(0, 0, 100, 0);
   // pop();
   //
   // push();
   // rotate(minuteAngle);
   // stroke(150, 100, 255);
   // line(0, 0, 75, 0);
   // pop();
   //
   // push();
   // rotate(hourAngle);
   // stroke(150, 255, 100);
   // line(0, 0, 50, 0);
   // pop();
   //
   // stroke(255);
   // point(0, 0);
   stroke(255);
   background(0);
   for(let i = 0; i< 10; i++){
   strokeWeight(i/2);
   ellipse(i*10,200,4,4);



 }
