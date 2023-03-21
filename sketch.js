/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

function setup() {
    createCanvas(200, 200, SVG); // Create SVG Canvas
    strokeWeight(1); 
    stroke(255, 0, 0); // red is good for laser
    noFill(); // 
  }
  
  function draw() {
   ///// insert drawing
    
    save("mySVG.svg"); // give file name
    print("saved svg");
    noLoop(); // we just want to export once
  }