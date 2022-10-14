let ctrx=100;              //horizontal value for 1st figure
let ctry =160;            //vertical value for 1st figure
let faceWidth = 80;                //width for 1st figure
let faceHeight = 100;                  //height for 1st figure
let skinnyFaceWidth = 60;                //width for 2nd figure
let skinnyFaceHeight = 130;                    //height for 2nd figure
let eyeSize = 10;                      //eye size
let skintone;                            //color for skin to be set in setup
function setup()                      //header for setup function
{
  createCanvas(800,600);                    //set sze for window
  ellipseMode(CENTER);      //parameters for ellipse will start in the center
  skintone=color(255, 224, 189); //set color for faces. Please feel free to set the color
}

function draw()      //header for draw function
{
  daddy(ctrx, ctry, faceWidth, faceHeight);    //invoke daddy function withone set of parameters
  daddy(3*ctrx, 2*ctry, skinnyFaceWidth, skinnyFaceHeight);   //invoke daddy function with another set of parameters. notice the modified parameters
}
function daddy(x,y,w,h)  //header for daddy function
{
  noStroke();
  fill(skintone);
  let eyeXoffset = int((15.0/80.0)*w);    //calculate eye X offset as expression using w parameter
  let eyeYoffset = int(.35*h);    //calculate eye Y offset as expression using h parameter
  let mouthYoffset = int(.10*h);    //calculate mouth Y offset as expression using h parameter
  let mouthWidth = int(.5*w);        //calculate mouth width as expression using w parameter 
  let mouthHeight = int(.3*h)    //calculate mouth height as expression using h parameter
  let hairOffsetY = eyeYoffset*3;     //calculate hair Y offset in terms of already calculated eye offset
  let hairRadius = 3*eyeSize;        //calculate hair arc radius in expression of eye size
  ellipse(x,y,1.2*w,h);            //draw part of face
  ellipse(x,y-h/2,w,h);            //draw part of face
  stroke(0);                       //now set stroke to blcak
  fill(0);          //set fill to black
  ellipse(x-eyeXoffset, y-eyeYoffset, eyeSize, eyeSize);        //draw left eye
  ellipse(x+eyeXoffset, y-eyeYoffset, eyeSize, eyeSize);      //draw right eye
  noFill();          //turn off fill
  arc(x,y-hairOffsetY,hairRadius,hairRadius,-PI/2,PI/2);     //Draw the lower part of single hair
  arc(x,y-hairOffsetY-hairRadius,hairRadius,
hairRadius,PI/2,PI*3/2);      //Draw the upper part of single hair
  stroke(240,0,0);        //set stroke to reddish
  arc(x,y+mouthYoffset,mouthWidth,mouthHeight,
QUARTER_PI,3*QUARTER_PI);                //draw the mouth
}
  
